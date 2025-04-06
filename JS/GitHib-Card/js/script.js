//fecth pegando os dados do github

function fetchGitHubUser(username){
fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
        if(!response.ok){
            console.error(error);
        }
        return response.json()
    })
    .then((user) => {
        console.log("user",user)
        createUserCard(user)
    })
    .catch((error)=> {
        console.error(error)
        const app = document.getElementById("app")
        app.innerHTML = `<p style="color:red">Erro: ${error.message}</p>`
    })
}

//funçao para criar card do usuario

function createUserCard(user){
    const app = document.getElementById("app")

    const card = document.createElement("div")
    card.className = "card"

    const avatar = document.createElement("img")
    avatar.src = user.avatar_url
    avatar.alt = `${user.login}'s avatar`

    const name = document.createElement("h2")
    name.textContent = user.name
    const login = document.createElement("p")
    login.textContent =`@${user.login}`

    card.appendChild(avatar)
    card.appendChild(name)
    card.appendChild(login)

    app.appendChild(card)

}

fetchGitHubUser("matheusoliveira0")



