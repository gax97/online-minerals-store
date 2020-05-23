import styled from 'styled-components';
import React from 'react';
import { Flex } from './Atoms/Flex';
import { Link } from 'gatsby';
import { Device } from '../lib/css';
import { Divider } from './Atoms/Dividers';

const Footer = () => {
	return (
		<Footer.Wrapper>
			<Flex.Row justifyContent="space-around">
				<Flex.Column>
					<Footer.Link to="/faq">FAQ</Footer.Link>
					<Footer.Link to="/explore">Explore</Footer.Link>
					<Footer.Link to="/contact">Contact us</Footer.Link>
					<Footer.Link to="/checkout">Cart</Footer.Link>
				</Flex.Column>
				<Flex.Column>
					<Footer.Link as="span">Social media:</Footer.Link>
					<Footer.Link>Instagram</Footer.Link>
					<Footer.Link>Facebook</Footer.Link>
					<Footer.Link>Tik Tok</Footer.Link>
				</Flex.Column>
			</Flex.Row>
			<Divider.SmallMarginDivider />
			<Flex.Column alignItems="center">
				<div>
					© {new Date().getFullYear()},{` `} Mineralium Shop
				</div>
				<p>mineraliumshop@gmail.com</p>
			</Flex.Column>
		</Footer.Wrapper>
	);
};
Footer.Wrapper = styled.footer`
	background: ${props => props.theme.colors.primaryDark};
	color: ${props => props.theme.colors.white};
	display: flex;
	flex-direction: column;
	padding: 2rem 12rem;
	width: 100%;
	${Device.mobileL} {
		padding: 2rem 0;
	}
`;
Footer.Link = styled(Link)`
	color: white;
	text-decoration: none;
	font-size: 18px;
	padding: 0.125rem;
`;
export default Footer;
