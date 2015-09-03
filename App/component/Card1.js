/** @jsx React.DOM */

var React = require('react/addons');

var Card1 = React.createClass({

	render: function() {
		//var course = this.props.course;
		var cover = 'http://10.url.cn/qqcourse_logo_rn/ajNVdqHZLLDpLonL2IWhiaLrzTiaRocqRds6mVI5y3NIJr6lmskt1snMxRUKLNLL5m7rM5ePagdJ4/222'
		var name = '摄影零基础班-经典合辑循环开课-中艺摄影网校'
		return (<div className="course" >
					<a className="course-link" href="http://www.baidu.com/" target="_blank">
						<img className="course-link-img" src={cover}></img>
					</a>
					<a className="course-name" href="http://www.baidu.com/" target="_blank">{name}</a>
				</div>);
	}
});

module.exports = Card1;