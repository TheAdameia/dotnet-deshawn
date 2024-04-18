

export const PostDog = (event) => {
    return fetch("/api/dogs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
    })
}