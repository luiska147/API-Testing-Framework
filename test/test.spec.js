const expect = require('chai').expect
const request = require('../helper/requestFactor')
const endpoint =  require('../helper/endpoint')
const User = require('../helper/user')
const expectGet = require('../helper/resulEndpoind')
const expectPost = require('../helper/resulEndpoind')
const expectPut = require('../helper/resulEndpoind')
const expectDelete = require('../helper/resulEndpoind')



describe('Validacion API reservas Wingo', () => {

    before(async () => {
        /**
         * Para Get
         */
        resulGet = await request.getRequest(endpoint.baseUrl,'/reservas')
        /**
         * Para Post
         */
        newUser = new User('Land Soft','Colombia',302541357,true)
        newUserJson = JSON.stringify(newUser)
        resulPost = await request.postRequest(endpoint.baseUrl,'/reservas',newUserJson)
        /**
         * Para Put
         */ 
        editUser = new User('San Google','USA',57236,true)
        editUserJson = JSON.stringify(editUser)
        resulPut = await request.putRequest(endpoint.baseUrl,'/reservas',editUserJson,3)
        /**
         * Delete
         */
        resulDelete = await request.deleteRequest(endpoint.baseUrl,'/reservas',2)
    })

    describe('GET Request', () => {
        it('Deberia Retornar el listado de reservas',  function(){
            //let resul = await request.getRequest(endpoint.baseUrl,'/reservas')

            //Comparar respuestas
            //expect(resul.statusCode).to.be.equal(200);
            expectGet(resulGet,200)
            //Comparar Tamaño
            //expect(resul.body.length).to.be.equal(3);
        });
    });

    describe('Post Request', () => {
        //Objeto a JSON
        // let postBody = JSON.stringify({
        //     nombre: 'Land Soft',
        //     pais: 112245,
        //     telefono: '302541357',
        //     active: true
        // })

        it('Deberia Agergar un nuevo usuario', function(){
            expectPost(resulPost,201)
        })
    })

    describe('Put Request', () => {
        it('Debera Actualizar un Usuario', () => {
            expectPut(resulPut,200)
        })
    })

    describe('Delete Request', () => {
        it('Debera Eliminar un Usuario', () => {
            expectDelete(resulDelete,200)
        })
    })
})