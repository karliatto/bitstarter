var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = require('chai').expect;
chai.use(chaiHttp);


describe('testing projects.js', function () {

	it('testing get /projects/add', function(done){
		chai.request('http://localhost:3000/')
		.get('projects/add')
		.end(function(err, res){
			expect(res).to.have.status(200);
			done();
		})

	})

	it('testing post /projects', function(done){
		chai.request('http://localhost:3000/')
		.post('projects')
		.set('content-type', 'application/x-www-form-urlencoded')
		.send({
			name : 'test',
			description : 'test',
			amount : '12345678.12345678	',
			token : '1BHPGY7Rb9WaBBkYPKjZTnKYRzt5mC8NPM'
		})
		.end(function(err, res){
			expect(res).to.have.status(200);
			expect(res).to.redirectTo('http://localhost:3000/')
			done();
		})

	})
}); // closing describe testing projects.js


describe('testing login.js', function (done) {

	it('testing get /login', function(){
		chai.request('http://localhost:3000/')
		.get('login')
		.end(function(err, res){
			res.expect.to.have.status(200);
			done();
		})
	})

}); // closing describe testing login.js


describe('testing home.js', function (done) {

	it('testing get /', function(){
		chai.request('http://localhost:3000/')
		.get('')
		.end(function(err, res){
			res.expect.to.have.status(200);
			done();
		})
	})

}); // closing describe testing home.js


describe('testing logout.js', function (done) {

	it('testing get /logout', function(){
		chai.request('http://localhost:3000/')
		.get('logout')
		.end(function(err, res){
			res.expect.to.have.status(200);
			done();
		})
	})

}); // closing describe testing logout.js
