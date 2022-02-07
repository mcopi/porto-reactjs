import React, { useState } from 'react';
import gamesLogo from '../assets/img/valorant.jpg';
import './list.css';

const GameList = () => {

    const [showHover, setShow] = useState(false)
    const [idList, setId] = useState("")

    const desc = "Valorant is a tactical shooting game involving two teams with 5 players in each team. Every player can sign in and play remotely from anywhere in the world."

    const slicedDescription = (words, total = 100) => {
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

    const hoverView = (id) => {
        return (
            <>
                {id && (
                    <div className="position-absolute top-50 read-more" id={id}>
                        <a href="/#">Read More</a>
                    </div>
                )}
            </>
        )
    }

    const hoverEffect = (x, id) => {
        if(x) {
            return (
                hoverView(id)
            )
        } else {
            return (
                <></>
            )
        }
    }

    const mouseEnter = () => {
        setShow(true) 
        setId("test1")
    }

    const mouseLeave = () => {
        setShow(false) 
        setId("")
    }

    return (
        <div className="container" id="game-list-container">

            <div className="text-center mb-3">
                <h2>Game List</h2>
            </div>

            <div className="row justify-content-center">
                <div className="col-10 col-md-3" >
                    <div className="card" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                        { (showHover === true && idList === "test1") ? hoverEffect(showHover, "test1")
                        : hoverEffect(showHover) }
                        <img src={gamesLogo} alt="logo-games" />
                        <div className="card-body">
                            <h4>Valorant</h4>
                            <h6 className="fw-bold">2019</h6>
                            <h6 className="fw-bold">FPS</h6>
                            <p>{slicedDescription(desc)}</p>
                        </div>
                    </div>
                </div>
                

                <div className="col-10 col-md-3">
                    <div className="card" 
                    onMouseEnter={() => {
                        setShow(true) 
                        setId("test2")}} 
                        onMouseLeave={() => {
                            setShow(false)
                            setId("")}}>
                        { (showHover === true && idList === "test2") ? hoverEffect(showHover, "test2")
                        : hoverEffect(showHover) }
                        <img src={gamesLogo} alt="logo-games" />
                        <div className="card-body">
                            <h4>Valorant</h4>
                            <h6 className="fw-bold">2019</h6>
                            <h6 className="fw-bold">FPS</h6>
                            <p>{slicedDescription(desc)}</p>
                        </div>
                    </div>
                </div>

                <div className="col-10 col-md-3">
                    <div className="card">
                        <img src={gamesLogo} alt="logo-games" />
                        <div className="card-body">
                            <h4>Valorant</h4>
                            <h6 className="fw-bold">2019</h6>
                            <h6 className="fw-bold">FPS</h6>
                            <p>{slicedDescription(desc)}</p>
                        </div>
                    </div>
                </div>

                <div className="col-10 col-md-3">
                    <div className="card">
                        <img src={gamesLogo} alt="logo-games" />
                        <div className="card-body">
                            <h4>Valorant</h4>
                            <h6 className="fw-bold">2019</h6>
                            <h6 className="fw-bold">FPS</h6>
                            <p>{slicedDescription(desc)}</p>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default GameList