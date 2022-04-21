import { FC } from 'react';
import { Grid } from '@chakra-ui/react';
import PositionCard from './PositionCard';
import { Position } from 'types';
interface Props {
	positions: Position[];
}
const PositionList: FC<Props> = ({ positions }) => {
	return (
		<Grid templateRows="repeat(5,1fr)" h="100vh" gap={5} w="full" as="article">
			{positions.map((position) => (
				<PositionCard position={position} key={position.id} />
			))}
		</Grid>
	);
};

export default PositionList;
