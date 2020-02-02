import React, { useState, useEffect } from 'react'
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config';
// Import Custom Hook
import {useHomeFetch} from './hooks/useHomeFetch'

import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import LoadMore from './elements/LoadMore';
import Spinner from './elements/Spinner';

const Home = () => {

    const [{ state, loading, error }, fetchMovies] = useHomeFetch()
    console.log(state)

    if(error) return <div>Something went wrong... </div>
    if(!state.movies[0]) return <Spinner/>

    return (
        <div>
            <HeroImage 
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
            title={state.heroImage.title}
            overview={state.heroImage.overview}/>
            <SearchBar />
            <Grid />
            <LoadMore /> 
            <Spinner />
        </div>
    )
}

export default Home
