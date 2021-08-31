import http from "./httpServices";

export function addNewComment(data){
    const token = 'SECURE TOKEN';
    const header = {
        headers: {
            Authorization: `bearer ${token}`
        }
    }
    return http.post('/comments', data, header)
}