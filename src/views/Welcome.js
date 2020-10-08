import React from "react";
import { Link } from "react-router-dom";

import Container from "@eigi/bluebird-ui/dist/components/Container";
import Column from "@eigi/bluebird-ui/dist/components/Column";
import Button from "@eigi/bluebird-ui/dist/components/Button";
import Text from "@eigi/bluebird-ui/dist/components/Text";
import Grid from "@eigi/bluebird-ui/dist/components/Grid";

import "../styles/Common.scss";

function Welcome() {
  const goToOtherPlace = () => {};
  return (
    <Grid xsJustify="center" xs={1} sm={5} lg={7} mt="sm">
      <Column xsStart={1} smStart={2} smSpan={3} lgStart={3} lgSpan={3}>
        <Container align="center">
          <Text type="h1" position="center">
            Hey there! Welcome to the best pointing poker ever created!
          </Text>
          <Text type="p" position="center">
            What do you want to do?
          </Text>
          <Link className="Center" to="/create_room">
            <Button onClick={goToOtherPlace()}>Start a session</Button>
          </Link>
          <Link className="Center" to="/login">
            <Button onClick={goToOtherPlace()}>Join a session</Button>
          </Link>
        </Container>
      </Column>
    </Grid>
  );
}

export default Welcome;
