import React, { useContext } from 'react';
import { ListContext } from '../ListContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import './form.css';

const Form = () => {

    const { input, setInput, isEdit, visibility, functions } = useContext(ListContext)

    const { submitData, submitEdit } = functions

    const handleChange = event => {
        const { name, value } = event.target
        let data = JSON.parse(localStorage.getItem('data'))
        let lengthData = data.length

        if (lengthData === 0){
            input.id = 0
        } else if ((lengthData !== 0) && !isEdit) {
            input.id = data[lengthData - 1].id + 1
        } 

        setInput({...input, [name]: value})
        console.log(input)
    }

    const converToDefEventPar = (name, value) => ({
        target: {
            name, value
        }
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        
        if(!isEdit) {
            submitData()
        } else {
            submitEdit()
        }
    }
    
    return (
        <>
            <div className="container">
                <div className="form-wrapper col-10 offset-1 col-md-6 offset-md-3 mb-3">
                    <div className="text-center mb-3 mt-4" id="form-content">
                        <h2>Form List</h2>
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="contact-form-header"></div>
                        <div className="contact-form-input">
                            {visibility && (
                                <div className="alert alert-success" role="alert">
                                    <i className="bi bi-check-circle"></i>
                                    {isEdit ? (<>Data succesfully added</>) : (<>Data succesfully updated</>)}
                                </div>
                            )}
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Name <span>*</span></label>
                                        <input type="text" name="name" className="form-control" onChange={handleChange} value={input.name} placeholder="Layangan Putus" required />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Year <span>*</span></label>
                                        <DatePicker
                                        onChange={date => handleChange(converToDefEventPar("year", date))}
                                        selected={input.year}
                                        name="tahun"
                                        value={input.year}
                                        showYearPicker
                                        dateFormat="yyyy"
                                        className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Genre <span>*</span></label>
                                        <input type="text" name="genre" className="form-control" onChange={handleChange} value={input.genre} placeholder="Action, Drama" required/>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Type <span>*</span></label>
                                        <select className="form-select" name="type" onChange={handleChange} value={input.type}>
                                            <option value="film">Film</option>
                                            <option value="game">Game</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mb-3">
                                <label className="form-label">Image URL <span>*</span></label>
                                <input type="text" name="imgUrl" className="form-control" onChange={handleChange} value={input.imgUrl} placeholder="https://contoh.com/benjody.jpg" required/>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Description <span>*</span></label>
                                <textarea name="desc" className="form-control" rows="6" onChange={handleChange} value={input.desc} placeholder="Please enter the description..." required></textarea>
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