import { Stack } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import Header from './Header';
interface Props {
	children?: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
	return (
		<>
			<Header />

			<Stack as="main" w="full" marginTop={7}>{children}</Stack>
		</>
	);
};

export default Layout;
