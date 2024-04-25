import { useState } from "react"
import { useParams } from "react-router-dom"


export const WalkerProfile = () => {
    const [walker, setWalker] = useState({})
    let rawWalker = useParams()


    return (
        <section className="walker-container">
            <div className="walker-info">
                {walker.name} resides in {walker.city}
            </div>
        </section>
    )
}