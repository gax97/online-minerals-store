import React, { useContext } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { ProductCard } from '../components/Product/ProductCard';
import { graphql } from 'gatsby';
import { FlexWrap } from '../components/Atoms/Wrappers';
import { MainHeader, SectionHeader } from "../components/Atoms/Headers"
import { Divider } from '../components/Atoms/Dividers';
import { CartContext } from '../../gatsby-browser';
import { Flex } from "../components/Atoms/Flex"
import { SubmitButton } from "../components/Atoms/Buttons"
import { navigate } from "../../.cache/gatsby-browser-entry"
const minSrc = "https://www.lakesuperior.com/downloads/6211/download/amethyst.jpg?cb=d8b2cf4dcb33430fc3297b7ed736497e&w=640"
const rockSrc = "https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/e95c1b6a88f61697.cro-zmT1G3Ld-zoom.jpg"
const stonesSrc = "https://c1.wallpaperflare.com/preview/180/843/724/stones-gems-mineral-minerals.jpg"
const ExplorePage = ({ data }) => {
	return (
		<Layout>
			<SEO title="Products" />
			<MainHeader>Explore our product groups</MainHeader>
			<Divider.MediumMarginDivider />
			<FlexWrap style={{justifyContent: 'space-around'}}>
				<Flex.Column style={{alignItems: 'center'}}>
					<SectionHeader>Minerals</SectionHeader>
					<Divider.SmallMarginDivider />
					<img src={minSrc} style={{width: '300px', height: '300px'}} />
					<Divider.SmallMarginDivider />
					<SubmitButton onClick={()=> navigate('/products/minerals')}>Explore</SubmitButton>
				</Flex.Column>
				<Flex.Column style={{alignItems: 'center'}}>
					<SectionHeader>Rocks</SectionHeader>
					<Divider.SmallMarginDivider />
					<img src={rockSrc} style={{width: '300px', height: '300px'}} />
					<Divider.SmallMarginDivider />
					<SubmitButton onClick={()=> navigate('/products/rocks')}>Explore</SubmitButton>
				</Flex.Column>
				<Flex.Column style={{alignItems: 'center'}}>
					<SectionHeader>Stones and Gems</SectionHeader>
					<Divider.SmallMarginDivider />
					<img src={stonesSrc} style={{width: '300px', height: '300px'}} />
					<Divider.SmallMarginDivider />
					<SubmitButton onClick={()=> navigate('/products/stones-and-gems')}>Explore</SubmitButton>
				</Flex.Column>
			</FlexWrap>
			<Divider.BigMarginDivider />
		</Layout>
	);
};

export default ExplorePage;
