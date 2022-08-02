import { useActiveUsers } from '/useUsers';



const ActiveUsersList = () => {
	const { activeUsers } = useActiveUsers()

	const weekAgo = new Date()
	weekAgo.setDate(weekAgo.getDate() - 7)
	return (
		<ul>
			{activeUsers.map(user =>
				<UserItem key={user.id} user={user} />
			)}
		</ul>
	)
}

export default ActiveUsersList;