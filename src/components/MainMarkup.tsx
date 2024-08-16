import React, { PropsWithChildren } from 'react'


const MainMarkup = ({
	children,
}: PropsWithChildren<{ children?: React.ReactNode }>) => {
	return (
		<div className='bg-gray-400 w-full h-screen justify-center flex content-center flex-wrap'>
			{children}
		</div>
	)
}

export default MainMarkup