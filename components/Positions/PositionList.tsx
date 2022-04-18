import { Grid, GridItem, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { Position } from 'types';
import PositionCard from './PositionCard';
interface Props {
	positions: Position[];
}
const PositionList: FC<Props> = ({ positions }) => {
	return (
		<Grid templateRows="repeat(5,1fr)" h="100vh" gap={5} w="full">
			{positions.map((position) => (
				<PositionCard position={position} key={position.id} />
			))}
		</Grid>
	);
};

export default PositionList;
