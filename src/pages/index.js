import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { HomePageSection } from '../components/HomePageSection';
import { MainHeader, SectionHeader } from '../components/Atoms/Headers';
import { Flex } from '../components/Atoms/Flex';
import { Divider } from '../components/Atoms/Dividers';

const IndexPage = ({ data }) => {
	const { allContentfulProduct, allContentfulHomePageSection } = data;
	const [first, second, third] = allContentfulHomePageSection.nodes;
	return (
		<Layout>
			<SEO title="Mineralium Store" />
			<HomePageSection
				title={'Top pieces today'}
				products={allContentfulProduct.nodes}
			/>
			<Flex.Row justifyContent="center">
				<Flex.Column>
					<Flex.Row>
						<SectionHeader css="margin-right: 5px;">With our </SectionHeader>{' '}
						<SectionHeader css="color: #534602; margin-right: 5px;">
							platform,{' '}
						</SectionHeader>
						<SectionHeader>you can</SectionHeader>
					</Flex.Row>
					<Divider.SmallMarginDivider />
				</Flex.Column>
			</Flex.Row>
			<Divider.BigMarginDivider />
			<Flex.Row justifyContent="center" columnOnMobile>
				<Flex.Column css="justify-content: center; margin-right: 50px;">
					<SectionHeader css="color: gold">{first.title}</SectionHeader>
					<Divider.SmallMarginDivider />
					<p style={{ textAlign: 'justify' }}>
						{first.content}
					</p>
					<Divider.BigMarginDivider />
				</Flex.Column>
				<Flex.Column css="justify-content: center; margin-right: 50px;">
					<SectionHeader css="color: #ff6f00">{second.title}</SectionHeader>
					<Divider.SmallMarginDivider />
					<p style={{ textAlign: 'justify' }}>
						{second.content}
					</p>
					<Divider.BigMarginDivider />
				</Flex.Column>
				<Flex.Column css="justify-content: center; margin-right: 50px;">
					<SectionHeader css="color: #59a00c">{third.title}</SectionHeader>
					<Divider.SmallMarginDivider />
					<p style={{ textAlign: 'justify' }}>
						{third.content}
					</p>
					<Divider.BigMarginDivider />
				</Flex.Column>
			</Flex.Row>
			<Divider.BigMarginDivider />
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
		allContentfulHomePageSection {
			nodes {
				title
				content
			}
		}
	}
`;
