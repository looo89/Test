import axios from 'axios';


const instance =axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const postAPI ={
    
    getPosts()  {
        return( instance.get(`posts`))
    },

    getPostComments(id: number){
       return ( instance.get(`/posts/${id}/comments`))
    },
    
    addPost(title = 'foo', body= 'bar', userId = 111, id=111){
        return instance.post(`/posts`, {title, body, userId, id})
    },

    deletePost(id: number){
        console.log('apiDelete')
        return ( instance.get(`/posts/${id}`), {
            method: 'DELETE',
        })
    },
    
    changePost(title = 'foo', body= 'bar', userId = 111, id=111){
        return instance.put(`/posts/${id}`, {title, body, userId, id})
    },
}

export const albumAPI ={
    getPhotoByAlbumId(id: number){
        return( instance.get(`/albums/${id}/photos`))
    },

}

export const todosAPI ={
    getTodos()  {
        return( instance.get(`todos`))
    },
}