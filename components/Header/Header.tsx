import { useState } from 'react';

import Link from 'next/link';

import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
} from 'reactstrap';

import { LoggedInDropdownMenu } from './LoggedInDropdownMenu';
import { LoggedOutDropdownMenu } from './LoggedOutDropdownMenu';

import { useCurrentUser } from '../../lib/hooks';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user] = useCurrentUser();

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{ marginBottom: '10%' }}>
      <Navbar fixed="top" expand="md" dark color="primary">
        <Container>
          <Link href="/" passHref>
            <NavbarBrand>
              The Feeks
            </NavbarBrand>
          </Link>

          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Menu
                </DropdownToggle>
                {
                  user ?
                    <LoggedInDropdownMenu /> : <LoggedOutDropdownMenu />
                }
              </UncontrolledDropdown>
            </Nav>

          </Collapse>
        </Container>
      </Navbar>
    </div>
  )
}