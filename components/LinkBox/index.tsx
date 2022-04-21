import NextLink from 'next/link';
import { FC, ReactNode } from 'react';
import {
	LinkBox as ChakraLinkBox,
	LinkBoxProps,
	LinkOverlay,
} from '@chakra-ui/react';
interface Props extends LinkBoxProps {
	href: string;
	children?: ReactNode;
}
const LinkBox: FC<Props> = ({
	href,
	children,
	...rest
}) => {
	return (
		<ChakraLinkBox
			{...rest}
			as="aside"
			_hover={{
				opacity: '0.5',
				transition: '0.2s ease-in-out',
			}}
		>
			<NextLink href={href} passHref>
				<LinkOverlay>{children}</LinkOverlay>
			</NextLink>
		</ChakraLinkBox>
	);
};

export default LinkBox;
