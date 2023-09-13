import React, { PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {
  hasRecentlyCards?: boolean;
  isHideBreadCrumbs?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div
        style={{ maxWidth: "800px", marginRight: "auto", marginLeft: "auto" }}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
