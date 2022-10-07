import React from 'react';
import Table from 'react-bootstrap/Table';

function MoviesTable({moviesData}) {

    const TableRow = ({ movie, index }) => (
        <tr className='cursor-pointer'>
            <td><img height={150} src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="Poster Not Available" /></td>
            <td className='text-lg'>
                <span className='font-bold text-xl'>{movie.title}</span>
                <br />
                <p>{'Release Date : '}</p>{movie.release_date}
            </td>
            <td className='text-lg'>
                <span>{'Average Vote : '}</span> <span className='font-bold'>{movie.vote_average}</span>
                <br />
                <span>{'Total Votes : '}</span><span className='font-bold'>{movie.vote_count}</span>
            </td>
            <td>{movie.overview}</td>
        </tr>
    );

    return (
        <Table className="tableStyle" striped bordered hover>
            <thead>
                <tr>
                    <th style={{width:"10%"}}>Poster</th>
                    <th style={{width:"20%"}} >Basic Info</th>
                    <th style={{width:"15%"}} >Votes</th>
                    <th>Overview</th>
                </tr>
            </thead>
            <tbody>
                {moviesData.results?.length > 0 ? moviesData.results.map((movie, index) => (
                    <TableRow key={movie.id} movie={movie} index={index} />
                )) :
                <tr>
                    <td colSpan="5" className="noRecordTd">No Record Found</td>
                </tr>
                }
            </tbody>
        </Table>
    )
}

export default MoviesTable;