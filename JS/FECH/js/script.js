fetch("https://api.github.com/users/Colt")
    .then(response => response.json())
    .then(data => console.log("dados", data))