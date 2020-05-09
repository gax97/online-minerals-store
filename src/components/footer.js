import styled from 'styled-components';
import React from 'react';
import { Flex } from './Atoms/Flex';
import { Link } from 'gatsby';

const Footer = () => {
	return (
		<Footer.Wrapper>
			<Flex.Row justifyContent="space-around">
				<Flex.Column>
					<Footer.Link>FAQ</Footer.Link>
					<Footer.Link>About us</Footer.Link>
					<Footer.Link>Blog</Footer.Link>
					<Footer.Link>Contact us</Footer.Link>
				</Flex.Column>
				<Flex.Column>
					<Footer.Link as="span">Social media:</Footer.Link>
					<Footer.Link>Instagram</Footer.Link>
					<Footer.Link>Facebook</Footer.Link>
					<Footer.Link>Tik Tok</Footer.Link>
				</Flex.Column>
			</Flex.Row>
			<Flex.Column alignItems="center">
				<div>
					© {new Date().getFullYear()},{` `} Mineralium Shop
				</div>
				mineraliumshop@business.com
			</Flex.Column>
		</Footer.Wrapper>
	);
};
Footer.Wrapper = styled.footer`
	background: ${props => props.theme.colors.primaryDark};
	color: ${props => props.theme.colors.white};
	height: 12rem;
	display: flex;
	flex-direction: column;
	padding: 2rem 12rem;
	width: 100%;
`;
Footer.Link = styled(Link)`
	color: white;
	text-decoration: none;
	font-size: 16px;
`;
export default Footer;
