import React, { useState } from 'react';
import { StyledForm, StyledTextInput } from "./Search.style";
import { useAppContext } from "../../state/store";

const Search = () => {
    const [ isInFocus, setIsInFocus ] = useState(false);

    const { searchQuery, changeSearchQuery } = useAppContext()

    const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeSearchQuery((e.target.value));
    }

    return (
        <StyledForm onSubmit={ e => e.preventDefault() }>
            <StyledTextInput type="text" value={ searchQuery } onChange={ (e) => onSearchInputChange(e) }
                             placeholder={ isInFocus ? '' : 'Search...' } onFocus={ () => setIsInFocus(true) }
                             onBlur={ () => setIsInFocus(false) }/>
        </StyledForm>
    );
};

export default Search;