import {
	GetStaticPaths,
	GetStaticProps,
	InferGetStaticPropsType,
} from 'next';
import Layout from '@/components/Layout';

import { Container, Heading, Text } from '@chakra-ui/react';
import { PositionResult } from 'types';
import Link from '@/components/Link';

const DynamicPositionPage = ({
	position,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<Layout>
			<Container maxW="container.md">
				<Link href="/">Back</Link>
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
		fallback: 'blocking',
	};
};

export const getStaticProps: GetStaticProps<
	any,
	any
> = async ({ params: { id } }) => {
	const response = await fetch(String(process.env.API_URL));
	const { data }: PositionResult = await response.json();
	const filteredPosition = data.find(
		(position) => position.id === parseInt(id)
	);
	console.log(filteredPosition);
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
		},
	};
};
