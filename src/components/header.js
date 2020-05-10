import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useRef, useState } from "react"
import styled from 'styled-components';
import { Device } from '../lib/css';
import { CartContext } from "../../gatsby-browser"

const StyledLogo = styled(Link)`
	color: white;
	text-decoration: none;
	font-size: 32px;
`;
const Header = ({ siteTitle, headerItems }) => {
	return(
		<Header.Wrapper>
			<Header.Content>
				<StyledLogo to="/">{siteTitle}</StyledLogo>
				<Header.Navigation>
					{headerItems.map(item => {
						return (
							<Header.Link to={item.to} activeClassName="active">
								{item.name}
							</Header.Link>
						);
					})}
				</Header.Navigation>
			</Header.Content>
		</Header.Wrapper>
	);
}
Header.Navigation = styled.nav``;
Header.Link = styled(Link)`
	color: white;
	text-decoration: none;
	font-size: 20px;
	padding-right: 0.65rem;
	&.active {
		font-weight: bold;
		font-size: 24px;
	}
`;
Header.Wrapper = styled.header`
	background-color: darkslategray;
	position: fixed;
	z-index: 101;
	top: 0;
	right: 0;
	left: 0;
	height: 4.75rem;
`;
Header.Content = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1.45rem 6rem;
	height: 100%;
	align-items: center;
	${Device.mobileL} {
		padding: 1.45rem 0.5rem;
	}
`;

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
