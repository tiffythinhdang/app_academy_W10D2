import React from 'react';
import Clock from './clock';
import Tabs from './tab';
import Weather from './weather';

const tabs = [
  {title: "one", content: "I am one" },
  {title: "two", content: "I am two" },
  {title: "three", content: "I am three" }
];

const Root = () => {
  return (
    <div>
      <Clock />
      <Weather />
      <Tabs tabs={tabs} />
    </div>
  );
};

export default Root;