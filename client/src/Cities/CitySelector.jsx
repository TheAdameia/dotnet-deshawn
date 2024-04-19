import { useEffect, useState } from "react"
import { GetAllCities } from "../services/GetAllCities"


export const CitySelector = ({ setSelectedCityId }) => {
    const [allCities, setAllCities] = useState([])
    
    const GetAndSetCities = () => {
        GetAllCities().then(cityArray => {
            setAllCities(cityArray)
        })
    }

    const handleCityChoice = (event) => {
        if (event.target.name == "City") {
            setSelectedCityId(event.target.value)
        }
    }

    document.addEventListener("change", handleCityChoice)

    useEffect(() => {
        GetAndSetCities()
    }, [])

    return (
        <><h2>City Selector</h2>
        <div className="btn-container">
            <select name="City">
                <option value={0}>Select Option</option>
                {allCities.map(city => {
                    return (
                        <option value={city.id} key={city.id}>{city.name}</option>
                    )
                })}
            </select>
        </div></>
    )
}