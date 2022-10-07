import React, { useEffect, useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "./components/MoviesTable";
import Container from 'react-bootstrap/Container';
import "./App.css";
import { apiKey, url, regions } from './components/constants';
import PaginationComponent from "./components/PaginationComponent";

const App = () => {

    const [moviesData, setMoviesData] = useState({})
    const [selectedRegion, setSelectedRegion] = useState('');
    const [page, setPage] = useState(1);
    
    useEffect(() => {
        axios.get(`${url}?api_key=${apiKey}${selectedRegion && '&region='+selectedRegion}&page=${page}`)
        .then((res) => { 
            if(res.data){
                setMoviesData(res.data)    
            } else {
                setMoviesData({})
            }
        }).catch((err) => {
            console.log(err)
            setMoviesData({})
        })
    }, [selectedRegion, page])

    const changeRegion = (event) => {
        if(selectedRegion !== event.target.value) setSelectedRegion(event.target.value)
    }
    
    const changePage = (value) => {
        if(value > 0 && page !== value && value < moviesData?.total_pages) setPage(value)
    }

    return (
        <Container className="mb-24 mt-24">
            <div className="flex flex-col p-5 shadow-[2px_3px_34px_-6px_rgba(0,0,0,0.69)] container-md">
                <span className="text-center text-4xl font-bold">Now Playing Movies</span>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="title text-3xl font-bold text-mainColor">
                        Movies List
                    </h2>
                    <select className="min-w-[20%] h-10 cursor-pointer border-2" onChange={changeRegion}>
                        <option value={''}>{'Select Region'}</option>
                        {regions.length > 0 && regions?.map((region) => (<option value={region.value} key={region.value}>{region.name}</option>))}
                    </select>
                </div>
                <div className="mb-3"> Showing Results {(page - 1) * 20 == 0 ? 1 : (page - 1) * 20} - {((page - 1) * 20) + moviesData.results?.length}</div>
                <Table moviesData={moviesData} />
                <PaginationComponent page={page} total_pages={moviesData.total_pages} changePage={changePage} />
            </div>
        </Container>
    )
}

export default App;