import React, { useState } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';

const ShoppingList = () => {

  const [listItems, setListItems] = useState({
    items: [
      { id: uuidv4(), name: 'Eggs' },
      { id: uuidv4(), name: 'Milk' },
      { id: uuidv4(), name: 'Steak' },
      { id: uuidv4(), name: 'Water' },
    ]
  })

  const handleClick = () => {
    const name = prompt('Enter item');
    if (name) {
      setListItems({ items: [...listItems.items, { id: uuidv4(), name: name }] })
    }
  }

  return (
    <Container>
      <Button
        id='add-item'
        color='dark'
        style={{ marginBottom: '2rem' }}
        onClick={handleClick}
      >Add item
      </Button>
    </Container>
  )

}

export default ShoppingList;