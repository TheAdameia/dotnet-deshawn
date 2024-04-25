import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GetOneWalker } from "../services/GetOneWalker"
import { GetAllCities } from "../services/GetAllCities"


export const WalkerProfile = () => {
    const [walker, setWalker] = useState({})
    const [cities, setCities] = useState([])
    const [citySelection, setCitySelection] = useState([])

    let thisWalkerId = parseInt(useParams().walkerId)
    let WalkerHomeCity = ""

    const getAndSetOneWalker = () => {
        GetOneWalker(thisWalkerId).then(walkerObject => {
            setWalker(walkerObject)
        })
    }

    const getAndSetCities = () => {
        GetAllCities().then(citiesArray => {
            setCities(citiesArray)
        })
    }

    useEffect(() => {
        getAndSetOneWalker()
    }, [])

    useEffect(() => {
        getAndSetCities()
    })

    if (cities != [] && walker != {}) {
        WalkerHomeCity = cities.find(city => city.id == walker.cityId)
    }

    return (
        <section className="walker-container">
            <div className="walker-info">
                {walker.name} resides in {WalkerHomeCity?.name}
            </div>
            <fieldset>
                <h2>Walker's working cities</h2>
                {cities.map(city => {
                    return (
                        <div className="checkbox-container" key={city.id}>
                            <label>{city.name}</label>
                            <input
                                type="checkbox"
                                id={"city"}
                                value={city.name}
                                onChange={(event) => {
                                    const selectionCopy = {...citySelection}
                                    selectionCopy.{CursedThingGoesHere} = event.target.value
                                    setCitySelection(selectionCopy)
                                }}
                            ></input>
                        </div>
                    )
                })}
            </fieldset>
        </section>
    )
}