import React from 'react';

const PageHeader = ({headerPage}) => {
  return (
    <div className="bg-primary-bg bg-cover bg-[url('https://www.premierleague.com/resources/rebrand/v7.124.0/i/elements/backgrounds/primary-bg.svg')]" >
      <div className="max-w-7xl  py-12 sm:px-6 lg:px-8 px-[25px] xl:px-[200px]">
        <h1 className="text-4xl font-extrabold text-black sm:text-5xl sm:tracking-tight lg:text-6xl">
          Welcome to the {headerPage}
        </h1>
        <p className="mt-6 text-xl text-black max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          ante vel nisl ultricies lacinia. Nullam in diam auctor, elementum
          mauris at, commodo justo.
        </p>
      </div>
    </div>
  );
};

export default PageHeader;