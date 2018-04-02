//1 ################################

const JSX = <div>hellos</div>;

//2 ################################

const JSX = (
	<div>
 		<h1>This is an H1 tag</h1>
  	<p>This is a P tag</p>
  	<ul>
    	<li>This is li 1</li>
      <li>This is 2</li>
      <li>This is 3</li>
    </ul>
  </div>
)

//3 ################################

const JSX = (
<div>
	<h1>This is a block of JSX</h1>
	{ /* Just a comment baby */ }
	<p>Here's a subtitle</p>
</div>);

//4 ################################

const JSX = (
<div>
	<h1>Hello World</h1>
	<p>Lets render this to the DOM</p>
</div>
);
// change code below this line
ReactDOM.render(JSX, document.getElementById('challenge-node'))

//5 ################################

const JSX = (
<div className="myDiv">
	<h1>Add a class to this div</h1>
</div>);

//6 ################################

const JSX = (
<div>
	{/* change code below this line */}
	<h2>Welcome to React!</h2> <br />
	<p>Be sure to close all tags!</p>
	<hr />
	{/* change code above this line */}
</div>
);

ReactDOM.render(JSX, document.getElementById('challenge-node'));

//7 ################################

const MyComponent = function() {
	// change code below this line
	return(
  	<div>sup bud</div>
  )

}

//8 ################################


class MyComponent extends React.Component {
	constructor(props) {
		super(props);
	}
  render() {
	  // change code below this line
		return(
    	<div>
        <h1>Hello React!</h1>
      </div>
    )

  }
};

//9 ################################

const ChildComponent = () => {
	return (
		<div>
			<p>I am the child</p>
		</div>
	);
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
	    <div>
	      <h1>I am the parent</h1>
	      { /* change code below this line */ }

				<ChildComponent />
	      { /* change code above this line */ }
	    </div>
    );
  }
};

//10 ################################

const TypesOfFruit = () => {
	return (
		<div>
			<h2>Fruits:</h2>
			<ul>
				<li>Apples</li>
				<li>Blueberries</li>
				<li>Strawberries</li>
				<li>Bananas</li>
			</ul>
		</div>
	);
};

const Fruits = () => {
	return (
		<div>
			{ /* change code below this line */ }
				<TypesOfFruit />
			{ /* change code above this line */ }
		</div>
	);
};

class TypesOfFood extends React.Component {
  constructor(props) {
  	super(props);
  }

  render() {
    return (
	    <div>
	    	<h1>Types of Food:</h1>
		    { /* change code below this line */ }
					<Fruits />
		    { /* change code above this line */ }
	    </div>
    );
  }
};

//11 ################################

class Fruits extends React.Component {
	constructor(props) {
	  super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
		    { /* change code below this line */ }
				<NonCitrus />
        <Citrus />
	   	  { /* change code above this line */ }
      </div>
		);
	}
};

class TypesOfFood extends React.Component {
	constructor(props) {
	 	super(props);
	}
  render() {
  	return (
    	<div>
			  <h1>Types of Food:</h1>
		    { /* change code below this line */ }
				<Fruits />
		    { /* change code above this line */ }
		    <Vegetables />
    	</div>
  	);
	}
};

//12 ################################

class TypesOfFood extends React.Component {
  constructor(props) {
  	super(props);
  }
  render() {
    return (
	    <div>
		    <h1>Types of Food:</h1>
        {/* change code below this line */}
				<Fruits />
        <Vegetables />
		    {/* change code above this line */}
	    </div>
    );
  }
};

// change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'))


//13 ################################


// change code below this line
class MyComponent extends React.Component {

  render(){
    return(
    	<div><h1>My First React Component!</h1></div>
  	)
  }
}

ReactDOM.render(<MyComponent/>, document.getElementById('challenge-node'))


//14 ################################


const CurrentDate = (props) => {
	return (
		<div>
			{ /* change code below this line */ }
			<p>The current date is: {props.date} </p>
			{ /* change code above this line */ }
		</div>
	);
};

class Calendar extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h3>What date is it?</h3>
				{ /* change code below this line */ }
				<CurrentDate date={Date()} />
				{ /* change code above this line */ }
			</div>
		);
	}
};

//15 ################################

const List= (props) => {
	{ /* change code below this line */ }
	return <p>{props.tasks.join(", ")}</p>
	{ /* change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
  	super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
				<h2>Today</h2>
				{ /* change code below this line */ }
        <List tasks={["grapes", 'mangoes', 'unkown']} />
				<h2>Tomorrow</h2>
        <List tasks={['mandarine', 'papaya', 'orange']}/>
				{ /* change code above this line */ }
      </div>
    );
  }
};

//16 ################################

const ShoppingCart = (props) => {
  return (
		<div>
			<h1>Shopping Cart Component</h1>
		</div>
  )
};
// change code below this line
ShoppingCart.defaultProps = {items: 0}


//17 ################################

const Items = (props) => {
	return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
	quantity: 0
}

class ShoppingCart extends React.Component {
	constructor(props) {
		super(props);
	}
  render() {
    { /* change code below this line */ }
    return <Items quantity={10} />
    { /* change code above this line */ }
  }
};


//18 ################################

const Items = (props) => {
	return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// change code below this line

// change code above this line

Items.defaultProps = {
	quantity: 0
};

class ShoppingCart extends React.Component {
	constructor(props) {
		super(props);
	}
  render() {
    return <Items />
  }
};

Items.propTypes = {quantity: PropTypes.number.isRequired}


//19 ################################


class ReturnTempPassword extends React.Component {
  constructor(props) {
  	super(props);

  }
  render() {
    return (
        <div>
        		{ /* change code below this line */ }
            <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
            { /* change code above this line */ }
        </div>
    );
  }
};

class ResetPassword extends React.Component {
  constructor(props) {
  	super(props);

  }
  render() {
    return (
        <div>
        	<h2>Reset Password</h2>
        	<h3>We've generated a new temporary password for you.</h3>
        	<h3>Please reset this password from your account settings ASAP.</h3>
        	{ /* change code below this line */ }
					<ReturnTempPassword tempPassword={"this is the new password"} />
        	{ /* change code above this line */ }
        </div>
    );
  }
};




//20 ################################


const Camper = (props) =>{

    return(
    	<p>{props.name}</p>
    )

}

Camper.defaultProps = {name: "CamperBot"}
Camper.propTypes = {name: PropTypes.string.isRequired}

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};

//21 ################################


class StatefulComponent extends React.Component {
	constructor(props) {
		super(props);
		// initialize state here
		this.state ={
      name: ""
    }
	}
  render() {
    return (
	    <div>
	    	<h1>{this.state.name}</h1>
	    </div>
    );
  }
};

//22 ################################

class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'Free Code Camp'
		}
	}
  render() {
    return (
	    <div>
				{ /* change code below this line */ }
				<h1>{this.state.name}</h1>
	    	{ /* change code above this line */ }
	    </div>
    );
  }
};

//23 ################################

class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'Free Code Camp'
		}
	}
	render() {
		// change code below this line
		const { name } = this.state;
	  // change code above this line
  	return (
	    <div>
	    	{ /* change code below this line */ }
        <h1>{name}</h1>
	    	{ /* change code above this line */ }
	    </div>
    );
  }
};

//24 ################################

class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'Initial State'
		};
		this.click = this.click.bind(this);
	}
	click() {
		// change code below this line
		this.setState({name: 'React Rocks!'})
	  // change code above this line
	}
	render() {
  	return (
	    <div>
        <button onClick = {this.click}>Click Me</button>
        <h1>{this.state.name}</h1>
	    </div>
    );
  }
};

//25 ################################

class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			itemCount: 0
		};
		// change code below this line

		// change code above this line
	}

	render() {
  	return (
	    <div>
	    	{ /* change code below this line */ }
        <button onClick={e => this.setState({itemCount: this.state.itemCount+1})} >Click Me</button>
        { /* change code above this line */ }
        <h1>Current Item Count: {this.state.itemCount}</h1>
	    </div>
    );
  }
};

//26 ################################

class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: 'Hello!'
		};
	}
	setMessage = () => {
		this.setState({
			message: 'Goodbye!'
		});
	}
	render() {
  	return (
	    <div>
        <button onClick = {this.setMessage}>Click Me</button>
        <h1>{this.state.message}</h1>
	    </div>
    );
  }
};

//27 ################################

class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visibility: false
		};
	}
	// change code below this line
	toggleVisibility = () => {
    this.setState({visibility: !this.state.visibility})
  }
	// change code above this line
	render() {
		if (this.state.visibility) {
	  	return (
		    <div>
	        <button onClick = {this.toggleVisibility}>Click Me</button>
	        <h1>Now you see me!</h1>
		    </div>
	    );
  	} else {
  		return (
		    <div>
	        <button onClick = {this.toggleVisibility}>Click Me</button>
		    </div>
	    );
  	}
  }
};

//28 ################################

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}
	// change code below this line
	increment = () => {this.setState({count: this.state.count+1})};
  decrement = () => {this.setState({count: this.state.count -1})};
	reset = () => {this.setState({count:0})}
	// change code above this line
	render() {
  	return (
	    <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
	    </div>
    );
  }
};

//29 ################################

class ControlledInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ''
		};
	}
	// change code below this line

	// change code above this line
	render() {
  	return (
	    <div>
        { /* change code below this line */}
				<input onChange={e => this.setState({input: e.target.value})} />
      	{ /* change code above this line */}
        <p>Input: {this.state.input}</p>
	    </div>
    );
  }
};

//30 ################################

class MyForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
			submit: ''
		};
	}
	handleChange = (event) => {
		this.setState({
			input: event.target.value
		});
	}
	handleSubmit = (event) => {
		event.preventDefault()
		this.setState({
			submit: this.state.input
		});
	}
	render() {
  	return (
  		<div>
		   	<form onSubmit={this.handleSubmit}>
	        <input
	        	value={this.state.input}
	        	onChange={this.handleChange} />
	        <button type='submit'>Submit!</button>
		    </form>
				<h1>{this.state.submit}</h1>
		  </div>
    );
  }
};

//31 ################################

//32 ################################

//33 ################################

//34 ################################
