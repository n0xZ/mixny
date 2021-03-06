import {
	Container,
	Heading,
	Link,
	Stack,
} from '@chakra-ui/react';

const Header = () => {
	return (
		<Stack
			w="full"
			p={3}
			as="header"
			backgroundColor="whatsapp.300"
		>
			<Container
				as="nav"
				maxW="container.xl"
				flex={1}
				flexDir="row"
				alignItems="center"
			>
				<Heading as="h2">
					<Link href="/">Home</Link>
				</Heading>
			</Container>
		</Stack>
	);
};

export default Header;
