import React from "react";

import Container from "@eigi/bluebird-ui/dist/components/Container";
import Column from "@eigi/bluebird-ui/dist/components/Column";
import Text from "@eigi/bluebird-ui/dist/components/Text";
import Grid from "@eigi/bluebird-ui/dist/components/Grid";
import Button from "@eigi/bluebird-ui/dist/components/Button";

function Player() {
  const buttonOptions = [1, 2, 3, 5, 8, 13];

  const submitPoints = (val) => {
    console.log(val.pointValue);
  };
  return (
    <div>
      <Grid xsJustify="center" xs={3} mt="sm">
        <Column xsStart={2}>
          <Container>
            <Text type="h3" position="center">
              Enter your points for this story.
            </Text>
            <Grid xs={3}>
              {buttonOptions.map((pointValue, index) => (
                <Button
                  key={index}
                  onClick={() => submitPoints({ pointValue })}
                >
                  {pointValue}
                </Button>
              ))}
            </Grid>
          </Container>
        </Column>
      </Grid>
    </div>
  );
}

export default Player;
