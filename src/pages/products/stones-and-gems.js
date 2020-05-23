import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import { MainHeader, SectionHeader } from "../../components/Atoms/Headers"
import { Divider } from "../../components/Atoms/Dividers"
import { StyledInput } from "../../components/Atoms/Input"
import { SellSubmitButton, StyledForm } from "../sell"
import { Flex } from "../../components/Atoms/Flex"

const Stones = ({ data }) => {

	return (
		<Layout>
			<SEO title="Stones and Gems" />
			<Flex.Column justifyContent="center">
				<MainHeader>Coming soon!</MainHeader>
				<Divider.SmallMarginDivider />
				<SectionHeader>Send us your email and we will notify you!</SectionHeader>
				<Divider.SmallMarginDivider />
				<StyledForm css="align-self:center">
					<StyledInput placeholder="your email"/>
					<Divider.MarginDivider />
					<SellSubmitButton onClick={() => alert('successfully submitted')}>
						Send
					</SellSubmitButton>
					<Divider.BigMarginDivider />
				</StyledForm>
			</Flex.Column>

		</Layout>
	);
};

export default Stones;

