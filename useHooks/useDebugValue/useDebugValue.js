import React, { useState, useDebugValue } from 'react';

// useDebugValue affiche des log dans l'extension chrome debug react components
const Component = () => {

	const [status, setStatus] = useState(false);
	const isOnline = useStatus(status);

	const onClick = () => setStatus((prev) => !prev);

	return (
		<div>
			<h3>useDebuValue</h3>
			<div>
				<div className={`badge ${isOnline ? "online" : "offline"}`} />
					Steven Persia
			</div>
			<button onClick={onClick}>change Status</button>
		</div>
	)
}

const useStatus = (status) => {
	useDebugValue(status ? 'enLigne' : 'hors ligne');
	return status;
}

export default Component;