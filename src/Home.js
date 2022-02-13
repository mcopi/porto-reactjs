import React from "react";
import GameList from './components/GameList';
import MovieList from './components/MovieList';
import Form from './components/Form';

const Home = () => {
    return (
        <>
            <GameList />
            <MovieList />
            <Form />
        </>
    )
}

export default Home