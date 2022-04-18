import Layout from '@/components/Layout';
import Link from '@/components/Link';
import { Text } from '@chakra-ui/react';
import React from 'react';

const ErrorPage = () => {
	return (
		<Layout>
			<Text>Ups! Parece que ha ocurrido un error</Text>
			<Link href="/">Volver atrás</Link>
		</Layout>
	);
};

export default ErrorPage;
