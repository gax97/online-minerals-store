import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import MetaInject from '../components/metaInject';
import {
  MainHeader,
  SectionHeader,
} from '../components/BuildingBlocks/Headers';
import { Separator } from '../components/BuildingBlocks/Separators';
import { StyledInput } from '../components/BuildingBlocks/Input';
import { SellSubmitButton, StyledForm } from './sell';
import { Flex } from '../components/BuildingBlocks/Flex';

const IndexPage = () => {
  return (
    <Layout>
      <MetaInject title="Contact" />
      <Flex.Row columnOnMobile>
        <Flex.Column>
          <MainHeader left>
            If you want to help us improve the platform
          </MainHeader>
          <Separator variant="medium" />
          <SectionHeader left>Or you have any question</SectionHeader>
          <Separator variant="small" />
          <SectionHeader left>Feel free to contact us!</SectionHeader>
          <Separator variant="small" />
          <SectionHeader left>Thanks!</SectionHeader>
          <Separator variant="big" />
        </Flex.Column>
        <Flex.Column>
          <StyledForm>
            <SectionHeader>Please provide your information</SectionHeader>
            <Separator variant="medium" />
            <StyledInput placeholder="First name" />
            <Separator variant="small" />
            <StyledInput placeholder="Last name" />
            <Separator variant="small" />
            <StyledInput placeholder="Your email" />
            <Separator variant="small" />
            <StyledInput placeholder="Country" />
            <Separator variant="small" />
            <StyledInput placeholder="Your message" as="textarea" />
            <Separator variant="medium" />
            <SellSubmitButton onClick={() => alert('successfully submitted')}>
              Send
            </SellSubmitButton>
            <Separator variant="big" />
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
