var should = require('should'),
	dbDriver = require('../index')

describe('dbDriver.Adapter()', function(){

	it('Fail, simple get', function(done){

		var conf = {
			server: 'server_name'
		},
			db = new dbDriver.Adapter(conf)

		// mysql.Connection.query function should be mocked, so no real network requests are made
		db.get('some_table', function(err, res){

			should.exist(err)
			should.exist(err.querystring)
			err.querystring.should.equal('SELECT * FROM `some_table`')

			done()
		})
	})

	it('Success, create new adapter', function(){
		should(function(){
			var conf = {
				server: 'server_name'
			}
			new dbDriver.Adapter(conf)
		}).not.throw()
	})

	it('Fail, conf missing', function(){
		should(function(){
			new dbDriver.Adapter({})
		}).throw()
	})

	it('Fail, conf missing', function(){
		should(function(){
			new dbDriver.Adapter()
		}).throw()
	})

})