import { useNavigate } from "react-router-dom"


export const Walker = ({ walker }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/walkers/${walker.id}`)
    }

    document.addEventListener("click", event => {
        if (event.target.name == walker.name) {
            navigate(`/walkers/profile/${walker.id}`)
        }
    })

    const handleNameClick = (event) => {
        if (event.target.name == walker.name) {
            navigate(`/walkers/profile/${walker.id}`)
        }
    }

    return (
        <section className="walker">
            <button 
                className="walker-info"
                name={walker.name}
                onClick={handleNameClick}
            >
                {walker.name} is in {walker.cityId}
            </button>
            <button 
                className="btn"
                onClick={handleClick}
            >Assign Dogs</button>
        </section>
    )
}