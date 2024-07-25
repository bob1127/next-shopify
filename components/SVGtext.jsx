import React from 'react';

const TabMenu = () => {
  return (
    <div className="tab-menu">
      <picture id="js-roulette-copy" className="p-roulette__copy w-[100px] is-ver2">
        <source media="(min-width:768px)" srcSet="https://www.cupnoodle.jp/assets2023/img/home/mv_copy_sp.png" />
        <img src="https://www.cupnoodle.jp/assets2023/img/home/mv_copy_sp.png" className='w-[100px]'  alt="選べるおいしさカップヌードル" />
      </picture>
    </div>
  );
};

export default TabMenu;
