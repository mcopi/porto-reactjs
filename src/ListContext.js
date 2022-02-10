import React, { createContext, useState } from "react"

export const ListContext = createContext()

export const ListProvider = props => {

    const [input, setInput] = useState({
        id: "",
        name: "",
        year: new Date(),
        genre: "",
        type: "film",
        imgUrl: "",
        desc: ""
    })

    const [visibility, setVisibility] = useState(false)
    const [listGame, setListGame] = useState([])
    const [listFilm, setListFilm] = useState([])
    const [fetchStatus, setFetchStatus] = useState(false)

    const submitData = () => {
        // GET AND ADD NEW DATA
        if (localStorage.getItem('data')){
            let prevData = JSON.parse(localStorage.getItem('data'))
            prevData.push(input)
            localStorage.removeItem('data')
            localStorage.setItem('data', JSON.stringify(prevData))
        } 

        // ADD FIRST DATA
        else {
            let newData = []
            newData.push(input)
            localStorage.setItem('data', JSON.stringify(newData))
        }

        // SET INPUT TO EMPTY
        setInput({
            id: "",
            name: "",
            year: new Date(),
            genre: "",
            imgUrl: "",
            type: "film",
            desc: ""
        })

        // ACTIVATING ALERT
        setVisibility(true)
        setTimeout(() => setVisibility(false), 2000)

        // SET TO LIST
        if(input.type === 'film') {
            setListFilm([...listFilm, {
                id: input.id,
                name: input.name,
                year: input.year.toLocaleString('ko-ID'),
                genre: input.genre,
                imgUrl: input.imgUrl,
                desc: input.desc
            }])
        } else {
            setListGame([...listGame, {
                id: input.id,
                name: input.name,
                year: input.year.toLocaleString('ko-ID'),
                genre: input.genre,
                imgUrl: input.imgUrl,
                desc: input.desc
            }])
        }
    }

    const fetchGameList = () => {
        let data = JSON.parse(localStorage.getItem('data'))
        let dataListGame = data.filter(x => { return x.type === 'game'})
        setListGame(dataListGame.map(data => {
            return {
                id: data.id,
                name: data.name,
                year: data.year,
                genre: data.genre,
                type: data.type,
                imgUrl: data.imgUrl,
                desc: data.desc
            }
        }))
    }

    const fetchFilmList = () => {
        let data = JSON.parse(localStorage.getItem('data'))
        let dataListGame = data.filter(x => { return x.type === 'film'})
        setListFilm(dataListGame.map(data => {
            return {
                id: data.id,
                name: data.name,
                year: data.year,
                genre: data.genre,
                type: data.type,
                imgUrl: data.imgUrl,
                desc: data.desc
            }
        }))
    }

    const deleteData = (id) => {
        let newLocal = JSON.parse(localStorage.getItem('data'))
        newLocal = newLocal.filter(data => { return data.id !== id })

        localStorage.removeItem('data')
        localStorage.setItem('data', JSON.stringify(newLocal))

        setFetchStatus(false)
    }

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

    const slicedDate = (date) => {
        return date.substring(0, 4)
    }
    
    const functions = {
        submitData, fetchGameList, fetchFilmList, deleteData, slicedDescription, slicedDate
    }

    return (
        <ListContext.Provider value={{
            input, setInput, visibility, setVisibility, listGame, setListGame, listFilm, setListFilm, fetchStatus, setFetchStatus, functions
        }}>
            {props.children}
        </ListContext.Provider>
    ) 
}
