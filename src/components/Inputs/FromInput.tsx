import React, { ChangeEvent } from 'react'
import Input from '../ui/Input'
import MailList from '../ui/MailList'
import User from '../Users/User'
import { useFromInputContext } from './FromInputContext'

const FromInput = ({ users, isLoading }: FromInputProps) => {
	const { inputValue, setInputValue, isMailListVisible, setIsMailListVisible, selectedUser } =
		useFromInputContext()

	const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
		setIsMailListVisible(true)
	}

	return (
		<div className='flex flex-row border-b-2 pb-1'>
			<label htmlFor='email' className='text-slate-500 pr-2.5'>
				From:
			</label>
			{isMailListVisible ? (
				<div
					className={
						inputValue
							? `bg-red-300 w-8 h-6 mr-2.5 text-center rounded-2xl text-gray-200 transition-all`
							: ''
					}
				>
					{inputValue.at(0)?.toUpperCase()}
				</div>
			) : (
				<img className='rounded-3xl w-8 h-8 ' src={selectedUser?.avatar} alt='' />
			)}
			<Input
				type='email'
				id='email'
				name='email'
				value={inputValue}
				onChange={handleInputValueChange}
				autoComplete='off'
			/>
			{isMailListVisible && inputValue && (
				<MailList users={users} isLoading={isLoading} />
			)}
		</div>
	)
}

export type FromInputProps = {
	users: User[]
	isLoading: boolean
}

export default FromInput
