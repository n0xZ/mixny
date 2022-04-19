import type {
	GetStaticProps,
	InferGetStaticPropsType,
	NextPage,
} from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Layout from '@/components/Layout';
import PositionList from '@/components/Positions/PositionList';
import {
	Container,
	Flex,
	Stack,
	Text,
} from '@chakra-ui/react';
import Sidebar from '@/components/Sidebar';
import { PositionResult, Position } from '../types';
const Home: NextPage = ({
	positions,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const [actualPositions, setActualPositions] =
		useState<Position[]>(positions);
	const [search, setSearch] = useState<string>('');
	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const { value } = e.target;
		setSearch(value);
		const filteredPositions = positions.filter(
			(position: Position) => {
				return position.title
					.toLowerCase()
					.includes(value.toLowerCase());
			}
		);
		setActualPositions(filteredPositions);
	};
	return (
		<Layout>
			<Head>
				<title>Challenge majorkeys </title>
				<meta
					name="description"
					content="Challenge de Majorkeys realizado por Gonzalo Molina"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Flex w="full" h="full" as="section">
				<Sidebar
					inputValue={search}
					handleInputChange={handleInputChange}
					categories={0}
				/>

				<Container maxW="container.xl" h="full" minH="100vh">
					<Text as="span" fontSize="lg" fontWeight="bold">
						Open positions ({positions.length})
					</Text>
					<Stack flex={1} flexDir="column" alignItems="center">
						<PositionList positions={positions} />
					</Stack>
				</Container>
			</Flex>
		</Layout>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	const data = await fetch(String(process.env.API_URL));
	const positions: PositionResult = await data.json();
	return {
		props: {
			positions: positions.data,
		},
		revalidate: 60,
	};
};
