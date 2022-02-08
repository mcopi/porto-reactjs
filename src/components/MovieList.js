import React, { useEffect, useContext } from 'react';
import { ListContext } from '../ListContext';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './list.css';

const MovieList = () => {

    const { listFilm, fetchStatus, setFetchStatus, functions } = useContext(ListContext)
    const { fetchFilmList, deleteData, slicedDescription } = functions

    useEffect(() => {

        if(fetchStatus === false) {
            fetchFilmList()
            setFetchStatus(true)
        }  
             
    }, [fetchStatus, fetchFilmList, setFetchStatus])

    const handleDelete = (e) => {
        let val = e.target.value

        deleteData(val)
    }

    return (
        <div className="container" id="film-list-container">

            <div className="text-center my-3">
                <h3>Film List</h3>
            </div>

            <div className="row justify-content-md-start justify-content-center">
                {listFilm.map(data => {
                    return (
                        <div className="col-10 col-md-3" key={data.id}>
                            <div className="card">
                                <img src={data.imgUrl} alt="logo-games" />
                                <div className="card-body">
                                    <h5 className="fw-bold">{data.name}</h5>
                                    <h6 className="fw-bold">{data.year}</h6>
                                    <p>{slicedDescription(data.desc)}</p>
                                    <div className="my-3" id="action-button">
                                        <div className="d-inline">
                                            <button className="btn btn-primary btn-sm me-1"><i className="bi bi-pencil"></i></button>
                                            <button className="btn btn-danger btn-sm" onClick={handleDelete} value={data.name}><i className="bi bi-trash"></i></button>
                                        </div>
                                        <div className="d-inline float-end">
                                            <button className="btn btn-secondary btn-sm">Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MovieList