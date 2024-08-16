import React, { PropsWithChildren } from 'react';

const Email = ({
	children,
}: PropsWithChildren<{ children?: React.ReactNode }>) => {
	return (
		<>
      {children}
		</>
	)
}

export default Email;