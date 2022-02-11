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
    const [isEdit, setEdit] = useState(false)

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

    const submitEdit = () => {
        const data = JSON.parse(localStorage.getItem('data'))
        const indexData = data.findIndex(data => data.id === input.id)

        data[indexData].name = input.name
        data[indexData].type = input.type
        data[indexData].genre = input.genre
        data[indexData].year = input.year
        data[indexData].desc = input.desc
        data[indexData].imgUrl = input.imgUrl

        localStorage.setItem('data', JSON.stringify(data))

        const newData = JSON.parse(localStorage.getItem('data')).filter(data => {return data.type === input.type})
        input.type === 'game' ? setListGame(newData) : setListFilm(newData)

        setInput({
            id: "",
            name: "",
            year: new Date(),
            genre: "",
            imgUrl: "",
            type: "film",
            desc: ""
        })

        setVisibility(true)
        setTimeout(() => setVisibility(false), 2000)

        setEdit(false)
    }
    
    const functions = {
        submitData, fetchGameList, fetchFilmList, deleteData, slicedDescription, slicedDate, submitEdit
    }

    return (
        <ListContext.Provider value={{
            input, setInput, visibility, setVisibility, listGame, setListGame, listFilm, setListFilm, fetchStatus, setFetchStatus, isEdit, setEdit, functions
        }}>
            {props.children}
        </ListContext.Provider>
    ) 
}
