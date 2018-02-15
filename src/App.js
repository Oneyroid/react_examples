import React, { Component } from 'react';

import RegForm from './RegForm';

class App extends Component {
	render() {
		return (
			<div>
				<RegForm />
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
