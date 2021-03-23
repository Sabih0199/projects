import React from 'react';

import Products from './products';

import productsData from './productsData';

function MainContent() {
   const pdtComponent = productsData.map(
    item => <Products key={item.id} data={item} />
  )
  return (
    <main className="main-content">
      <div className="container">
       <div className="products">
        {pdtComponent}
       </div>
      </div>
    </main>
  );
}

export default MainContent