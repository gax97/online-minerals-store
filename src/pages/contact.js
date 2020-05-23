import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { HomePageSection } from '../components/HomePageSection';
import { MainHeader, SectionHeader } from '../components/Atoms/Headers';
import { Divider } from '../components/Atoms/Dividers';
import { StyledInput } from '../components/Atoms/Input';
import { SellSubmitButton, StyledForm } from './sell';
import { Flex } from '../components/Atoms/Flex';

const IndexPage = ({ data }) => {
	// const { allContentfulProduct } = data;
	return (
		<Layout>
			<SEO title="Contact" />
			<Flex.Row columnOnMobile>
				<Flex.Column>
					<MainHeader left>
						If you want to help us improve the platform
					</MainHeader>
					<Divider.MediumMarginDivider />
					<SectionHeader left>Or you have any question</SectionHeader>
					<Divider.SmallMarginDivider />
					<SectionHeader left>Feel free to contact us!</SectionHeader>
					<Divider.SmallMarginDivider />
					<SectionHeader left>Thanks!</SectionHeader>
					<Divider.BigMarginDivider />
				</Flex.Column>
				<Flex.Column>
					<StyledForm>
						<SectionHeader>Please provide your information</SectionHeader>
						<Divider.MediumMarginDivider />
						<StyledInput placeholder="First name" />
						<Divider.SmallMarginDivider />
						<StyledInput placeholder="Last name" />
						<Divider.SmallMarginDivider />
						<StyledInput placeholder="Your email" />
						<Divider.SmallMarginDivider />
						<StyledInput placeholder="Country" />
						<Divider.SmallMarginDivider />
						<StyledInput placeholder="Your message" as="textarea" />
						<Divider.MarginDivider />
						<SellSubmitButton onClick={() => alert('successfully submitted')}>
							Send
						</SellSubmitButton>
						<Divider.BigMarginDivider />
					</StyledForm>
				</Flex.Column>
			</Flex.Row>
		</Layout>
	);
};

export default IndexPage;

export const query = graphql`
	{
		allContentfulProduct(limit: 3) {
			nodes {
				weight
				price
				name
				images {
					file {
						url
					}
					description
					id
					title
				}
				id
				description
				country
				continent
			}
		}
	}
`;
