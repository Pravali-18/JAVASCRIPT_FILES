const url = "http://localhost:3000/students";

// GET
fetch(url)
    .then(response => response.json())
    .then(data => console.log("GET:", data));

// POST
fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Ravi",
        age: 22
    })
})
    .then(response => response.json())
    .then(data => console.log("POST:", data));

// PUT
fetch(`${url}/1`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Rahul Kumar",
        age: 21
    })
})
    .then(response => response.json())
    .then(data => console.log("PUT:", data));

// DELETE
fetch(`${url}/2`, {
    method: "DELETE"
})
    .then(response => response.json())
    .then(data => console.log("DELETE:", data));