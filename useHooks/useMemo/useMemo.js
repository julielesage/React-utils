import React, { useMemo } from 'react';

// useMemo aide à l'optimisation des performances, memoize les valeurs en créant une sorte de cache
// alors que useCallback memoize des fonctions
// useEffect pour les effets de bord, alternative à componentDidMount, willMount, etc
// useMemo pour les valeurs qui changent pendant le rendu
// useCallback pour les fonctions pendant le rendu
// problem : à chaque lettre tapée dans l'input, la valeur du filtre se rerend, il faut donc memoiser la valeur 
const Component = () => {
	const [text, setText] = useState("");
	const [search, setSearch] = useState("");

	const handleText = (event) => setText(event.target.value);
	const handleSearch = () => setSearch(text);

	const filteredFrameworks = useMemo(() => frameworks.filter((framework) => {
		return framework.name.toLowerCase().includes(search.toLowerCase());
	}), [search]);
	// le click sur search permet de filtrer le résultat,
	return (
		<div>
			<h3>useMemo</h3>
			<input onChange={handleText} type="text" value={text} />
			<button onClick={handleSearch}>Search</button>

			<ul>
				{filteredFrameworks.map((item) => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
		</div>
	);
};

const frameworks = [
	{ id: "1", name: "React" },
	{ id: "2", name: "Vue" },
	{ id: "3", name: "Angular" },
]

export default Component;