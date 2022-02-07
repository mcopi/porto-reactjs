import React, { createContext, useState } from "react"

export const ListContext = createContext()

export const ListProvider = props => {

    const [input, setInput] = useState({
        name: "",
        year: "",
        genre: "",
        type: "film",
        imgUrl: "",
        desc: ""
    })

    const [visibility, setVisibility] = useState(false)
    const [listGame, setListGame] = useState([])
    const [fetchStatus, setFetchStatus] = useState(false)

    const submitData = () => {
        if (localStorage.getItem('data')){
            let prevData = JSON.parse(localStorage.getItem('data'))
            prevData.push(input)
            localStorage.removeItem('data')
            localStorage.setItem('data', JSON.stringify(prevData))
        } else {
            let newData = []
            newData.push(input)
            localStorage.setItem('data', JSON.stringify(newData))
        }
        
        setInput({
            name: "",
            year: "",
            genre: "",
            imgUrl: "",
            desc: ""
        })

        setVisibility(true)
        setTimeout(() => setVisibility(false), 2000)

        if(input.type === 'film') {
            setListGame([...listGame, {
                name: input.name,
                year: input.year,
                genre: input.genre,
                imgUrl: input.imgUrl,
                desc: input.desc
            }])
        }
    }

    const fetchGameList = () => {
        let data = JSON.parse(localStorage.getItem('data'))
        let dataListGame = data.filter(x => { return x.type === 'film'})
        setListGame(dataListGame.map((data, index) => {
            return {
                key: index+1,
                name: data.name,
                year: data.year,
                genre: data.genre,
                type: data.type,
                imgUrl: data.imgUrl,
                desc: data.desc
            }
        }))
    }
    
    const functions = {
        submitData, fetchGameList
    }

    return (
        <ListContext.Provider value={{
            input, setInput, visibility, setVisibility, listGame, setListGame, fetchStatus, setFetchStatus, functions
        }}>
            {props.children}
        </ListContext.Provider>
    ) 
}
