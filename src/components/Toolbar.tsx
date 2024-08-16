import React from 'react';

const Toolbar = () => {
  return (
		<div className='bottom rounded-b-2xl w-full h-1/6 bg-slate-200 items-center flex pl-[4%] justify-between'>
			<div className='h-5/6'>
				<button type='button' className='size-full bg-slate-700 text-gray-300 pr-2 pl-2 rounded-lg'>
					Send now!
				</button>
			</div>
			<div className='flex pr-[5%]'></div>
		</div>
	)
};

export default Toolbar;