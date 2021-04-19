import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';

// permet de créer ses propres propriétés/methodes
const Component = () => {
	const counterRef = useRef();
	return (
		<div>
			<h3>useImperativeHandle</h3>
			<Counter ref={counterRef} />
			<button onClick={() => counterRef.current.incrementMe()}> + 1 from outside </button>
			<button onClick={() => counterRef.current.alertMe()}> Alert outside </button>
			{/* // ici on peut meme modifier une methode .click en increment() ! */}
			<button onClick={() => counterRef.current.click()}> + 1 from outside </button>
		</div>
	)
};

const Counter = forwardRef((props, ref) => {
	const [count, setCount] = useState(0);
	const increment = () => setCount((prevCount) => prevCount + 1);

	useImperativeHandle(ref, () => ({
		incrementMe: increment,
		alertMe: () => alert(count),
		click: increment,
	}));

	return (
		<>
			Count : {count}
			<br />
			<button onClick={increment}> + 1 </button>
		</>
	)
});

export default Component;