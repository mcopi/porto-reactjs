import React, { useContext } from 'react';
import { ListContext } from '../ListContext';
import './form.css';

const Form = () => {

    const { input, setInput, visibility, functions } = useContext(ListContext)

    const { submitData } = functions

    const handleChange = (event) => {
        let val = event.target.value
        let nama = event.target.name

        setInput({...input, [nama]: val})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        submitData()
    }

    return (
        <>
            <div className="container">
                <div className="form-wrapper col-10 offset-1 col-md-6 offset-md-3 mb-3">
                    <div className="text-center mb-3 mt-4">
                        <h2>Form List</h2>
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="contact-form-header"></div>
                        <div className="contact-form-input">
                            {visibility && (
                                <div className="alert alert-success" role="alert">
                                    <i className="bi bi-check-circle"></i>
                                    Message succesfully sent
                                </div>
                            )}
                            <div className="my-3">
                                <label className="form-label">Name <span>*</span></label>
                                <input type="text" name="name" className="form-control" onChange={handleChange} value={input.name} placeholder="Layangan Putus" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Year <span>*</span></label>
                                <input type="number" name="year" className="form-control" onChange={handleChange} value={input.year} placeholder="2019" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Genre <span>*</span></label>
                                <input type="text" name="genre" className="form-control" onChange={handleChange} value={input.genre} placeholder="Action, Drama" required/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Type <span>*</span></label>
                                <select className="form-select" name="type" onChange={handleChange} value={input.type}>
                                    <option value="film">Film</option>
                                    <option value="game">Game</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Image URL <span>*</span></label>
                                <input type="text" name="imgUrl" className="form-control" onChange={handleChange} value={input.imgUrl} placeholder="https://contoh.com/benjody.jpg" required/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description <span>*</span></label>
                                <textarea name="desc" className="form-control" rows="8" onChange={handleChange} value={input.desc} placeholder="Please enter the description..." required></textarea>
                            </div>
                            <div className="text-center mt-4">
                                <button type="submit" className="btn btn-primary" id="btn-form">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form