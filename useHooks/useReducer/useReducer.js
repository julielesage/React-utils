import React, { useReducer } from 'react';

const initialState = {
	count: 5
};

const countReducer = (state, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return ({ ...state, count: state.count + 1 });
		case 'DECREMENT':
			return ({ ...state, count: state.count - 1 });
		default:
			throw new Error();
	}
};


const Component = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const increment = () => {
		dispatch({ type: 'INCREMENT' });
	};
	const decrement = () => {
		dispatch({ type: 'DECREMENT' })
	};

	return (
		<div>
			<h3>useReducer</h3>
			Count : {state.count}
			<br />
			<button onClick={increment} > + 1 </button>
			<button onClick={decrement} > - 1 </button>
		</div>
	)
};

export default Component;