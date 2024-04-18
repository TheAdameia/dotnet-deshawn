import { useNavigate } from "react-router-dom"


export const Dog = ({ dog }) => {
    const navigate = useNavigate()

    const handleClickToViewOne = () => {
        navigate(`/dogs/${dog.id}`)
    }

    return (
        <section className="dog">
            <div className="dog-info">
               {dog.name} is in {dog.cityId}
            </div>
            { dog.walkerId ? <div className="dog-info">and is walked by dog walker #{dog.walkerId}</div>: <div className="dog-info">currently has no walker</div> }
            <button className="btn" onClick={handleClickToViewOne}>View this dog</button>
        </section>
    )
}

