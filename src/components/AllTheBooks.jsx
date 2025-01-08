import { Component } from 'react';
import { Card, Container, ListGroup } from 'react-bootstrap';
import fantasyBooks from '../data/fantasy.json';

class AllTheBooks extends Component {
  state = {
    activeBook: fantasyBooks[0],
  };

  render() {
    return (
      <Container
        fluid={true}
        className='d-flex flex-wrap justify-content-center mt-5'
      >
        {fantasyBooks.map((book, i) => {
          return (
            <Card style={{ width: '15rem' }} key={i} className='mx-2 mb-2'>
              <Card.Img variant='top' src={book.img} className='h-100' />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>${book.price}</Card.Text>
              </Card.Body>
              <ListGroup className='list-group-flush'>
                <ListGroup.Item>category: {book.category}</ListGroup.Item>
              </ListGroup>
            </Card>
          );
        })}
      </Container>
    );
  }
}

export default AllTheBooks;
