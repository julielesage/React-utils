const getOnlyActive = (users) => {
	const weekAgo = new Date()
	weekAgo.setDate(weekAgo.getDate() - 7)

	return users.filter(user => !user.isBanned && user.lastActivityAt >= weekAgo)
}


export const useUsers = () => {
	const [users, setUsers] = useState([])

	useEffect(() => {
		const loadUsers = async () => {
			const response = await fetch('/some-api')
			const data = await response.json()
			setUsers(data)
		}
		loadUsers()
	}, [])

	return { users }
}

export const useActiveUsers = () => {
	const { users } = useUsers()
	const activeUsers = useMemo(() => {
		return getOnlyActive(users)
	}, [users])
	return { activeUsers }
}