export const GetAllWalkers = async () => {
    const res =  await fetch("/api/walkers")
    return res.json()
}