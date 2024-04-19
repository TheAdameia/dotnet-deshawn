export const GetAllCities = async () => {
    const res =  await fetch("/api/cities")
    return res.json()
}