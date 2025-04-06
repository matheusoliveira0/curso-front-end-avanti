import { useState, useEffect } from 'react'

const GithubUser = () => {
    const [data, setData] = useState([])

    useEffect(() => {       
        fetch('https://api.github.com/users/matheusoliveira0')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error))

    }, [])

    console.log("dados:",data)

    return (
        <>
            <img src={data.avatar_url} alt={data.name} />
            <p>{data.name}</p>
        </>
    )
}

export default GithubUser
