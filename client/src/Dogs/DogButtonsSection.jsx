import { useNavigate } from "react-router-dom"


export const DogButtonsSection = () => {
    const navigate = useNavigate()

    const GoToDogForm = () => {
        navigate("/dogs/create")
    }

    return (
        <div className="btn-container">
            <button
                className="btn"
                onClick={GoToDogForm}
            >Create Dog</button>
        </div>
    )
}