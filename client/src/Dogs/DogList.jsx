import { useEffect, useState } from "react"
import { Dog } from "./Dog"
import { getAllDogs } from "../services/getAllDogs.jsx"


export const DogList = () => {
    const [allDogs, setAllDogs] = useState([])
    

    const getAndSetDogs = () => {
        getAllDogs().then(dogArray => {
            setAllDogs(dogArray)
        })
    }

    useEffect(() => {
        getAndSetDogs()
    }, [])

    return (
        <div className="dogs-container">
            <article className="dogs">
                {allDogs.map(dog => {
                    return (
                        <Dog
                            dog={dog}
                            key={dog.id}
                        />
                    )
                })}
            </article>
        </div>
    )
}

