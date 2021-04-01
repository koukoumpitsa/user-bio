import styled from "styled-components";
import { animated } from 'react-spring';

export const InfoWrapper = styled(animated.div)`
  background-color: white;
  height: 60%;
  width: 60%;
  margin: 20px;
  border-radius: 20px;
  box-shadow: 0 13px 27px -5px hsl(240deg 30% 28% / 25%), 0 8px 16px -8px hsl(0deg 0% 0% / 30%), 0 -6px 16px -6px hsl(0deg 0% 0% / 3%);
  display:grid;
  grid-template-rows: 3fr 1fr 1fr 1fr;
  place-items: center;
  padding: 30px;

  .info-details{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    place-items: center;
  }

  .btn{
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
`;

export const ConnectionsBtn = styled.button`
  background-color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #D84727;
  font-weight: 700;
  outline: none;
  padding: 10px;
  border: 2px solid white;
  
  :hover{
    border-radius: 5px;
    border: 2px solid #D84727;

  }
`;

export const PostsBtn = styled.button`
  background-color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #D84727;
  font-weight: 700;
  outline: none;
  padding: 10px;
  border: 2px solid white;
  
  :hover{
    border-radius: 5px;
    border: 2px solid #D84727;

  }
`;