import React, { useEffect, useState } from "react";
import { UserList, ProfileWrapper } from "./Components/Users/UserListStyling";
import { UserItemDetailsWrapper, UserItemWrapper } from "./Components/Users/UserItemStyling";
import styled from "styled-components";
import useFetch from "./useFetch";
import "./App.css";
import Info from "./Components/Info/Info";
import {useSpring} from 'react-spring'

const AppWrapper = styled.div`
  height: 100vh;
  background-color: #99CDD6;
  display: grid;
  grid-template-columns: 1fr 2fr;
  place-items: center;
`;

const PostsWrapper = styled.div`
  height: 90%;
  width: 90%;
  display: grid;
  place-items: center;
  display: grid;
  grid-template-rows: 1fr 7fr;
`;

const PostTitleWrapper = styled.div`
  width: 90%;
  display: grid;
  place-items: center start;
`;

const PostList = styled.div`
  height:100%;
  width: 90%;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 20px;
`;

const Post = styled.div`
  padding: 10px;
  height: 100%;
  background-color: white;
  border-radius: 5px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  place-items: center start;
  box-shadow: 0 13px 27px -5px hsl(240deg 30% 28% / 25%), 0 8px 16px -8px hsl(0deg 0% 0% / 30%), 0 -6px 16px -6px hsl(0deg 0% 0% / 3%);
  cursor: pointer;

  .post-title{
    font-size: 20px;
    font-weight: 800;
  }

  .post-body{
    font-weight: 500;
    text-align: justify;
  }

  .post-extra{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .post-extra-like{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      place-items: center start;
      width: 100%;
    }
    .post-extra-repost{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      place-items: center start;
      width: 100%;
    }
  }

  :hover{
    box-shadow: 0 13px 27px -5px hsl(240deg 30% 28% / 75%), 0 8px 16px -8px hsl(0deg 0% 0% / 60%), 0 -6px 16px -6px hsl(0deg 0% 0% / 30%);
  }
`;

export default function App() {
  const { get, isloading } = useFetch("https://jsonplaceholder.typicode.com/");
  const [users, setUsers] = useState("");
  const [posts, setPosts] = useState("");
  const [connections, setConnections] = useState(false);
  const [postbtn, setPostBtn] = useState(false);

  function handleConnectionClick() {
    setConnections(!connections);
    setPostBtn(false);
      get("users").then(data => {
        console.log(data);
        setUsers(data);
        console.log(users);
      })
        .catch(error => console.log(error));
  }

  const usersData = Object.keys(users).filter(user => users[user].id < 9).map(filteredUser => (
    <UserItemWrapper key={users[filteredUser].id}>
        <img src="./1F464.svg" alt="acount" width="100"/>
        <UserItemDetailsWrapper  >
        <h3 className="nameUser">{users[filteredUser].name}</h3>
        <h4 className="detailsUser">{users[filteredUser].company.name}</h4>
        <h4 className="detailsUser">{users[filteredUser].email}</h4>
        <h4 className="detailsUser">{users[filteredUser].address.city}</h4>
        </UserItemDetailsWrapper>
    </UserItemWrapper>
  ));
  // const usersData = Object.keys(users).map((user,i) => <UserItem key={users[user].id}><h1>{users[user].name}</h1></UserItem>);
  
  function handlePostClick() {
    setPostBtn(!postbtn);
    setConnections(false);
      get("posts").then(data => {
        console.log(data);
        setPosts(data);
        console.log(posts);
      })
        .catch(error => console.log(error));
  }

  const postData = Object.keys(posts).filter(post => posts[post].id < 7).map(filteredPost => (
    <Post>
      <h4 className="post-title">{posts[filteredPost].title}</h4>
      <h5 className="post-body">{posts[filteredPost].body}</h5>
      <div className="post-extra">
        <div className="post-extra-like">
          <img src="./2764 (1).svg" alt="like" width="20" />
          <h5 className="post-like">likes 4 </h5>
        </div>
        <div className="post-extra-repost">
          <img src="./1F504.svg" alt="repost" width="20"/>
          <h5 className="post-reposts">reposts 15</h5>
        </div>
        
      </div>
    </Post>     
   ));


  return (
    <AppWrapper>
      <Info
        onConnectionClick={handleConnectionClick}
        onPostClick={handlePostClick}
      />
      {connections ? <ProfileWrapper> <UserList >{usersData}</UserList></ProfileWrapper> : ""}
      {postbtn ?
        <PostsWrapper>
          <PostTitleWrapper>
            <h2>My Posts</h2>
          </PostTitleWrapper>
          <PostList>{postData}</PostList>
        </PostsWrapper>
        : " "}

    </AppWrapper>
  );
}

