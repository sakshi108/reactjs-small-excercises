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

class MyApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'CamperBot'
		}
	}
  render() {
    return (
	   	<div>
	   		<Navbar name={this.state.name} />
	   	</div>
    );
  }
};

class Navbar extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
    const { name } = this.props
		return (
		<div>
			<h1>Hello, my name is: {name}  </h1>
		</div>
		);
	}
};

//32 ################################

class MyApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: ''
		}
	}
	handleChange = (event) => {
		this.setState({
			inputValue: event.target.value
		});
	}
  render() {
    return (
	   	<div>
				{ /* change code below this line */ }
				<GetInput inputValue={this.state.inputValue} handleInput={this.handleChange} />
        <RenderInput input={this.state.inputValue} />
				{ /* change code above this line */ }
	   	</div>
    );
  }
};

class GetInput extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h3>Get Input:</h3>
				<input
					value={this.props.input}
					onChange={this.props.handleInput}/>
			</div>
		);
	}
};

class RenderInput extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h3>Input Render:</h3>
				<p>{this.props.input}</p>
			</div>
		);
	}
};

//33 ################################
class MyComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		// change code below this line
		console.log("que lo que")
		// change code above this line
	}
  render() {
    return <div />
  }
};

//34 ################################

class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeUsers: null
		};
	}
	componentDidMount() {
		setTimeout( () => {
			this.setState({
				activeUsers: 1273
			});
		}, 2500);
	}
  render() {
    return (
			<div>
				<h1>Active Users: { this.state.activeUsers }</h1>
			</div>
    );
  }
};

//35 ################################
class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: ''
		};
	}
	// change code below this line
	componentDidMount() {
		document.addEventListener('keydown', () =>{
      this.handleKeyPress()
    })
	}
	componentWillUnmount() {
		document.removeEventListener('keydown', () => {
      this.handleKeyPress()
    })
	}
	// change code above this line
	handleEnter = () => {
		this.setState({
			message: this.state.message + 'You pressed the enter key! '
		});
	}
	handleKeyPress = (event) => {
    if (event.keyCode === 13) {
    	this.handleEnter();
    }
  }
  render() {
    return (
			<div>
				<h1>{this.state.message}</h1>
			</div>
    );
  }
};

//36 ################################

class Dialog extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillUpdate() {
		console.log('Component is about to update...');
	}
	// change code below this line
	componentWillReceiveProps(nextProps) {
  	 console.log(this.props, nextProps)
  }
  
  componentDidUpdate(){
    console.log("component has updated")
  }
	// change code above this line
  render() {
    return <h1>{this.props.message}</h1>
  }
};

class Controller extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: 'First Message'
		};
	}
	changeMessage = () => {
		this.setState({
			message: 'Second Message'
		});
	}
  render() {
    return (
			<div>
				<button onClick={this.changeMessage}>Update</button>
				<Dialog message={this.state.message}/>
			</div>
    );
  }
};

//37 ################################

class OnlyEvens extends React.Component {
	constructor(props) {
		super(props);
	}
	shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // change code below this line
    return nextProps.value % 2 === 0;
    // change code above this line
	}
	componentWillReceiveProps(nextProps) {
		console.log('Receiving new props...');
	}
	componentDidUpdate() {
		console.log('Component re-rendered.');
	}
  render() {
    return <h1>{this.props.value}</h1>
  }
};

class Controller extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0
		};
	}
	addValue = () => {
		this.setState({
			value: this.state.value + 1
		});
	}
  render() {
    return (
			<div>
				<button onClick={this.addValue}>Add</button>
				<OnlyEvens value={this.state.value}/>
			</div>
    );
  }
};

//38 ################################
class Colorful extends React.Component {
  render() {
    return (
	    <div style={{ color: 'red', fontSize: 72 }}>Big Red</div>
    );
  }
};

//39 ################################

const styles = {color: 'purple', fontSize: 40, border: '2px solid purple'}
// change code above this line
class Colorful extends React.Component {
  render() {
  	// change code below this line
    return (
	    <div style={styles}>Style Me!</div>
    );
    // change code above this line
  }
};


//40 ################################

const inputStyle = {
	width: 235,
	margin: 5
}

class MagicEightBall extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInput: '',
			randomIndex: ''
		}
		this.ask = this.ask.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	ask() {
		if (this.state.userInput) {
			this.setState({
				randomIndex: Math.floor(Math.random() * 20),
				userInput: ''
			});
		}
	}
	handleChange(event) {
		this.setState({
			userInput: event.target.value
		});
	}
	render() {
		const possibleAnswers = [
			"It is certain", "It is decidedly so", "Without a doubt",
			"Yes, definitely", "You may rely on it", "As I see it, yes",
			"Outlook good", "Yes", "Signs point to yes", "Reply hazy try again",
			"Ask again later", "Better not tell you now", "Cannot predict now",
			"Concentrate and ask again", "Don't count on it", "My reply is no",
			"My sources say no", "Outlook not so good","Very doubtful", "Most likely"
		];
		const answer =  possibleAnswers[this.state.randomIndex]
		return (
			<div>
				<input
					type="text"
					value={this.state.userInput}
					onChange={this.handleChange}
					style={inputStyle} /><br />
				<button onClick={this.ask}>Ask the Magic Eight Ball!</button><br />
				<h3>Answer:</h3>
				<p>
					{ /* change code below this line */ }
					{answer}
					{ /* change code above this line */ }
				</p>
			</div>
		);
	}
};

//41 ################################

class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: true
		}
	}
	toggleDisplay = () => {
		this.setState({
			display: !this.state.display
		});
	}
  render() {
  	// change code below this line
  	if (this.state.display) {
	    return (
		   	<div>
		   		<button onClick={this.toggleDisplay}>Toggle Display</button>
		   		<h1>Displayed!</h1>
		   	</div>
	    );
	  } else {
	  	return (
	  		<div>
		   		<button onClick={this.toggleDisplay}>Toggle Display</button>
		   	</div>
	  	);
	  }
  }
};

//42 ################################
class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: true
		}
	}
	toggleDisplay = () => {
		this.setState({
			display: !this.state.display
		});
	}
  render() {
  	// change code below this line
    return (
	   	<div>
	   		<button onClick={this.toggleDisplay}>Toggle Display</button>
	   		{this.state.display && <h1>Displayed!</h1>}
	   	</div>
    );
  }
};

//43 ################################
class Parent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: true
		}
	}
	toggleDisplay = () => {
		this.setState({
			display: !this.state.display
		});
	}
  render() {
    return (
	   	<div>
	   		<button onClick={this.toggleDisplay}>Toggle Display</button>
	   		<Child display={this.state.display}/>
	   	</div>
    );
  }
};

class Child extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		// change code below this line
		if (this.props.display) {
			return <h1>Display!</h1>
		} else {
			return null;
		}
	}
}

//44 ################################


const inputStyle = {
	width: 235,
	margin: 5
}

class CheckUserAge extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userAge: '',
			input: ''
		}
		this.submit = this.submit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.setState({
			input: e.target.value,
			userAge: ''
		});
	}
	submit() {
		this.setState({
			userAge: this.state.input
		});
	}
	render() {
		const buttonOne = <button onClick={this.submit}>Submit</button>;
		const buttonTwo = <button>You May Enter</button>;
		const buttonThree = <button>You Shall Not Pass</button>;
		return (
			<div>
				<h3>Enter Your Age to Continue</h3>
				<input
					style={inputStyle}
					type="number"
					value={this.state.input}
					onChange={this.handleChange} /><br />
					{
						this.state.userAge === '' ?
						buttonOne :
						this.state.userAge >= 18 ?
						buttonTwo :
						buttonThree
					}
			</div>
		);
	}
};

//45 ################################
class Results extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<h1>
			{
				this.props.fiftyFifty ? "You win!" : "You lose!"
			}
			</h1>
		)
	};
};

class GameOfChance extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 1
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState({
			counter: this.state.counter+=1
		});
	}
	render() {
		let expression = (Math.random() > .5)
		return (
			<div>
				<button onClick={this.handleClick}>Play Again</button>
				{ /* change code below this line */ }
				<Results fiftyFifty={expression} />
				{ /* change code above this line */ }
				<p>{'Turn: ' + this.state.counter}</p>
			</div>
		);
	}
};

//46 ################################

class GateKeeper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ''
		};
		this.handleInput = this.handleInput.bind(this);
	}
	handleInput(event) {
		this.setState({ input: event.target.value })
	}
	render() {
		let inputStyle = {
			border: '1px solid black'
		};
		if (this.state.input.length > 15) {
			inputStyle.border = '3px solid red';
		};
		return (
			<div>
				<h3>Don't Type Too Much:</h3>
				<input
					type="text"
					style={inputStyle}
					value={this.state.input}
					onChange={this.handleInput} />
			</div>
		);
	}
};

//47 ################################

const textAreaStyles = {
	width: 235,
	margin: 5
};

class MyToDoList extends React.Component {
	constructor(props) {
		super(props);
		// change code below this line
		this.state = {
      userInput: '',
      toDoList: []
    }
		// change code above this line
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleSubmit() {
		const itemsArray = this.state.userInput.split(',');
		this.setState({
			toDoList: itemsArray
		});
	}
	handleChange(e) {
		this.setState({
			userInput: e.target.value
		});
	}
	render() {
		const items = this.state.toDoList.map(item => {
      return <li>{item}</li>
    })
		return (
			<div>
				<textarea
					onChange={this.handleChange}
					value={this.state.userInput}
					style={textAreaStyles}
					placeholder="Separate Items With Commas" /><br />
				<button onClick={this.handleSubmit}>Create List</button>
				<h1>My "To Do" List:</h1>
				<ul>
					{items}
				</ul>
			</div>
		);
	}
};

//48 ################################

const frontEndFrameworks = [
	'React',
	'Angular',
	'Ember',
	'Knockout',
	'Backbone',
	'Vue'
];

function Frameworks() {
	const renderFrameworks = frontEndFrameworks.map((fw, i) => {
		return <li key={i}>{fw}</li>
	})
	return (
		<div>
			<h1>Popular Front End JavaScript Frameworks</h1>
			<ul>
				{renderFrameworks}
			</ul>
		</div>
	);
};

//49 ################################
class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [
				{
					username: 'Jeff',
					online: true
				},
				{
					username: 'Alan',
					online: false
				},
				{
					username: 'Mary',
					online: true
				},
				{
					username: 'Jim',
					online: false
				},
				{
					username: 'Sara',
					online: true
				},
				{
					username: 'Laura',
					online: true
				}
			]
		}
	}
  render() {
  	const usersOnline = this.state.users.filter(user => {
  		return user.online;
  	});
  	const renderOnlineUsers = usersOnline.map(user => {
  		return (
  			<li key={user.username}>{user.username}</li>
  		);
  	});
    return (
	   	<div>
	   		<h1>Current Online Users:</h1>
	   		<ul>
					{renderOnlineUsers}
				</ul>
	   	</div>
    );
  }
};

//50 ################################
class App extends React.Component {
	constructor(props) {
		super(props);
	}
  render() {
    return <div/>
  }
};

// change code below this line
ReactDOMServer.renderToString(<App/>);
