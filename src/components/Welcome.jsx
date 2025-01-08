import { Alert } from 'react-bootstrap';

function Welcome() {
  return (
    <Alert variant='dark' className='m-0 p-0'>
      <Alert.Heading className='mt-1'>Welcome to My Library</Alert.Heading>
      <p className='mb-0'>This is a list of my favorites books!</p>
    </Alert>
  );
}

export default Welcome;
