import { useEffect, useState } from "react"
import { Walker } from "./Walker"
import { GetAllWalkers} from "../services/GetAllWalkers"
import { CitySelector } from "../Cities/CitySelector"

export const WalkerList = () => {
    const [allWalkers, setAllWalkers] = useState([])
    const [filteredWalkers, setFilteredWalkers] = useState([])
    const [selectedCityId, setSelectedCityId] = useState(0)

    const getAndSetWalkers = () => {
        GetAllWalkers().then(walkerArray => {
            setAllWalkers(walkerArray)
        })
    }

    useEffect(() => {
        getAndSetWalkers()
    }, [])

    useEffect(() => {
        setFilteredWalkers(allWalkers)
    }, [allWalkers])

    useEffect(() => {
        let cityFilteredResults = allWalkers.filter((w) => w.cityId == selectedCityId)
        setFilteredWalkers(cityFilteredResults)
    }, [selectedCityId])

    return (
        <div className="walker-container">
            <CitySelector
                setSelectedCityId={setSelectedCityId}
            />
            <article className="walkers">
                {filteredWalkers.map(walker => {
                    return (
                        <Walker
                            walker={walker}
                            key={walker.id}
                        />
                    )
                })}
            </article>
        </div>
    )
}