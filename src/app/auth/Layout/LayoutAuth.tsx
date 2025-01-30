import * as React from 'react';

type LayoutAuthProps = {
  children: React.ReactNode;
};

const LayoutAuth: React.FC<LayoutAuthProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center bg-mainClr">
      <div className="flex">{children}</div>
    </div>
  );
};

export default LayoutAuth;
