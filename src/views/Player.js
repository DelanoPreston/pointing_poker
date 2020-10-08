import React from "react";

import Container from "@eigi/bluebird-ui/dist/components/Container";
import Column from "@eigi/bluebird-ui/dist/components/Column";
import Text from "@eigi/bluebird-ui/dist/components/Text";
import Grid from "@eigi/bluebird-ui/dist/components/Grid";
import Button from "@eigi/bluebird-ui/dist/components/Button";

import PlayerList from "../Components/PlayerList";

function Player() {
  const buttonOptions = [1, 2, 3, 5, 8, 13];

  const submitPoints = (val) => {
    console.log(val.pointValue);
  };
  return (
    <Grid xsJustify="center" xs={1} sm={5} lg={7} mt="sm">
      <Column xsStart={1} smStart={2} smSpan={3} lgStart={3} lgSpan={3}>
        <Container>
          <Text type="h3" position="center">
            Enter your points for this story.
          </Text>
          <Grid xs={3}>
            {buttonOptions.map((pointValue, index) => (
              <Button key={index} onClick={() => submitPoints({ pointValue })}>
                {pointValue}
              </Button>
            ))}
          </Grid>
          <PlayerList />
        </Container>
      </Column>
    </Grid>
  );
}

export default Player;
