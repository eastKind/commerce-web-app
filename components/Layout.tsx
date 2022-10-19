import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <StyledDiv>{children}</StyledDiv>;
}

const StyledDiv = styled.div``;

export default Layout;
