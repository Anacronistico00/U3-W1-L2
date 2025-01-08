import { Container, Row, Col } from 'react-bootstrap';

const MyFooter = function () {
  return (
    <footer>
      <Container fluid={true} className='bg-dark'>
        <Row className='text-white'>
          <Col>1</Col>
          <Col>2</Col>
          <Col>3</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
