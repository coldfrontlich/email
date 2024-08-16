import React from 'react'
import UserList from '../Users/UserList'
import User from '../Users/User'

const MailList = ({ users, isLoading }: MailListProps) => {
	return (
		<div
			className={`bg-slate-100 absolute rounded-xl ml-[5%] mt-8 border-black border-2 min-w-64`}
		>
			<UserList items={users} isLoading={isLoading}/>
		</div>
	)
}

export type MailListProps = {
	users: User[]
	isLoading: boolean
}

export default MailList
