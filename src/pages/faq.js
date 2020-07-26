import React from 'react';
import Layout from '../components/layout';
import MetaInject from '../components/metaInject';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { graphql } from 'gatsby';
import { FaqQuestion } from '../components/FAQ';
import { Flex } from '../components/BuildingBlocks/Flex';
import { Separator } from '../components/BuildingBlocks/Separators';
import { StyledInput } from '../components/BuildingBlocks/Input';
import { SubmitButton } from '../components/BuildingBlocks/Buttons';
import { options } from '../components/BuildingBlocks/Typography';

const FAQ = ({ data: { allContentfulFrequentlyAskedQuestion } }) => (
  <Layout>
    <MetaInject title="FAQ" />
    <h1>{allContentfulFrequentlyAskedQuestion.total}</h1>
    <FaqQuestion.SectionWrapper>
      {allContentfulFrequentlyAskedQuestion.nodes.map(item => {
        return (
          <FaqQuestion title={item.title}>
            {documentToReactComponents(item.content.json, options)}
          </FaqQuestion>
        );
      })}
    </FaqQuestion.SectionWrapper>
    <h2>Your question is not answered? Please contact us.</h2>
    <Flex.Column as="form">
      <Separator variant="small" />
      <StyledInput placeholder="name" required />
      <Separator variant="small" />
      <StyledInput
        type="textarea"
        placeholder="your message"
        as="textarea"
        required
      />
      <Separator variant="small" />
      <SubmitButton onClick={() => alert('Your message was successfully sent')}>
        Send
      </SubmitButton>
    </Flex.Column>
    <Separator variant="small" />
  </Layout>
);

export default FAQ;

export const query = graphql`
  {
    allContentfulFrequentlyAskedQuestion(
      sort: { fields: createdAt, order: ASC }
    ) {
      totalCount
      nodes {
        id
        title
        content {
          json
        }
        updatedAt
      }
    }
  }
`;
