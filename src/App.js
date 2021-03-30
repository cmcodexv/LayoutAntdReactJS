import React from "react";
//container
import Layout from "./container/Layout/Index";
//components
import Home from "./components/home/Home";
import About from "./components/about/About";
//uirouter
import { UIRouter, pushStateLocationPlugin } from "@uirouter/react";

function App() {
  //states
  const states = [
    {
      name: "home",
      url: "/",
      component: Home,
    },
    {
      name: "about",
      url: "/about",
      component: About,
    },
  ];

  return (
    <UIRouter plugins={[pushStateLocationPlugin]} states={states}>
      <Layout />
    </UIRouter>
  );
}

export default App;
