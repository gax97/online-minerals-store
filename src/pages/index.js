import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import MetaInject from '../components/metaInject';
import { HomePageSection } from '../components/HomePageSection';
import {
  MainHeader,
  SectionHeader,
} from '../components/BuildingBlocks/Headers';
import { Flex } from '../components/BuildingBlocks/Flex';
import { Separator } from '../components/BuildingBlocks/Separators';

const IndexPage = ({ data }) => {
  const { allContentfulProduct, allContentfulHomePageSection } = data;
  const [first, second, third] = allContentfulHomePageSection.nodes;
  return (
    <Layout>
      <MetaInject title="Mineralium Store" />
      <HomePageSection
        title={'Top pieces today'}
        products={allContentfulProduct.nodes}
        noButton
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
          <Separator variant="small" />
        </Flex.Column>
      </Flex.Row>
      <Separator variant="big" />
      <Flex.Row justifyContent="center" columnOnMobile>
        <Flex.Column css="justify-content: center; margin-right: 50px;">
          <SectionHeader css="color: gold">{first.title}</SectionHeader>
          <Separator variant="small" />
          <p style={{ textAlign: 'justify' }}>{first.content}</p>
          <Separator variant="big" />
        </Flex.Column>
        <Flex.Column css="justify-content: center; margin-right: 50px;">
          <SectionHeader css="color: #ff6f00">{second.title}</SectionHeader>
          <Separator variant="small" />
          <p style={{ textAlign: 'justify' }}>{second.content}</p>
          <Separator variant="big" />
        </Flex.Column>
        <Flex.Column css="justify-content: center; margin-right: 50px;">
          <SectionHeader css="color: #59a00c">{third.title}</SectionHeader>
          <Separator variant="small" />
          <p style={{ textAlign: 'justify' }}>{third.content}</p>
          <Separator variant="big" />
        </Flex.Column>
      </Flex.Row>
      <Separator variant="big" />
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
