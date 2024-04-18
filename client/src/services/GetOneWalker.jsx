export const GetOneWalker = async (id) => {
    const res = await fetch(`/api/walkers/${id}`)
    return res.json()
}