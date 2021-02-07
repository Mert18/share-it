import React from 'react';
import './styles/main.scss';

import Navbar from './components/Navbar';
import Form from './components/Form'
import PostList from './components/PostList'


const App = () => {
    return (
        <div className="App">
            <header>
                <Navbar />
            </header>
            <main>
                <PostList />
                <Form />
            </main>
        </div>
    )
}

export default App