import styled from "styled-components";
import { animated } from 'react-spring';

export const ProfileWrapper = styled(animated.div)`
  height: 90%;
  width: 90%;
  display: grid;
  place-items: center;
`;

export const UserList = styled(animated.div)`
  padding: 30px;
  height: 100%;
  width: 95%;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;