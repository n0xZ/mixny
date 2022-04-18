import { FC, ReactNode } from 'react';
import {
	Link as ChakraLink,
	LinkProps,
} from '@chakra-ui/react';
import NextLink from 'next/link';
interface Props extends LinkProps {
	href: string;
}
const Link: FC<Props> = ({ href, children, ...rest }) => {
	return (
		<NextLink href={href} passHref>
			<ChakraLink textDecoration="none" {...rest}>{children}</ChakraLink>
		</NextLink>
	);
};

export default Link;
