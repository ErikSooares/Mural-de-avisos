module.exports = {
    posts: [
        
    ],

    getAll(){
        return this.posts
    },

    newPost(title, description){
        this.posts.push({id: createID(), title, description});
    },

    deletePost(id){
        
    }
}

function createID(id){
    return Math.random().toString(36).substring(2, 9)
}