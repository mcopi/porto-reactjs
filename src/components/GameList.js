import React, { useEffect, useContext } from 'react';
import { ListContext } from '../ListContext';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './list.css';

const GameList = () => {

    const { listGame, fetchStatus, setFetchStatus, functions } = useContext(ListContext)
    const { fetchGameList } = functions

    useEffect(() => {
        if(fetchStatus === false) {
            fetchGameList()
            setFetchStatus(true)
        }        
    }, [fetchStatus, fetchGameList, setFetchStatus])

    const slicedDescription = (words, total = 110) => {
        if (words.length > total) {
            let trimmed = words.substr(0, total)
            trimmed = trimmed.substr(0, Math.min(trimmed.length, trimmed.lastIndexOf(" ")))
            trimmed += "..."
            return trimmed
        }
        else {
            return words
        }
    }

    return (
        <div className="container" id="game-list-container">

            <div className="text-center mb-3">
                <h2>Game List</h2>
            </div>

            <div className="row justify-content-md-start justify-content-center">
                {listGame.map(data => {
                    return (
                        <div className="col-10 col-md-3" key={data.key}>
                            <div className="card">
                                <img src={data.imgUrl} alt="logo-games" />
                                <div className="card-body">
                                    <h4>{data.name}</h4>
                                    <h6 className="fw-bold">{data.year}</h6>
                                    <h6 className="fw-bold">{data.genre}</h6>
                                    <p>{slicedDescription(data.desc)}</p>
                                    <div className="my-3" id="action-button">
                                        <div className="d-inline">
                                            <button className="btn btn-primary btn-sm me-1"><i className="bi bi-pencil"></i></button>
                                            <button className="btn btn-danger btn-sm"><i className="bi bi-trash"></i></button>
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