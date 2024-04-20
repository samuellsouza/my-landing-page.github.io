function getProjects(){
    const urlGitHub = 'https://api.github.com/users/samuellsouza/repos'
    var loadingElement = document.getElementById('carrendo')

    fetch(urlGitHub, {
        method: 'GET'
    })
        .then((response) => response.json())
        .then((response) => {
            loadingElement.style.display = 'none'
            showProjects(response)
            console.log(response)
        })
        .catch((e) => {
            console.log(e)
        })
}

function showProjects(data){
    var listElement = document.getElementById('meus-lista-de-projetos')

    for(let i = 0; i < data.length; i++)
    {
        let a = document.createElement("a")
        a.href = data[i]['clone_url']
        a.target = '_black'
        a.title = data[i]['description']
        let linkText = document.createTextNode(data[i]['name'])
        a.appendChild(linkText)
        listElement.appendChild(a)
    }
}        

getProjects()