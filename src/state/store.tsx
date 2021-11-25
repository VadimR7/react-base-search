import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { BaseComponentProps } from "../types";
import appData from '../JSONData/appData'
import { searchFilter } from "../helpers";

interface AppContextProps extends BaseComponentProps {
    data: string[];
    searchQuery: string;
    changeSearchQuery: (query: string) => void;
}

const Context = createContext<AppContextProps>({
    data: appData,
    searchQuery: '',
    changeSearchQuery: (f) => f,
});

export const useAppContext = () => useContext(Context);

export const AppContextProvider = ({ children }: BaseComponentProps) => {
    const [ data, setData ] = useState<string[]>(appData);
    const [ searchQuery, setSearchQuery ] = useState('');
    const [ isSearchEmpty, setIsSearchEmpty ] = useState(true);

    const changeSearchQuery = (query: string) => setSearchQuery(query)

    const searchParams = useMemo(() => new URLSearchParams(window.location.search), []);

    useEffect(() => {
        const newData = searchFilter(appData, searchQuery);
        setData(newData);
    }, [ searchQuery ]);

    useEffect(() => {
        const querySearchString = searchParams.get('search')
        const newData = searchFilter(appData, querySearchString || '')
        setData(newData)
        setSearchQuery(querySearchString || '')
    }, [ searchParams ]);

    useEffect(() => {
        searchQuery.length > 0 ? setIsSearchEmpty(false) : setIsSearchEmpty(true);
    }, [ searchQuery ])
    
    useEffect(() => {
        if (!isSearchEmpty) {
            searchParams.set('search', searchQuery)
            let queryParams = `?${ searchParams.toString() }`;
            window.history.replaceState({}, '', queryParams);
        }
    }, [ isSearchEmpty, searchQuery, searchParams ])

    return (
        <Context.Provider
            value={ { data, searchQuery, changeSearchQuery } }
        >
            { children }
        </Context.Provider>
    );
};

