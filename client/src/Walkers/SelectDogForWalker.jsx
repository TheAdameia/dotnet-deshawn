import { useEffect, useState } from "react"
import { Dog } from "../Dogs/Dog"
import { useParams } from "react-router-dom"
import { getAllDogs } from "../services/getAllDogs"
import { GetOneWalker } from "../services/GetOneWalker"


export const SelectDogForWalker = () => {
    const [allDogs, setAllDogs] = useState([])
    const [filteredDogs, setFilteredDogs] = useState([])
    const [walker, setWalker] = useState({})


    let params = parseInt(useParams().walkerId)

    const getAndSetDogs = () => {
        getAllDogs().then(dogArray => {
            setAllDogs(dogArray)
        })
    }

    const getAndSetWalker = () => {
        GetOneWalker(params).then(W => {
            setWalker(W)
        })
    }

    const filterDogsByCityAndNoWalker = () => {
        let filteredArray = []
        for (const dog of allDogs) {
            if (dog.walkerId != walker.id && walker.cityId == dog.cityId) {
                filteredArray.push(dog)
            }
        }
        setFilteredDogs(filteredArray)
    }

    useEffect(() => {
        getAndSetDogs()
    }, [])

    useEffect(() => {
        getAndSetWalker()
    }, [])

    useEffect(() => {
        filterDogsByCityAndNoWalker()
    }, [allDogs, walker])

    return (
        <>
            <h2>{walker.name}</h2>
            <article className="dogs">
                {filteredDogs.map(dog => {
                    return (
                        <Dog
                            dog={dog}
                            key={dog.id}
                        />
                    )
                })}
            </article>
        </>
    )
}