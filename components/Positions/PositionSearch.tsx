import { FC } from 'react';
import { useRouter } from 'next/router';
import { Flex, Input } from '@chakra-ui/react';
interface Props {
	inputValue: string;
	handleInputChange: (
		e: React.ChangeEvent<HTMLInputElement>
	) => void;
}
const PositionSearch: FC<Props> = ({
	handleInputChange,
	inputValue,
}) => {
	const { locale } = useRouter();

	return (
		<Flex w="full" as="aside">
			<Input
				p={2}
				placeholder={
					locale === 'es'
						? 'Filtrar por nombre de posición...'
						: 'Filter by position name...'
				}
				name="searchPosition"
				value={inputValue}
				onChange={handleInputChange}
				mx={3}
			/>
		</Flex>
	);
};

export default PositionSearch;
