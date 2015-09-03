/** @jsx React.DOM */

var React = require('react/addons');
var ReactApp = React.createFactory(require('./component/ReactApp'));

var mountNode = document.getElementById("container-1");

React.renderComponent(new ReactApp({}), mountNode);
