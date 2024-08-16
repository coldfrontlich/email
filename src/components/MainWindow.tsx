import React, { PropsWithChildren } from 'react'

const MainWindow = ({
	isFullscreen,
	children,
}: PropsWithChildren<{
	isFullscreen: boolean
	children?: React.ReactNode
}>) => {
	return (
		<>
			{!isFullscreen ? (
				<div className='flex rounded-2xl bg-slate-100 shadow-2xl w-3/6 h-4/6 max-w-3xl flex-col  items-center transition-all'>
					{children}
				</div>
			) : (
				<div className='flex rounded-2xl bg-slate-100 shadow-2xl w-full h-5/6 max-w-3xl flex-col  items-center transition-all'>
					{children}
				</div>
			)}
		</>
	)
}

export default MainWindow
