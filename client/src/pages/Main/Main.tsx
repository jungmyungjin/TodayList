import React from 'react';

import TodoList from '../../components/TodoList/TodoList';
import Header from '../../components/Header/Header';
import NearbyDates from '../../components/NearbyDates/NearbyDates';

const Main = () => {
  return (
    <div>
      <Header />
      <NearbyDates />
      <TodoList />
    </div>
  );
};

export default Main;
