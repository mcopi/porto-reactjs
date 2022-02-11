import React, { useEffect, useContext } from 'react';
import { ListContext } from '../ListContext';
import { Link } from 'react-scroll';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './list.css';

const MovieList = () => {

    const { listFilm, fetchStatus, setFetchStatus, setEdit, setInput, functions } = useContext(ListContext)
    const { fetchFilmList, deleteData, slicedDescription, slicedDate } = functions

    useEffect(() => {

        if(fetchStatus === false) {
            fetchFilmList()
            setFetchStatus(true)
        }  
             
    }, [fetchStatus, fetchFilmList, setFetchStatus])

    const handleDelete = (e) => {
        let val = parseInt(e.target.value)

        deleteData(val)
    }

    const handleEdit = (e) => {
        let id = parseInt(e.target.value)
        const dataEdit = listFilm.find(data => { return data.id === id })
        // const indexData = listGame.findIndex(data => data.id === id)
  
        setEdit(true)
        setInput({
            id: dataEdit.id,
            name: dataEdit.name,
            year: new Date(dataEdit.year),
            type: dataEdit.type,
            genre: dataEdit.genre,
            imgUrl: dataEdit.imgUrl,
            desc: dataEdit.desc
        })
    }

    return (
        <div className="container" id="film-list-container">

            <div className="text-center my-3" id="movielist-content">
                <h2>Film List</h2>
            </div>

            <div className="row justify-content-md-start justify-content-center">
                {listFilm.map((data, index) => {
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
                                            <Link to={"form-content"} offset={-90}>
                                                <button className="btn btn-primary btn-sm me-1 bi bi-pencil" onClick={handleEdit} value={data.id}></button>
                                            </Link>
                                            <button className="btn btn-danger btn-sm bi bi-trash" onClick={handleDelete} value={data.id}></button>
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