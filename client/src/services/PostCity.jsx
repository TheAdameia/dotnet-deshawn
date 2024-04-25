

export const PostCity = (event) => {
    return fetch("/api/cities", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
    })
}