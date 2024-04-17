

export const Dog = ({ dog }) => {


    return (
        <section className="dog">
            <div className="dog-info">
               {dog.name} is in {dog.cityId}
            </div>
            { dog.walkerId ? <div className="dog-info">and is walked by dog walker #{dog.walkerId}</div>: <div className="dog-info">currently has no walker</div> }
        </section>
    )
}

