/** @jsx React.DOM */

var React = require('react/addons');

var Card3 = React.createClass({

	render: function() {
		//var course = this.props.course;
		var cover = 'http://10.url.cn/qqcourse_logo_rn/ajNVdqHZLLDpLonL2IWhiaLrzTiaRocqRds6mVI5y3NIJr6lmskt1snMxRUKLNLL5m7rM5ePagdJ4/222'
		var name = '摄影零基础班-经典合辑循环开课-中艺摄影网校'
		var price ="免费"
		var agency ="蓝轨迹"
		return (<div className="course-middle clearfix">
					<a className="course-link" href="http://www.baidu.com/" target="_blank">
						<img className="course-link-img" src={cover}></img>
					</a>
					<div className="course-right">
						<a className="course-name" href="http://www.baidu.com/" target="_blank">{name}</a>
						<p className="course-info">
							<span className="course-price course-price-free">{price}</span>
							<span className="course-sep"></span>
							<span className="course-agency">{agency}</span>
						</p>
					</div>
				</div>);
	}
});

module.exports = Card3;