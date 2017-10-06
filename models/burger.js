var orm = require("../config/orm.js");

console.log("got into model js");

var burger = {

	//get all burgers
	selectAll: function(bg) {
		// orm.selectAll("burgers", function(res) {
		orm.selectAll( function(res) {
			console.log("burger.js:", res)
			bg(res);
		});
	},

	//insert burger
	insertOne: function(cols, vals, bg) {
		orm.insertOne("burgers", cols, vals, function(res) {
			bg(res);
		});
	},

	//update burger
	updateOne: function(objColVals, condition, bg) {
		orm.updateOne("burgers", objColVals, condition, function(res) {
			bg(res);
		});
	}
}

// Export the database functions for the controller (burgers_Controller.js).
module.exports = burger;
