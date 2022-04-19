import { FC } from 'react';
import { Flex, Divider, Input } from '@chakra-ui/react';
interface SidebarProps {
	categories: number;
	inputValue: string;
	handleInputChange: (
		e: React.ChangeEvent<HTMLInputElement>
	) => void;
}
const Sidebar: FC<SidebarProps> = ({
	inputValue,
	handleInputChange,
}) => {
	return (
		<Flex
			flexDir="column"
			justifyContent="start"
			w="20%"
			alignItems="center"
		>
			<Flex
				w="full"
				flexDir="row"
				h="100%"
				p={4}
				justifyContent="space-between"
			>
				<Flex w="full">
					<Input
						p={2}
						placeholder="Filtrar por categorías..."
						value={inputValue}
						onChange={handleInputChange}
						mx={3}
					/>
				</Flex>

				<Divider orientation="vertical" height="full" />
			</Flex>
		</Flex>
	);
};

export default Sidebar;
