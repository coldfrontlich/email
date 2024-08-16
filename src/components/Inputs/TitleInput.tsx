import React, { ChangeEvent, useState } from 'react';
import Input from '../ui/Input';

const TitleInput = () => {
  const [titleValue, setTitleValue] = useState('')

	const handleTitleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
			setTitleValue(e.target.value)
	}


  return (
		<div className='flex flex-row border-b-2 pb-1 pt-2'>
			<label htmlFor='title' className='text-slate-500 pr-2.5'>
				Title:
			</label>
			<Input
				type='text'
				id='title'
				name='title'
				value={titleValue}
				onChange={handleTitleValueChange}
				maxLength={60}
			/>
			<div className='bg-slate-200 rounded-md text-xs text-center pt-1 w-1/12 h-1/12 text-gray-500'>
				{titleValue.length}
			</div>
		</div>
	)
};

export default TitleInput;