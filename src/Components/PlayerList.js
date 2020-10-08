import React from "react";

import Column from "@eigi/bluebird-ui/dist/components/Column";
import Text from "@eigi/bluebird-ui/dist/components/Text";
import Grid from "@eigi/bluebird-ui/dist/components/Grid";

import "../styles/Common.scss";

function PlayerList() {
  const people = [
    { username: "Taylor", point_guess: 8 },
    { username: "Jake", point_guess: 3 },
    { username: "Todd", point_guess: null },
    { username: "Jasmine", point_guess: 5 },
  ];
  return (
    <Grid xs={5} mt="md" mb="md">
      {people.map((player, index) => (
          [<Column key={`playerList:username:${index}`} span={4}>
            <Text>{player.username}</Text>
          </Column>,
          <Column key={`playerList:point_guess:${index}`} span={1}>
            <Text position="right">{player.point_guess == null ? "-" : player.point_guess}</Text>
          </Column>]
      ))}
    </Grid>
  );
}

export default PlayerList;
