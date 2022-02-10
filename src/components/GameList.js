import React, { useEffect, useContext } from 'react';
import { ListContext } from '../ListContext';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './list.css';

const GameList = () => {

    const { listGame, fetchStatus, setFetchStatus, functions } = useContext(ListContext)
    const { fetchGameList, deleteData, slicedDescription, slicedDate } = functions

    useEffect(() => {
        if(localStorage.getItem('data')) {
            if(fetchStatus === false) {
                fetchGameList()
                setFetchStatus(true)
            }  
        } else {
            localStorage.setItem('data', '[]')
        }     
    }, [fetchStatus, fetchGameList, setFetchStatus])

    const handleDelete = (e) => {
        let val = parseInt(e.target.value)

        deleteData(val)
    }

    return (
        <div className="container" id="game-list-container">

            <div className="text-center mb-3">
                <h2>Game List</h2>
            </div>

            <div className="row justify-content-md-start justify-content-center">
                {listGame.map((data, index) => {
                    return (
                        <div className="col-10 col-md-3" key={index}>
                            <div className="card">
                                <img src={data.imgUrl} alt="logo-games" />
                                <div className="card-body">
                                    <h5 className="fw-bold">{data.name}</h5>
                                    <h6 className="fw-bold">{slicedDate(data.year)}</h6>
                                    <p>{slicedDescription(data.desc)}</p>
                                    <div className="my-3" id="action-button">
                                        <div className="d-inline">
                                            <button className="btn btn-primary btn-sm me-1 bi bi-pencil"></button>
                                            <button className="btn btn-danger btn-sm bi bi-trash" onClick={handleDelete} value={data.id}>
                                            </button>
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

export default GameList