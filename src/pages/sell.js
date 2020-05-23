import React, { useContext } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { MainHeader, SectionHeader } from '../components/Atoms/Headers';
import { Flex } from '../components/Atoms/Flex';
import { Divider } from '../components/Atoms/Dividers';
import { StyledInput } from '../components/Atoms/Input';
import styled from 'styled-components';
import { Device } from '../lib/css';
import { SubmitButton } from '../components/Atoms/Buttons';
import { UserContext } from "../Context/user/UserProvider"

export const StyledForm = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 700px;
	${StyledInput} {
		width: 600px;
	}
	${Device.mobileL} {
		width: 95%;
		${StyledInput} {
			max-width: 80% !important;
		}
	}
`;
export const SellSubmitButton = styled(SubmitButton)`
	min-width: 20rem;
	white-space: nowrap;
`;
const Sell = ({ data }) => {
	const { user, fbButton } = useContext(UserContext);

	return (
		<Layout>
			<SEO title="Sell products with us" />
			<MainHeader>Sell products with our platform</MainHeader>
			<Divider.BigMarginDivider />
			<Flex.Column style={{ width: '100%' }} alignItems="center">
				{!user && fbButton}
				{user && (
					<StyledForm>
						<SectionHeader>Product info</SectionHeader>
						<Divider.MediumMarginDivider />
						<StyledInput placeholder="product name" />
						<Divider.SmallMarginDivider />
						<StyledInput placeholder="product group" />
						<Divider.SmallMarginDivider />
						<StyledInput placeholder="price" />
						<Divider.SmallMarginDivider />
						<StyledInput placeholder="country" />
						<Divider.SmallMarginDivider />
						<StyledInput placeholder="continent" />
						<Divider.SmallMarginDivider />
						<StyledInput placeholder="weight" />
						<Divider.MarginDivider />
						<SellSubmitButton onClick={() => alert('successfully submitted')}>
							Submit as {user.name}
						</SellSubmitButton>
					</StyledForm>
				)}
			</Flex.Column>
			<Divider.BigMarginDivider />
		</Layout>
	);
};

export default Sell;
