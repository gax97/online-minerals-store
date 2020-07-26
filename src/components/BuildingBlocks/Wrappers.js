import styled from 'styled-components';
import { Device } from '../../lib/css';

export const MainContentWrapper = styled.main`
  padding: 0 7rem;
  margin-top: 6rem;
  min-height: calc(100vh - 18rem);
  ${Device.mobileL} {
    padding: 0 1rem;
  }
`;
export const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  width: 100%;
`;
