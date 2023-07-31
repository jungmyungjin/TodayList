import React from 'react';

import TodoList from 'components/TodoList/TodoList';
import Header from 'components/Header/Header';
import NearbyDates from 'components/NearbyDates/NearbyDates';

const MainPage = () => {
  return (
    <>
      <Header />
      <NearbyDates />
      <TodoList />
    </>
  );
};

export default MainPage;
