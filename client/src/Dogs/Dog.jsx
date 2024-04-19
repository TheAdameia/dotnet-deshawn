import { useNavigate } from "react-router-dom"
import { UpdateDogWalker } from "../services/UpdateDogWalker"


export const Dog = ({ dog, dogWalker, walkerView }) => {
    const navigate = useNavigate()

    const handleClickToViewOne = () => {
        navigate(`/dogs/${dog.id}`)
    }

    const handleAssignWalker = () => {
        let DogWalkerUpdate = {
            "dogsId": dog.id,
            "walkersId": walkerView.id
        }
        UpdateDogWalker(DogWalkerUpdate)
    }

    return (
        <section className="dog">
            <div className="dog-info">
               {dog.name} is in {dog.cityId}
            </div>
            { dogWalker ? <div className="dog-info">and is walked by {dogWalker.name}</div>: "" }
            <button className="btn" onClick={handleClickToViewOne}>View this dog</button>
            { walkerView ? <button className="btn" onClick={handleAssignWalker}>Assign to Walker</button> : "" }
        </section>
    )
}

