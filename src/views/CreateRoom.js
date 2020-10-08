import React, { useState } from "react";
import { Link } from "react-router-dom";

import Input from "@eigi/bluebird-ui/dist/components/Input";
import Button from "@eigi/bluebird-ui/dist/components/Button";
import Text from "@eigi/bluebird-ui/dist/components/Text";
import Grid from "@eigi/bluebird-ui/dist/components/Grid";
import Column from "@eigi/bluebird-ui/dist/components/Column";
import Container from "@eigi/bluebird-ui/dist/components/Container";

import "../styles/Welcome.scss";
import "../styles/Common.scss";

function CreateRoom() {
//   const standardArray = [1, 2, 3, 5, 8, 13, 21];
  const [roomName, setroomName] = useState("");
//   const [pointArray, setPointArray] = useState(standardArray);
  const submitName = () => {
    // submit name that is in the input box to the webhook or something here
  };
  const hasInputData = () => {
    if (roomName !== "") {
      return true;
    }
    return false;
  };
  return (
    <Grid xs={3} mt="sm">
      <Column xsStart={2}>
        <Container>
          <Text type="h3" position="center">
            Please enter the name you wish to room to be called.
          </Text>
          <Input
            placeholder="Best Room Ever"
            inputId="input-text"
            onChange={(event) => {
              setroomName(event.target.value);
            }}
          />
          {hasInputData() && (
            <Link to={`/room/${roomName}/observer`}>
              <Button onClick={submitName()}>Join</Button>
            </Link>
          )}
          {!hasInputData() && <div><Button disabled>Join</Button></div>}
        </Container>
      </Column>
    </Grid>
  );
}

export default CreateRoom;
