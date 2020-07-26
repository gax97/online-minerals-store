import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import React from 'react';
import { HyperLink, RTFBold, Text } from '../BuildingBlocks/Typography';

export const options = {
  renderMark: {
    [MARKS.BOLD]: text => <RTFBold>{text}</RTFBold>,
  },

  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [INLINES.HYPERLINK]: (node, children) => <HyperLink>{children}</HyperLink>,
  },
};
