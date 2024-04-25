import { useState } from "react"
import { PostCity } from "../services/PostCity"


export const AddCityInputField = () => {
    const [cityField, setCityField] = useState("")

    const handleSave = (event) => {
        event.preventDefault()
        const newCitySave = {
            Name: cityField
        }
        PostCity(newCitySave)
    }
    

    return (
        <form>
            <h2>Enter New City</h2>
            <fieldset>
                <div className="form-group">
                    <label className="form-label">
                        <input
                            type="text"
                            placeholder="Type new city here!"
                            onChange={(event) => {
                                const CityCopy = event.target.value
                                setCityField(CityCopy)
                            }}
                        />
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <button
                    className="btn"
                    onClick={handleSave}
                >Save new city</button>
            </fieldset>
        </form>
    )
}