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

//12 ################################

//13 ################################

//14 ################################

//15 ################################

//16 ################################

//17 ################################

//18 ################################

//19 ################################

//20 ################################

//21 ################################

//22 ################################