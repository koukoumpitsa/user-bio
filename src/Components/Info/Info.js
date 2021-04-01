import React from "react";
import { InfoWrapper, ConnectionsBtn, PostsBtn } from "./InfoStyling";
import {useSpring} from 'react-spring'

export default function Info({onConnectionClick, onPostClick}) {
    const animation = useSpring({ opacity: 1, from: { opacity: 0 } });
    return (
    <InfoWrapper style={animation}>
        <img src="./1F464.svg" alt="acount" width="250"/>
            <h2>Clementina DuBuque</h2>
        <div className="info-details">
            <h4>Hoeger LLC</h4>
            <h4>Rey.Padberg@karina.biz</h4>
            <h4>London</h4>
        </div>
        <div className="btn">
            <ConnectionsBtn onClick={onConnectionClick}>Network</ConnectionsBtn>
            <PostsBtn onClick={onPostClick}>Posts</PostsBtn>
        </div>
    </InfoWrapper>
    );
}