const urlUpdatePost = 'http://localhost:3000/api/all'

document.addEventListener('DOMContentLoaded', () => {
    updatePosts()
})

function updatePosts() {
    fetch(urlUpdatePost)
        .then(res => {
            return res.json()
        })
        .then(json => {

            let postsElements = '';
            let posts = JSON.parse(json)

            posts.forEach((post) => {
                let postElement =
                    `
                    <div class="card mb-4" id="${post.id}">
                        <div class="card-header">
                            <h5 class="card-title">${post.title}</h5>
                        </div>
                        <div class="card-body">
                            <div class="card-text">${post.description}</div>
                        </div>
                    </div>
                `
                postsElements += postElement;
            });
            document.getElementById('posts').innerHTML = postsElements
        })
}

function NewPost() {
    let title = document.getElementById('title').value;
    let description = document.getElementById('desc').value;

    let post = { title, description }
    const options = {
        method: 'POST',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(post)
    }

    fetch('http://192.168.1.112:3000/api/new', options)

        .then(res=>{
            console.log(res)
            updatePosts()

            document.getElementById('title').value = ''
            document.getElementById('desc').value = ''

        })
}