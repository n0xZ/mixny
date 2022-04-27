import type {
	GetStaticProps,
	InferGetStaticPropsType,
	NextPage,
} from 'next';

import Head from 'next/head';
import { useEffect, useState } from 'react';
import {
	Container,
	Flex,
	Text,
	useMediaQuery,
} from '@chakra-ui/react';
import Layout from '@/components/Layout';
import PositionList from '@/components/Positions/PositionList';
import Sidebar from '@/components/Sidebar';
import PositionSearch from '@/components/Positions/PositionSearch';
import { usePositions } from '@/hooks/usePositions';
import { PositionResult } from '../types';
const Home: NextPage = ({
	positions,
	locale,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const [isComponentMounted, setIsComponentMounted] =
		useState(false);
	const { handleInputChange, positionState } =
		usePositions(positions);
	const [isLargerThan1280] = useMediaQuery(
		'(min-width: 1280px)'
	);

	useEffect(() => {
		setIsComponentMounted(true);
	}, []);
	return (
		<Layout>
			<Head>
				<title>Challenge Majorkeys</title>
				<meta
					name="description"
					content="Challenge de Majorkeys realizado por Gonzalo Molina"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Flex w="full" h="full" as="section">
				{isLargerThan1280 && isComponentMounted ? (
					<Sidebar>
						<PositionSearch
							inputValue={positionState.searchPosition}
							handleInputChange={handleInputChange}
						/>
					</Sidebar>
				) : null}

				<Container maxW="container.xl" h="full" minH="100vh">
					<Text fontSize="lg" fontWeight="bold" marginBottom={3}>
						{locale === 'es'
							? 'Posiciones abiertas'
							: 'Open positions'}{' '}
						(
						{positionState.searchPosition.length === 0
							? positions.length
							: positionState.searchPositionResult.length}
						)
					</Text>

					{positionState.searchPosition.length !== 0 ? (
						<PositionList
							positions={positionState.searchPositionResult}
						/>
					) : (
						<PositionList positions={positions} />
					)}
				</Container>
			</Flex>
		</Layout>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async ({
	locale,
}) => {
	const data = await fetch(String(process.env.API_URL));
	const positions: PositionResult = await data.json();
	return {
		props: {
			positions: positions.data,
			locale,
		},
		revalidate: 60,
	};
};
