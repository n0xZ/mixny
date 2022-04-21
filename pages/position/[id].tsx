import {
	GetStaticPaths,
	GetStaticProps,
	InferGetStaticPropsType,
} from 'next';
import Head from 'next/head';

import { Container, Heading, Text } from '@chakra-ui/react';
import Link from '@/components/Link';
import Layout from '@/components/Layout';

import { PositionResult } from 'types';

const DynamicPositionPage = ({
	position,
	locale,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<Layout>
			<Head>
				<title>Challenge Majorkeys - {position.title}</title>
				<title>Challenge majorkeys </title>
				<meta
					name="description"
					content="Challenge de Majorkeys realizado por Gonzalo Molina"
				/>
			</Head>
			<Container maxW="container.md">
				<Link href="/" marginBottom={3}>
					{locale === 'es' ? 'Volver atrás' : 'Back'}
				</Link>
				<Heading
					as="h3"
					fontWeight="bold"
					fontSize="3xl"
					marginBottom={2}
				>
					{position.title}
				</Heading>
				<Text color="blue.500" marginBottom={2} fontSize="lg">
					{position.publishedCategory.name}
				</Text>
				<span
					dangerouslySetInnerHTML={{
						__html: position.publicDescription,
					}}
				/>
			</Container>
		</Layout>
	);
};

export default DynamicPositionPage;

export const getStaticPaths: GetStaticPaths = async () => {
	const response = await fetch(String(process.env.API_URL));
	const { data }: PositionResult = await response.json();
	return {
		paths: data.map((position) => ({
			params: { id: String(position.id) },
		})),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps<
	any,
	any
> = async ({ locale, params: { id } }) => {
	const response = await fetch(String(process.env.API_URL));
	const { data }: PositionResult = await response.json();
	const filteredPosition = data.find(
		(position) => position.id === parseInt(id)
	);

	if (!filteredPosition)
		return {
			redirect: {
				destination: '/error',
				permanent: false,
			},
		};
	return {
		props: {
			position: filteredPosition,
			locale,
		},
	};
};
