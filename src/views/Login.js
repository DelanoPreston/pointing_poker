import React, { useState } from "react";
import { Link } from "react-router-dom";

import Input from "@eigi/bluebird-ui/dist/components/Input";
import Button from "@eigi/bluebird-ui/dist/components/Button";
import Text from "@eigi/bluebird-ui/dist/components/Text";
import Grid from "@eigi/bluebird-ui/dist/components/Grid";
import Column from "@eigi/bluebird-ui/dist/components/Column";
import Container from "@eigi/bluebird-ui/dist/components/Container";
import Dropdown from "@eigi/bluebird-ui/dist/components/Dropdown";

import "../styles/Common.scss";

function Login() {
  const [selectedRoom, setSelectedRoom] = useState("");
  const [username, setUsername] = useState("");
  const openRooms = ["Turtles", "Whales", "Mountain", "Team1"];
  const submitName = () => {
    // submit name that is in the input box to the webhook or something here
  };
  const hasInputData = () => {
    if (selectedRoom !== "" && username !== "") {
      return true;
    }
    console.log(username);
    return false;
  };
  return (
    <Grid xsJustify="center" xs={1} sm={5} lg={7} mt="sm">
      <Column xsStart={1} smStart={2} smSpan={3} lgStart={3} lgSpan={3}>
        <Container>
          <Text type="h3" position="center">
            Please enter the name you wish to show in your pointing poker
            session
          </Text>
          <Input
            placeholder="Placeholder"
            inputId="input-text"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <Dropdown text="Select a Room to join">
            <Dropdown.Menu>
              {openRooms.map((room, index) => (
                <Dropdown.Item
                  key={index}
                  text={room}
                  onClick={() => setSelectedRoom({ room })}
                />
              ))}
            </Dropdown.Menu>
          </Dropdown>
          {hasInputData() && (
            <Link className="Center" to={`/room/${selectedRoom.room}/player/${username}`}>
              <Button onClick={submitName()}>Join</Button>
            </Link>
          )}
          {!hasInputData() && (
            <div className="Center">
              <Button disabled>Join</Button>
            </div>
          )}
        </Container>
      </Column>
    </Grid>
  );
}

export default Login;
