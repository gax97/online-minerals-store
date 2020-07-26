import React, { useContext } from 'react';

import Layout from '../components/layout';
import MetaInject from '../components/metaInject';
import {
  MainHeader,
  SectionHeader,
} from '../components/BuildingBlocks/Headers';
import { Flex } from '../components/BuildingBlocks/Flex';
import { Separator } from '../components/BuildingBlocks/Separators';
import { StyledInput } from '../components/BuildingBlocks/Input';
import styled from 'styled-components';
import { Device } from '../lib/css';
import { SubmitButton } from '../components/BuildingBlocks/Buttons';
import { UserContext } from '../Context/user/UserProvider';

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
const Sell = () => {
  const { user, fbButton } = useContext(UserContext);

  return (
    <Layout>
      <MetaInject title="Sell products with us" />
      <MainHeader>Sell products with our platform</MainHeader>
      <Separator variant="big" />
      <Flex.Column style={{ width: '100%' }} alignItems="center">
        {!user && fbButton}
        {user && (
          <StyledForm>
            <SectionHeader>Product info</SectionHeader>
            <Separator variant="medium" />
            <StyledInput placeholder="product name" />
            <Separator variant="small" />
            <StyledInput placeholder="product group" />
            <Separator variant="small" />
            <StyledInput placeholder="price" />
            <Separator variant="small" />
            <StyledInput placeholder="country" />
            <Separator variant="small" />
            <StyledInput placeholder="continent" />
            <Separator variant="small" />
            <StyledInput placeholder="weight" />
            <Separator variant="medium" />
            <SellSubmitButton onClick={() => alert('successfully submitted')}>
              Submit as {user.name}
            </SellSubmitButton>
          </StyledForm>
        )}
      </Flex.Column>
      <Separator variant="big" />
    </Layout>
  );
};

export default Sell;
