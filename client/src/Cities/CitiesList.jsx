import { useEffect, useState } from "react"
import { GetAllCities } from "../services/GetAllCities"
import { City } from "./City"
import { AddCityInputField } from "./AddCityInputField"

export const CitiesList = () => {
    const [cities, setCities] = useState([])

    const getAndSetCities = () => {
        GetAllCities().then(cityArray => {
            setCities(cityArray)
        })
    }

    useEffect(() => {
        getAndSetCities()
    }, [])

    return (
        <div className="cities-container">
            <AddCityInputField />
            <article className="cities">
                {cities.map(city => {
                    return (
                        <City
                            city={city}
                            key={city.id}
                        />
                    )
                })}
            </article>
        </div>
    )
}