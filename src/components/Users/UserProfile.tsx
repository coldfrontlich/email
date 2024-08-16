import React from 'react'
import { useFromInputContext } from '../Inputs/FromInputContext'

const UserProfile = ({ email, avatar }: UserProfileProps) => {
	const { setInputValue, setIsMailListVisible, setSelectedUser } = useFromInputContext()

	const onClickUser = () => {
		if (email) {
			setSelectedUser({ email, avatar})
			setInputValue(email)
			setIsMailListVisible(false)
		}
	}

	return (
		<>
			<li onClick={onClickUser} className='hover:bg-slate-200 hover:rounded-xl'>
				<div className='flex flex-row'>
					<img className='rounded-3xl w-8 h-8 ' src={avatar} alt='User' />
					<div className='flex items-center pl-2'>
						<p>{email}</p>
					</div>
				</div>
			</li>
		</>
	)
}

export type UserProfileProps = {
	email?: string
	avatar?: string
}

export default UserProfile
