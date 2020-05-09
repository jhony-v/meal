import React from 'react';
import Container from 'shared/styled/Container';
import FlexContainer from "shared/styled/FlexContainer";
import Avatar from 'shared/styled/Avatar';

function HeaderToolbarMain() {
  return (
    <Container variantColor="layout" >
      <FlexContainer align="center" justify="space-between">
        <Avatar variant="primary" color="white">S</Avatar>
      </FlexContainer>
    </Container>
  )
}

export default HeaderToolbarMain;
