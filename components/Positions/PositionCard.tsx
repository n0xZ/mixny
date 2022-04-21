import { useRouter } from 'next/router';
import { FC } from 'react';
import {
	GridItem,
	Heading,
	Text,
	Stack,
} from '@chakra-ui/react';
import LinkBox from '../LinkBox';
import { Position } from 'types';
interface Props {
	position: Position;
}
const PositionCard: FC<Props> = ({ position }) => {
	const { locale } = useRouter();
	return (
		<LinkBox href={`/position/${position.id}`}>
			<GridItem
				boxShadow="md"
				borderRadius="lg"
				border="2px"
				borderColor="whatsapp.500"
				h={160}
				padding={3}
				as="aside"
			>
				<Stack
					flex={1}
					flexDir="row"
					justifyContent="space-between"
					alignItems="center"
				>
					<Heading as="h3" color="blue" fontSize="lg">
						{position.title}
					</Heading>

					<Text>{position.employmentType}</Text>
				</Stack>
				<Text fontWeight="bold" marginBottom={2}>
					{position.publishedCategory.name}
				</Text>
				<Text>
					{locale === 'en'
						? '	Read the full position description by clicking here. '
						: '	Lea la descripción de la propuesta haciendo click acá. '}
				</Text>
			</GridItem>
		</LinkBox>
	);
};

export default PositionCard;
