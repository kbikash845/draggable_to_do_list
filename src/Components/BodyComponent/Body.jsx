import React from 'react';

import Filter from './Filter/Filter'
import List from '../ListComponent/List'

function Body() {
  return (
    <div className={`w-full  p-3  bg-light`}>
    <div className="flex flex-wrap">
      <List />
    </div>
  </div>
  )
}

export default Body