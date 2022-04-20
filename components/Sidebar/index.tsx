import { FC, ReactNode } from 'react';
import { Flex, Divider } from '@chakra-ui/react';
interface SidebarProps {
	children?: ReactNode;
}
const Sidebar: FC<SidebarProps> = ({ children }) => {
	return (
		<Flex
			flexDir="column"
			justifyContent="start"
			w="20%"
			alignItems="center"
			borderBottom={2}
			borderColor="gray"
			as="section"
		>
			<Flex
				w="full"
				flexDir="row"
				h="100%"
				justifyContent="space-between"
			>
				<Flex w="full">{children}</Flex>

				<Divider orientation="vertical" height="full" />
			</Flex>
		</Flex>
	);
};

export default Sidebar;
