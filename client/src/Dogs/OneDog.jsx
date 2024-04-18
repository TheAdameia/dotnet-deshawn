import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getAllDogs } from "../services/getAllDogs"
import { Dog } from "./Dog"
import { GetOneWalker } from "../services/GetOneWalker"

export const OneDog = () => {
    const [allDogs, setAllDogs] = useState([])
    const [oneDog, setOneDog] = useState({})
    const [dogWalker, setDogWalker] = useState({})

    let params = useParams()
    let fixedParam = parseInt(params.dogId)

    const getAndSetOneDog = () => {
        getAllDogs().then(dogArray => {
            setAllDogs(dogArray)
        })
        
    }

    const getOneDogsWalker = (id) => {
        GetOneWalker(id).then(walker => {
            setDogWalker(walker)
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

    useEffect(() => {
        if (allDogs.length > 0) {
            getOneDogsWalker(fixedParam)
        }
    }, [oneDog])


    return (
        <div className="dogs-container">
            <article className="dogs">
                <Dog
                    dog={oneDog}
                    key={oneDog.id}
                    dogWalker={dogWalker}
                />
            </article>
        </div>
    )

}
