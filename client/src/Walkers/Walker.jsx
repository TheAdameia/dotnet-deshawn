import { useNavigate } from "react-router-dom"


export const Walker = ({ walker }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/walkers/${walker.id}`)
    }

    return (
        <section className="walker">
            <div className="walker-info">
               {walker.name} is in {walker.cityId}
            </div>
            <button 
                className="btn"
                onClick={handleClick}
            >Assign Dogs</button>
        </section>
    )
}