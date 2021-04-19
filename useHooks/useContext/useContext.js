import React, { createContext } from 'react';

// state global parent
const ThemeContext = createContext();

const ThemeComp = () => {
	return (
		<div>
			<h3>useContext</h3>
			<ThemeContext.Provider value="violet">
				<Paragraph />
				<Paragrah2 />
			</ThemeContext.Provider>
		</div>
	)
};

// old way 
const Paragraph = () => {
	return (
		<ThemeContext.consumer>
			{(color) => {
				return <p style={{ color }}>React Hook number 4</p>
			}}
		</ThemeContext.consumer>
	)
}

// new way
const Paragraph2 = () => {
	const color = useContext(ThemeContext)
	return <p style={{ color }}>React Hook number 4</p>
}

export default useContextComp;