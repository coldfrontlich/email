import React, { ChangeEvent, InputHTMLAttributes } from 'react'

const Input = ({ type, value, name, id, onChange, ...meta }: InputProps) => {
	return (
		<input
			type={type}
			id={id}
			name={name}
			value={value}
      onChange={onChange}
			className={`w-full h-full bg-slate-100 outline-none ${name === 'title' ? 'font-semibold' : ''}`}
      {...meta}
		/>
	)
}

export type InputProps = {
	type?: 'email' | 'text' | 'number'
	value?: string | number
	name?: string
	id?: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
} & InputHTMLAttributes<HTMLInputElement>

export default Input
