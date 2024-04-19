

export const UpdateDogWalker = (DogWalkerUpdate) => {
    return fetch(`/api/dogs/updateWalker`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(DogWalkerUpdate),
    })
}