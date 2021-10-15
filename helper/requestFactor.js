const supertest = require('supertest')
const { baseUrl } = require('./endpoint')

exports.getRequest = async (baseUrl,apiEndPoint)=>{
    try {

        let res = await supertest(baseUrl).get(apiEndPoint).retry(2)
        .set('Accept','application/json')
        .set('Content-Type','application/json')
        
        return res

    } catch (error) {
        console.log('Error al enviar el request Get', error);
    }
}
exports.postRequest = async (baseUrl,apiEndPoint,requestBody)=>{
    try {
        let res = await supertest(baseUrl).post(apiEndPoint).retry(2)
        .set('Accept','application/json')
        .set('Content-Type','application/json')
        .send(requestBody)
        return res
    } catch (error) {
        console.log('Error al enviar el request', error);
    }
}
exports.putRequest = async (baseUrl,apiEndPoint,requestBody,id)=>{
    try {
        let res = await supertest(baseUrl).put(apiEndPoint+`/${id}`).retry(2)
        .set('Accept','application/json')
        .set('Content-Type','application/json')
        .send(requestBody)
        return res
    } catch (error) {
        console.log('Error al enviar el request', error);
    }
}
exports.deleteRequest = async (baseUrl,apiEndPoint,id)=>{
    try {
        let res = await supertest(baseUrl).delete(apiEndPoint+`/${id}`).retry(2)
        .set('Accept','application/json')
        .set('Content-Type','application/json')
        
        return res
    } catch (error) {
        console.log('Error al enviar el request', error);
    }
}