var Role = require('../models/role');

module.exports = function(app) {


	/**
	 * Returns all roles within the system.
	 * 
	 * @param  {[type]} req
	 * @param  {[type]} res
	 * @return {[type]}
	 */
	app.get('/api/roles', function(req, res) {

		Role.find(function(err, roles) {
			if (err)
				res.send(err);

			res.json(roles);
		});
	});


	/**
	 * Create a new role in the system.
	 * 
	 * @param  {[type]} req
	 * @param  {[type]} res
	 * @return {[type]}
	 */
	app.post('/api/roles', function(req, res) {

		Role.create({
			name: req.body.name,
			description: req.body.description
		}, function(err, role) {
			if (err) {
				res.send(err);
			}

			res.json("{success: true, message: 'Role has been created', id: " + role._id + "}");
		});
	});


	app.delete('/api/roles/:id', function(req, res) {

		Role.remove({
			_id: req.params.id
		}, function(err, role) {
			if (err) {
				res.send(err);
			}

			res.json("{success: true, message: 'Role has been deleted', id: " + req.params.id + "}")
		});
	});
}