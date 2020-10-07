import React from "react";

import Input from '@eigi/bluebird-ui/dist/components/Input';
import Button from '@eigi/bluebird-ui/dist/components/Button';

function Welcome() {
  const submitName = () => {
    // submit name that is in the input box to the webhook or something here
  }
  return (
    <div>
        Hey there! Welcome to the best pointing poker ever created!

        <Input placeholder="Placeholder" inputId="input-text" onChange={() => {}} />
        <Button onClick={submitName()}>Primary</Button>
    </div>
  );
}

export default Welcome;
