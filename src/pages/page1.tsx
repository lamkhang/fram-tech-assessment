import React, { useState } from 'react';
import { Button } from 'antd';

const Page1 = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div style={{marginTop: '20px'}}>
      <span>counter: {counter}</span>
      <br />
      <br />
      <br />
      <Button style={{marginRight: '20px'}} onClick={() => setCounter(counter + 1)}>increase</Button>
      <Button type="dashed" onClick={() => setCounter(0)}>Reset</Button>
    </div>
  );
};

export default Page1;