import Layout from '@/components/Layout';
import Link from '@/components/Link';
import { Container, Text } from '@chakra-ui/react';
import React from 'react';

const Page404 = () => {
	return (
		<Layout>
			<Container maxW="container.xl" >
				<Text>Ups! Parece que esta página no existe.</Text>
				<Link href="/">Volver atrás</Link>
			</Container>
		</Layout>
	);
};

export default Page404;
