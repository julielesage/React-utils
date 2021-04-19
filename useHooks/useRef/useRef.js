import React, { useRef } from 'react';

const Component = () => {
	const inputRef = useRef();
	const onClickFocus = () => inputRef.current.focus();
	const onClickDownload = () => inputDRef.current.click();
	return (
		<div>
			<h3>useRef</h3>
			<input ref={inputRef} placeholder="name" type="text" />
			<input ref={inputDRef} type="file" style={{ display: "none" }} />
			<button onClick={onClickFocus}>Focus l'input du haut sans cliquer dedans</button>
			<button onClick={onClickDownload}>Download le fichier caché</button>
		</div>
	);
};

export default Component;