import * as React from 'react';

type LayoutDashProps = {
  children: React.ReactNode;
};

const LayoutDash: React.FC<LayoutDashProps> = ({ children }) => {
  return (
    <div className="flex w-full min-h-screen p-14 bg-mainClr ">
      <main className="flex w-full gap-5">{children}</main>
    </div>
  );
};

export default LayoutDash;
