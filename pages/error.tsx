import { Text } from '@chakra-ui/react';
import Layout from '@/components/Layout';
import Link from '@/components/Link';


const ErrorPage = () => {
	return (
		<Layout>
			<Text>Ups! Parece que ha ocurrido un error</Text>
			<Link href="/">Volver atrás</Link>
		</Layout>
	);
};

export default ErrorPage;
