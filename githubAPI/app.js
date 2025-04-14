

let getGithubInfo = async () => {
    let userName = document.getElementById('username').value;
    let infoName = document.getElementById('login-username');
    let follower = document.getElementById('follower');
    let publicRepos = document.getElementById('public_repos');
    let company = document.getElementById('company');
    let avatar_url = document.getElementById('avatar_url');
    try {
        let response = await (await fetch(`https://api.github.com/users/${userName}`))
        let data = await response.json()
        console.log(data)
        infoName.innerText = `${data.name}`
        follower.innerText = `${data.followers}`
        publicRepos.innerText = `${data.public_repos}`
        company.innerText = `${data.company}`
        avatar_url.src = `${data.avatar_url}`
    } catch (error) {
        console.log('Error in github API Call' , error)
    }
}

