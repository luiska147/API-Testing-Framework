const expect = require('chai').expect
const request = require('../helper/requestFactor')
const endpoint =  require('../helper/endpoint')

let expectGet = function (resultado,codigo) {
    expect(resultado.statusCode).to.be.equal(codigo);
}

let expectPost = function (resulPost,codigo) {
    expect(resulPost.statusCode).to.be.equal(codigo)
    expect(resulPost.body).to.have.property('id').which.is.a('Number')
    expect(resulPost.body).to.have.property('nombre').which.is.a('String')
    expect(resulPost.body).to.have.property('pais').which.is.a('String')
    expect(resulPost.body).to.have.property('telefono').which.is.a('Number')
    expect(resulPost.body).to.have.property('active').which.is.a('boolean')
    expect(resulPost.body).to.have.property('createdON').which.is.a('String')
}
let expectPut = function (resulPut,codigo) {
    expect(resulPut.body).to.have.property('nombre').to.be.equal('Erika')
    expect(resulPut.statusCode).to.be.equal(codigo)
}

let expectDelete = function (resulDelete,codigo) {
    expect(resulDelete.body.length).to.equal(0)
    expect(resulDelete).to.exist(false)
    expect(resulDelete.statusCode).to.be.equal(codigo)
}

module.exports = expectGet, expectPost, expectPut, expectDelete