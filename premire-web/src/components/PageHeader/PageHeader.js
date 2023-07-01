import React from 'react';

const PageHeader = ({headerPage}) => {
  return (
    <div className="bg-primary-bg bg-cover">
      <div className="max-w-7xl mx-[100px] mx-auto py-12 px-5 sm:px-6 lg:px-8">
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