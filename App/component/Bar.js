/** @jsx React.DOM */

var React = require('react/addons');


var Bar = React.createClass({
	getInitialState: function(props) {

		return {}
	},
	componentDidMount: function() {
	    window.addEventListener('scroll', this.handleScroll);
	},

	componentWillUnmount: function() {
		window.removeEventListener('scroll', this.handleScroll);
	},
	handleScroll: function(e) {
		var bar = document.getElementById('menu');
		var target = e.srcElement || e.targetElement;
		bar.style.top = window.pageYOffset;
	},
	render: function() {
		var itemTag = function(item) {
			var t = '#'+item;
			return <li className="nav-item"><a href={t}>{item}11</a></li>
		}
		return (<ul className="nav clearfix" id="menu">
					{this.props.tt.map(itemTag)}
				</ul>);
	}
});

module.exports = Bar;