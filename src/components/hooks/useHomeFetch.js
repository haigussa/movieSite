import {useState, useEffect} from 'react';
import {API_URL, API_KEY} from '../../config'

export const useHomeFetch = ()=>{
    const [state, setState] = useState({ movies: [], heroImage:""})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
const fetchMovies = async endPoint =>{
    setError(false);
    setLoading(true);
    try{
        const result = await (await fetch(endPoint)).json();
        // console.log(result)
        setState(prev =>({
                ...prev,
                movies: [...result.results],
                heroImage: prev.heroImage || result.results[0], 
                currentPage: result.page,
                totalPages: result.totalPages,
        }))

    } catch(error){
        setError(true)

    }
    setLoading(false)

}
useEffect(()=>{
    fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`);
}, [])
return [{state, loading, error}, fetchMovies]
}