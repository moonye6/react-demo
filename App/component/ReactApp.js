/** @jsx React.DOM */

var React = require('react/addons');
var CCard1 = require('./ComCard1');
var CBar = require('./Bar');

var ReactApp = React.createClass({
	getInitialState:function(){
		return {
			x:11111
		}
	},
	h:function() {
		this.setState({x:222222222222})
	},
	render: function() {
		var items = [1,2,3,4];
		var ids=["test1111","test2","test3"];
		var createCards = function(item) {
			return <Card1></Card1>;
		};
		var createCards3 = function(item) {
			return <Card3></Card3>;
		};

		//var x = items.map(createCards);
		return (<div className="container">
					<CBar indexs="xx" tt={ids} id="menu"/>
					<CCard1 id="test1"/>
					<CCard1 id="test2"/>
					<CCard1 id="test3"/>
				</div>);
	}
});

module.exports = ReactApp;