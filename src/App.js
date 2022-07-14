import React from "react";
import Route from './components/Route'
import Accordion from "./components/Accordion";
import Search from './components/Search'

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework"
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers"
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components"
  }
];
export default () => {
  return (
    <div>
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/search'>
        <Search />
      </Route>
      
    </div>
  );
};
