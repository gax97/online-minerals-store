import styled from 'styled-components';
import { Device } from '../../lib/css';

export const MainContentWrapper = styled.main`
	padding: 0 7rem;
	margin-top: 6rem;
	overflow-y: scroll;
	min-height: calc(100vh - 18rem);
	${Device.mobileL} {
		padding: 0 1rem;
	}
`;
