import React from 'react'
import ContentLoader, { IContentLoaderProps } from 'react-content-loader'
import { JSX } from 'react/jsx-runtime'

const Skeleton = (props: JSX.IntrinsicAttributes & IContentLoaderProps) => (
	<ContentLoader
		speed={2}
		width={220}
		height={150}
		viewBox='0 0 200 150'
		backgroundColor='#e2e8f0'
		foregroundColor='#ecebeb'
		{...props}
	>
		<circle cx='10' cy='20' r='8' />
		<rect x='25' y='15' rx='5' ry='5' width='220' height='10' />
		<circle cx='10' cy='50' r='8' />
		<rect x='25' y='45' rx='5' ry='5' width='220' height='10' />
		<circle cx='10' cy='80' r='8' />
		<rect x='25' y='75' rx='5' ry='5' width='220' height='10' />
		<circle cx='10' cy='110' r='8' />
		<rect x='25' y='105' rx='5' ry='5' width='220' height='10' />
	</ContentLoader>
)

export default Skeleton
