import React, { useEffect } from "react";
import useFetch from "./useFetch";

export default function App() {
  const {get, loading} = useFetch("https://jsonplaceholder.typicode.com/");

  useEffect(() => {
    get("users").then(data => {
      console.log(data);
    })
    .catch(error => console.log(error));
  }, []);

  return (
    <h1>Hello</h1>
  );
}

