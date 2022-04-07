import { api } from '../config/api'
const token = JSON.parse(localStorage.getItem('token'))
const axios = require('axios').default;

export function getPosts() {

    return axios.get(api + '/api/post/', {
        headers: {'Authorization' : 'Bearer ' + token.token}
    })
        .then(function(response){
            return response.data
        })
        .catch(function (error){
            return false
        })

}

export function sendPost(content, img) {

    const data = new FormData();
    data.append('msg', content)
    data.append('img', img)
    data.append('userId', token.userId)

    return axios.post(api + '/api/post', data, {
        headers: {
            'Authorization' : 'Bearer ' + token.token,
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        }
    })
        .then(function (response) {
            return response.data.data
        })
        .catch(function (error) {
            return false
        })

}

export function deletePost(postid){

    return axios.delete(api + '/api/post/' + postid, {
      headers: {'Authorization' : 'Bearer ' + token.token}
    })
      .then(function (response){ 
        return true
      })
      .catch(function (error){
        return false
      })
  }