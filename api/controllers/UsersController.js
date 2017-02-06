/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res)
	{
		User.find().exec(function(err, users) {

			res.render( 'user/index',{'users':users});
		

		});
	},
	create: function (req, res) {

		if(req.method=="POST" && req.param("User",null)!=null)
		{
			User.create(req.param("User")).exec(function(err,model){
				if (err) {
					res.send("Error:Sorry!Something went Wrong");
				}
				else {
					res.send("Successfully Created!");
				}
			});
		}
		else
		{
			res.render('user/create');
		}

	}

};

