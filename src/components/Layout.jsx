import React from "react";
import styled from "styled-components";

const LaySt = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;


const Layout = ({ children }) => {
  return <LaySt>{children}</LaySt>;
};

export default Layout;

