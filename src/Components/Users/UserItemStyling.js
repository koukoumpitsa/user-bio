import styled from "styled-components";
import { animated } from 'react-spring';


export const UserItemWrapper = styled(animated.div)`
  border: 2px solid white;
  background-color: ${props => props.userClicked || "white"};
  box-shadow: 0 13px 27px -5px hsl(240deg 30% 28% / 25%), 0 8px 16px -8px hsl(0deg 0% 0% / 30%), 0 -6px 16px -6px hsl(0deg 0% 0% / 3%);
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 10px;
  place-items: center;
  border-radius: 5px;
  outline: none;
  cursor: pointer;

  :hover{
    border: 2px solid #D84727;
  }
`;

export const UserItemDetailsWrapper = styled(animated.div)`
  display: grid;
  place-items: center start;
  grid-template-rows: repeat(4, 1fr);
  width: 100%;
  height: 100%;
  padding: 10px;



  .nameUser{
    font-weight: 900;
  }

  .detailsUser{
    font-weight: 500;
  }
`;