import React, { useEffect, useState } from 'react'
import MainMarkup from './components/MainMarkup'
import Email from './components/Email'
import CloseMenu from './components/CloseMenu'
import MainMenu from './components/MainMenu'
import Toolbar from './components/Toolbar'
import MainWindow from './components/MainWindow'
import OpenMenu from './components/OpenMenu'


function App() {
  const [isOpen, setIsOpen] = useState(false)
	const [isFullscreen, setIsFullscreen] = useState(false)

  const onClickChangeEmail = () => {
    setIsOpen((prev) => !prev)
  }
	
	const onClickSetFullscreen = () => {
		setIsFullscreen(prev => !prev)
	} 

	return (
		<MainMarkup>
			{isOpen ? (
				<MainWindow isFullscreen={isFullscreen}>
					<Email>
						<CloseMenu isFullscreen={isFullscreen} onClickClose={onClickChangeEmail} onClickFullscreen={onClickSetFullscreen}/>
						<MainMenu />
						<Toolbar />
					</Email>
				</MainWindow>
			) : (
				<OpenMenu onClick={onClickChangeEmail}/>
			)}
		</MainMarkup>
	)
}

export default App
