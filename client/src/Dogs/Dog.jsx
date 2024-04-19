import { useNavigate } from "react-router-dom"


export const Dog = ({ dog, dogWalker }) => {
    const navigate = useNavigate()

    const handleClickToViewOne = () => {
        navigate(`/dogs/${dog.id}`)
    }

    return (
        <section className="dog">
            <div className="dog-info">
               {dog.name} is in {dog.cityId}
            </div>
            { dogWalker ? <div className="dog-info">and is walked by {dogWalker.name}</div>: "" }
            <button className="btn" onClick={handleClickToViewOne}>View this dog</button>
        </section>
    )
}

