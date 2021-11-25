import React from 'react';
import Layout from "./components/Layout/Layout";
import Search from "./components/Search/Search";
import List from "./components/List/List";

function App() {
    return (
        <Layout>
            <Search/>
            <List/>
        </Layout>
    );
}

export default App;
