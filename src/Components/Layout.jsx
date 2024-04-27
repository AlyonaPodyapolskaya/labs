import React from "react";
import Footer from "./Footer";
import Content from "./Content";

const Layout = ({ children }) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F8F8FF' }}>
        <Content>{children}</Content>
        <Footer />
      </div>
    );
  };

export default Layout;