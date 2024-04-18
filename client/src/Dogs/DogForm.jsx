import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { PostDog } from "../services/PostDog"


export const DogForm = () => {
    const [newDog, setNewDog] = useState({})

    const navigate = useNavigate()


    const handleSave = (event) => {
        event.preventDefault()
        const newDogSave = {
            Name: newDog.Name,
            WalkerId: newDog.WalkerId,
            CityId: newDog.CityId
        }
        PostDog(newDogSave).then(() => {
            navigate("/dogs")
        })
    }

    return (
        <form>
            <h2>Enter DAWG info</h2>
            <fieldset>
                <div className="form-group">
                    <label className="form-label">Dog Name</label>
                    <input
                        type="Text"
                        placeholder="give your dog a name!"
                        onChange={(event) => {
                            const dogCopy = {...newDog}
                            dogCopy.Name = event.target.value
                            setNewDog(dogCopy)
                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label className="form-label">Enter number corresponding to city</label>
                    <input
                        type="Int"
                        placeholder="Enter number"
                        onChange={(event) => {
                            const dogCopy = {...newDog}
                            dogCopy.CityId = event.target.value
                            setNewDog(dogCopy)
                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <button 
                    className="btn"
                    onClick={handleSave}
                >Submit your dog!</button>
            </fieldset>
        </form>
    )
}