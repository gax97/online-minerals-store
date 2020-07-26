import React from 'react';

import Layout from '../../components/layout';
import MetaInject from '../../components/metaInject';
import {
  MainHeader,
  SectionHeader,
} from '../../components/BuildingBlocks/Headers';
import { Separator } from '../../components/BuildingBlocks/Separators';
import { StyledInput } from '../../components/BuildingBlocks/Input';
import { SellSubmitButton, StyledForm } from '../sell';
import { Flex } from '../../components/BuildingBlocks/Flex';

const Stones = () => {
  return (
    <Layout>
      <MetaInject title="Stones and Gems" />
      <Flex.Column justifyContent="center">
        <MainHeader>Coming soon!</MainHeader>
        <Separator variant="small" />
        <SectionHeader>
          Send us your email and we will notify you!
        </SectionHeader>
        <Separator variant="small" />
        <StyledForm css="align-self:center">
          <StyledInput placeholder="your email" />
          <Separator />
          <SellSubmitButton onClick={() => alert('successfully submitted')}>
            Send
          </SellSubmitButton>
          <Separator variant="big" />
        </StyledForm>
      </Flex.Column>
    </Layout>
  );
};

export default Stones;
