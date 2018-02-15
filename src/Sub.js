import React, { Component } from 'react';

import './sub.css';

class Sub extends Component {
	submit(){
	    console.log('submit', this.testInput.value);
	  }

	render() {
		return (
			<div>
			    <input className='emailField' type="text" placeholder="test" ref={(input) => this.testInput = input}/>
			    <button onClick={this.submit.bind(this)} className="submitBtn">submit</button>
		    </div>
		);
	 }
}


export default Sub;
