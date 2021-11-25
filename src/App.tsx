import React from 'react';
import Layout from "./components/Layout/Layout";
import Search from "./components/Search/Search";
import VirtualizedList from "./components/List/VirtualizedList";

function App() {
    return (
        <>
            <Layout>
                <Search/>
            </Layout>
            <VirtualizedList/>
        </>
    );
}

export default App;
