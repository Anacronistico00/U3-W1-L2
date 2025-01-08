import { Alert, Button } from 'react-bootstrap';
import { useState } from 'react';

function Welcome() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert
        variant='dark'
        onClose={() => setShow(false)}
        dismissible
        className='text-center px-0 py-4 mb-0'
      >
        <hr />
        <Alert.Heading className='fs-1 fw-bolder text-black'>
          Welcome To My Library!
        </Alert.Heading>
        <p>Feel free to search and inform about any book in this list</p>
        <hr />
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default Welcome;
