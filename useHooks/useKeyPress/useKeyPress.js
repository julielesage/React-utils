import React, { useEffect, useState } from 'react';

const Component = () => {
	const keyPressed = useKeyPress("f");
	return (
		<div>
			<h3>useKeyPress</h3>
			{keyPressed && content}
		</div>
	)
};

const content = (
	<span>Follow me </span>
);

// /!\ un custom hook est a mettre dans un fichier à part 
const useKeyPress = (targetKey) => {
	const [isKeyPressed, setIsKeyPressed] = useState(false);

	const downHandler = ({ key }) => {
		if (key === targetKey)
			setIsKeyPressed(true);
	}

	const upHandler = ({ key }) => {
		if (key === targetKey)
			setIsKeyPressed(false);
	}
	useEffect(() => {
		window.addEventListener("keydown", downHandler);
		window.addEventListener("keyup", upHandler)
		return () => {
			window.removeEventListener("keydown", downHandler);
			window.removeEventListener("keyup", upHandler)
		}
	}, []);
	return isKeyPressed;
};

export default Component;