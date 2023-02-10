import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const Layout = () => {
  return (
    <div className="h-screen w-screen flex justify-between p-4">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default Layout;
