/** @jsx React.DOM */

var React = require('react/addons');
var Card1 = require('./Card1');
var Card2 = require('./Card2');
var Card3 = require('./Card3');

var ComCard1 = React.createClass({

	render: function() {
		var items = [1,2,3,4];
		var createCards = function(item) {
			return <Card1></Card1>;
		};
		var createCards3 = function(item) {
			return <Card3></Card3>;
		};
		//var x = items.map(createCards);
		return (<div className="comcard1 clearfix" id={this.props.id}>
					<h4 className="comcard1-title1"><i></i>韩语课</h4>
					<h5 className="comcard1-title2">快来吧思密达，跟着欧巴学韩语，以后看韩剧再也不需要字幕啦！</h5>
					<Card2/>
					{items.map(createCards)}
				</div>);
	}
});

module.exports = ComCard1;