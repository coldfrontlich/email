import React, {  MouseEventHandler } from 'react'

type OpenMenuProps = {
  onClick: MouseEventHandler<HTMLButtonElement>
}

const OpenMenu: React.FC<OpenMenuProps> = ({onClick}) => {
	return (
		<div className='flex rounded-2xl bg-slate-100 shadow-2xl w-4/6 h-4/6 max-w-3xl flex-col justify-center items-center transition-all'>
			<button
				type='button'
				className='border-2 border-gray-900 w-2/6 h-1/6 rounded-2xl'
				onClick={onClick}
			>
				Open email
			</button>
		</div>
	)
}

export default OpenMenu
