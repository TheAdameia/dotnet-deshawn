import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getAllDogs } from "../services/getAllDogs"
import { Dog } from "./Dog"

export const OneDog = () => {
    const [allDogs, setAllDogs] = useState([])
    const [oneDog, setOneDog] = useState({})

    let params = useParams()
    let fixedParam = parseInt(params.dogId)

    const getAndSetOneDog = () => {
        getAllDogs().then(dogArray => {
            setAllDogs(dogArray)
        })
        
    }

    useEffect(() => {
        getAndSetOneDog()
    }, [])

    useEffect(() => {
        if (allDogs.length > 0) {
            let theOneDog = allDogs.find((thing) => thing.id == fixedParam)
            setOneDog(theOneDog)
        }
    }, [allDogs])

    return (
        <div className="dogs-container">
            <article className="dogs">
                <Dog
                    dog={oneDog}
                    key={oneDog.id}
                />
            </article>
        </div>
    )

}
