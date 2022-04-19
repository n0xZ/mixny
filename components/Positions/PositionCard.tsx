import {
	GridItem,
	Heading,
	Text,
	Stack,
} from '@chakra-ui/react';
import { FC } from 'react';
import { Position } from 'types';
import LinkBox from '../LinkBox';
interface Props {
	position: Position;
}
const PositionCard: FC<Props> = ({ position }) => {
	return (
		<LinkBox href={`/position/${position.id}`}>
			<GridItem
				boxShadow="md"
				borderRadius="lg"
				border="2px"
				borderColor="whatsapp.500"
				h={150}
				padding={3}
			>
				<Stack
					flex={1}
					flexDir="row"
					justifyContent="space-between"
					alignItems="center"
				>
					<Heading as="h3" color="blue.500" fontSize="lg">
						{position.title}
					</Heading>
					<Stack>
						<Text>{position.employmentType}</Text>
						<Text></Text>
					</Stack>
				</Stack>
				<Text fontWeight="bold" marginBottom={3}>
					{position.publishedCategory.name}
				</Text>
				<Text>
					Read the full position description by clicking here.
				</Text>
			</GridItem>
		</LinkBox>
	);
};

export default PositionCard;
