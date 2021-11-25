import React from 'react';
import Layout from "./components/Layout/Layout";
import Search from "./components/Search/Search";
import List from "./components/List/List";
import VirtualizedList from "./components/List/VirtualizedList";

function App() {
    return (
        <>
            <Layout>
                <Search/>
                {/*<List/>*/ }
            </Layout>
            <VirtualizedList/>
        </>
    );
}

export default App;
