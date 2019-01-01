import React from "react";
import PropTypes from 'prop-types';
import Rooting from '../rooting';
import NavLink from 'react-router-dom';
import {
  Container,
  Dropdown,
  Menu
} from 'semantic-ui-react';

class App extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  render() {
    return (
      <Container>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as={NavLink} to='/home' header>
              FugQueue
            </Menu.Item>
            <Menu.Item as={NavLink} to='/home'>Home</Menu.Item>
            <Menu.Item as={NavLink} to='/thing'>Not Found</Menu.Item>
            <Dropdown item simple text='Dropdown'>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Header Item</Dropdown.Header>
                <Dropdown.Item>
                  <i className='dropdown icon' />
                  <span className='text'>Submenu</span>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
        <Container text style={{ marginTop: '3em' }}>
          <Rooting />
        </Container>
      </Container>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
