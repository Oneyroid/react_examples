import React, { Component } from 'react';

import './App.css';

import RegForm from './RegForm';

import Sub from './Sub';

class App extends Component {
	render() {
		return (
			<div className="container">
				<RegForm />
				<Sub />
			</div>
		);
	}
}

export default App;



///# call of items

// import Header from './Header';

// const menu=[
// 	{
// 		link: '/articles',
// 		label: 'Articles'
// 	},
// 	{
// 		link: '/contacts',
// 		label: 'Contacts'
// 	},
// 	{
// 		link: '/posts',
// 		label: 'Posts'
// 	}
// ];

// class App extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<Header items={menu} />
// 			</div>
// 		);
// 	}
// }
