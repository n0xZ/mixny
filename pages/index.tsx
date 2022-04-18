import type {
	GetStaticProps,
	InferGetStaticPropsType,
	NextPage,
} from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Layout from '@/components/Layout';
import PositionList from '@/components/Positions/PositionList';
import { PositionResult, Position } from '../types';
import {
	Container,
	Divider,
	Flex,
	Stack,
	Text,
} from '@chakra-ui/react';
const Home: NextPage = ({
	positions,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const [actualPositions, setActualPositions] =
		useState<Position[]>(positions);
	const [search, setSearch] = useState<string>('');

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

			<Container maxW="container.xl" as="section">
				<Text as="span" fontSize="lg" fontWeight="bold">
					Open positions ({positions.length})
				</Text>
				<Stack flex={1} flexDir="column" alignItems="center">
					<PositionList positions={positions} />
				</Stack>
			</Container>
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
