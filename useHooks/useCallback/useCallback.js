import React, { useCallback } from 'react';

// useMemo aide à l'optimisation des performances, memoize les valeurs en créant une sorte de cache
// alors que useCallback memoize des fonctions
// useEffect pour les effets de bord, alternative à componentDidMount, willMount, etc
// useMemo pour les valeurs qui changent pendant le rendu
// useCallback pour les fonctions (= components) pendant le rendu
// problem : à chaque lettre tapée dans l'input, chaque composant (les 3) se rerend avant de cliquer sur addUser!
// React.memo permet de Wrapper des composants : const composant = memo() => {} mais ca suffit pas
// useCallback va memoiser le handleRemove passé en props qui sans est redéfinie à chaque fois

const Component = () => {
	const [text, setText] = useState("");
	const [users, setUsers] = useState([
		{ id: "1", name: "Julie" },
		{ id: "2", name: "Marc" },
		{ id: "3", name: "Tulipe" },
	]);

	const genId = () => Math.random().toString(64);
	const handleText = (event) => setText(event.target.value);
	const handleAddUser = () => setUsers(users.concat({ id: genId, name: text }));
	const handleRemove = useCallback((id) => setUsers(users.filter(user => user.id !== id)), [users]);

	return (
		<div>
			<h3>useCallback</h3>
			<input onChange={handleText} type="text" value={text} />
			<button onClick={handleAddUser}>Add user</button>
			<button onClick={handleRemove}>Remove user</button>
			<List list={users} onRemove={handleRemoveUser} />
		</div>
	);
};

const List = ({ list, onRemove }) => {
	return (
		<ul>
			{
				list.map((item) => (
					<ListItem key={item.key} item={item} onRemove={onRemove} />
				))
			}
		</ul>
	)
}

const ListItem = ({ item, onRemove }) => {
	return (
		<li>
			{item.name}
			<button type="button" onClick={() => onRemove(item.id)}>Remove</button>
		</li>
	)
}

export default Component;