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

  const handleAddClick = () => {
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
        onClick={handleAddClick}
      >Add item
      </Button>
      <ListGroup>
        <TransitionGroup className='shopping-list' id='shopping-list'>
          {listItems.items.map(({ id, name }) => (
            <CSSTransition key={id} timeout={500} classNames='fade'>
              <ListGroupItem id='shopping-list-item'>
                <Button
                  id='remove-item'
                  style={{ marginRight: '0.5rem' }}
                  className='remove-btn'
                  color='danger'
                  size='sm'
                  onClick={() => {
                    setListItems({ items: listItems.items.filter(item => item.id !== id) })
                  }}
                >
                  &times;
                </Button>
                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  )

}

export default ShoppingList;