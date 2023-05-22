import React from "react";
import Header from "./Header";
import ListCard from "./ListCard";

const Content = () => {
  return (
    <div id="container" class="container-lg p-0 m-0 d-flex flex-column">
      <Header />
      <ListCard />
    </div>
  );
};

export default Content;
