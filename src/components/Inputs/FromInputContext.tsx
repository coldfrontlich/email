import { createContext, ReactNode, useContext, useState } from 'react'
import User from '../Users/User'

type FromInputContextProps = {
	inputValue: string
	setInputValue: (value: string) => void
	isMailListVisible: boolean
	setIsMailListVisible: (value: boolean) => void
	selectedUser?: User
	setSelectedUser: (user: User) => void
}

const FromInputContext = createContext<FromInputContextProps | undefined>(
	undefined
)

export const useFromInputContext = () => {
	const context = useContext(FromInputContext)
	if (context === undefined) {
		throw new Error(
			'useFromInputContext must be used within a FromInputProvider'
		)
	}
	return context
}

export const FromInputProvider = ({ children }: { children: ReactNode }) => {
	const [inputValue, setInputValue] = useState('')
	const [isMailListVisible, setIsMailListVisible] = useState(false)
	const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined)

	return (
		<FromInputContext.Provider
			value={{
				inputValue,
				setInputValue,
				isMailListVisible,
				setIsMailListVisible,
				selectedUser,
				setSelectedUser,
			}}
		>
			{children}
		</FromInputContext.Provider>
	)
}
