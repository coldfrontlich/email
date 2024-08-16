import React, { useEffect, useState } from 'react'
import FromInput from './Inputs/FromInput'
import TitleInput from './Inputs/TitleInput'
import User from './Users/User'
import { FromInputProvider } from './Inputs/FromInputContext'

const MainMenu = () => {
const [users, setUsers] = useState<User[]>([])
const [isLoading, SetIsLoading] = useState<boolean>(true)
	useEffect(() => {
		function getUsers() {
			fetch('https://reqres.in/api/users')
				.then(res => res.json())
				.then(json => {
					setUsers(json.data)
				})
				.catch(err => {
					console.warn(err)
				}).finally(() => SetIsLoading(false))
		}
		getUsers()
	}, [])

	return (
		<div className='flex w-11/12 h-full'>
			<form className='w-full flex flex-col'>
				<FromInputProvider>
					<FromInput users={users} isLoading={isLoading} />
				</FromInputProvider>
				<TitleInput />
				<div className='form-group h-full mt-2.5'>
					<label htmlFor='message'></label>
					<textarea
						id='message'
						name='message'
						className='size-full outline-none bg-slate-100 resize-none'
						placeholder='Write something...'
					></textarea>
				</div>
			</form>
		</div>
	)
}

export default MainMenu
