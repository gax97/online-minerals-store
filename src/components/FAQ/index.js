// Add in some styling
import styled from 'styled-components';
import React from 'react';
import { GrayUnderline } from '../BuildingBlocks/Typography';

export const FaqQuestion = ({ title, children }) => {
  return (
    <FaqQuestion.Wrapper>
      <FaqQuestion.Title>{title}</FaqQuestion.Title>
      <FaqQuestion.Content>{children}</FaqQuestion.Content>
      <GrayUnderline />
    </FaqQuestion.Wrapper>
  );
};
FaqQuestion.Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 24px;
  font-weight: 600;
`;
FaqQuestion.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;
FaqQuestion.SectionWrapper = styled.div``;
FaqQuestion.Content = styled.div`
  font-size: 16px;
  margin-bottom: 0.825rem;
`;
