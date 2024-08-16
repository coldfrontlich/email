import React, { MouseEventHandler } from 'react';
const cross: string = require('../assets/svg/cross.svg').default
const fullscreen: string = require('../assets/svg/fullscreen.svg').default
const minus: string = require('../assets/svg/minus.svg').default
const smallscreen: string = require('../assets/svg/smallscreen.svg').default

type CloseMenuProps = {
	isFullscreen: boolean,
	onClickClose?: MouseEventHandler<HTMLButtonElement>
	onClickFullscreen?: MouseEventHandler<HTMLButtonElement>
}

const CloseMenu: React.FC<CloseMenuProps> = ({isFullscreen,onClickClose, onClickFullscreen}) => {
  return (
		<div className='top pt-4 pr-4 self-end'>
			<div className=' w-20 h-10 flex flex-row justify-around'>
				<button type='button'>
					<img src={minus} alt='' width={15} className='pt-3'></img>
				</button>
				{isFullscreen ? (
					<button type='button' onClick={onClickFullscreen} className='transition-all'>
						<img src={smallscreen} alt='' width={15}></img>
					</button>
				) : (
					<button type='button' onClick={onClickFullscreen} className='transition-all'>
						<img src={fullscreen} alt='' width={15}></img>
					</button>
				)}
				<button type='button' onClick={onClickClose}>
					<img src={cross} alt='' width={15}></img>
				</button>
			</div>
		</div>
	)
};

export default CloseMenu;