import React from "react";

import Container from "@eigi/bluebird-ui/dist/components/Container";
import Column from "@eigi/bluebird-ui/dist/components/Column";
import Text from "@eigi/bluebird-ui/dist/components/Text";
import Grid from "@eigi/bluebird-ui/dist/components/Grid";
import Button from "@eigi/bluebird-ui/dist/components/Button";

import PlayerList from "../Components/PlayerList";

function Player() {
  const resetPlayerPoints = () => {};
  const pingSlackers = () => {};
  const showPoints = () => {};

  return (
    <Grid xsJustify="center" xs={1} sm={5} lg={7} mt="sm">
      <Column xsStart={1} smStart={2} smSpan={3} lgStart={3} lgSpan={3}>
        <Container>
          <Text type="h3" position="center">
            The points entered by the players will populate below
          </Text>
          <Grid xs={3}>
            <Button onClick={() => resetPlayerPoints()}>Reset Points</Button>
            <Button onClick={() => pingSlackers()}>Ping Slackers</Button>
            <Button onClick={() => showPoints()}>Show Points</Button>
          </Grid>
          <PlayerList />
        </Container>
      </Column>
    </Grid>
  );
}

export default Player;
