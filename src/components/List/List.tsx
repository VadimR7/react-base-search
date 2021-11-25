import React from 'react';
import ListItem from "./ListItem";
import { useAppContext } from "../../state/store";
import { StyledListContainer } from "./List.style";

const List = () => {
    const { data } = useAppContext();

    return (
        <StyledListContainer>
            {
                data.map((itemData, index) => (
                    <ListItem key={ `${ itemData }_${ index }` } item={ itemData }/>
                ))
            }
        </StyledListContainer>
    );
};

export default List;