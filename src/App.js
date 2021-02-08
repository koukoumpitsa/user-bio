import React, { useEffect } from "react";
import styled from "styled-components";
import useFetch from "./useFetch";
import "./App.css";

const AppWrapper = styled.div`
  height: 100vh;
  background-color: #415d43;
`;

export default function App() {
  const {get, loading} = useFetch("https://jsonplaceholder.typicode.com/");

  useEffect(() => {
    get("users").then(data => {
      console.log(data);
    })
    .catch(error => console.log(error));
  }, []);

  return (
    <AppWrapper>
          <h1>Hello</h1>
    </AppWrapper>
 
  );
}

