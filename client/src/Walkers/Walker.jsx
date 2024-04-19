

export const Walker = ({ walker }) => {



    return (
        <section className="walker">
            <div className="walker-info">
               {walker.name} is in {walker.cityId}
            </div>
        </section>
    )
}