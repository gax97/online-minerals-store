import React from 'react';

import Layout from '../components/layout';
import MetaInject from '../components/metaInject';
import { FlexWrap } from '../components/BuildingBlocks/Wrappers';
import {
  MainHeader,
  SectionHeader,
} from '../components/BuildingBlocks/Headers';
import { Separator } from '../components/BuildingBlocks/Separators';
import { Flex } from '../components/BuildingBlocks/Flex';
import { SubmitButton } from '../components/BuildingBlocks/Buttons';
import { navigate } from '@reach/router';
import { minSrc, rockSrc, stonesSrc } from '../images';

const ExplorePage = () => {
  return (
    <Layout>
      <MetaInject title="Products" />
      <MainHeader>Explore our product groups</MainHeader>
      <Separator variant="medium" />
      <FlexWrap style={{ justifyContent: 'space-around' }}>
        <Flex.Column style={{ alignItems: 'center' }}>
          <SectionHeader>Minerals</SectionHeader>
          <Separator variant="small" />
          <img src={minSrc} style={{ width: '300px', height: '300px' }} />
          <Separator variant="small" />
          <SubmitButton onClick={() => navigate('/products/minerals')}>
            Explore
          </SubmitButton>
          <Separator variant="medium" />
        </Flex.Column>

        <Flex.Column style={{ alignItems: 'center' }}>
          <SectionHeader>Rocks</SectionHeader>
          <Separator variant="small" />
          <img src={rockSrc} style={{ width: '300px', height: '300px' }} />
          <Separator variant="small" />
          <SubmitButton onClick={() => navigate('/products/rocks')}>
            Explore
          </SubmitButton>
          <Separator variant="medium" />
        </Flex.Column>
        <Flex.Column style={{ alignItems: 'center' }}>
          <SectionHeader>Stones and Gems</SectionHeader>
          <Separator variant="small" />
          <img src={stonesSrc} style={{ width: '300px', height: '300px' }} />
          <Separator variant="small" />
          <SubmitButton onClick={() => navigate('/products/stones-and-gems')}>
            Explore
          </SubmitButton>
          <Separator variant="medium" />
        </Flex.Column>
      </FlexWrap>
      <Separator variant="big" />
    </Layout>
  );
};

export default ExplorePage;
