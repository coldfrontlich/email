import React from 'react'
import UserProfile from './UserProfile'
import User from './User'
import Skeleton from './Skeleton'
import { useFromInputContext } from '../Inputs/FromInputContext'

const UserList = ({ items, isLoading }: UserListProps) => {
	const { inputValue } = useFromInputContext()

	return (
		<>
			{isLoading ? (
				<div className='pl-3'>
					<Skeleton />
				</div>
			) : (
				<ul className=''>
					{items
						.filter(item => {
							const search = item.email?.toLowerCase()
							return search?.includes(inputValue.toLowerCase())
						})
						.map(item => (
							<UserProfile
								key={item.id}
								{...item}
							/>
						))}
				</ul>
			)}
		</>
	)
}

export type UserListProps = {
	items: User[]
	isLoading: boolean
}

export default UserList
