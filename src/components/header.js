import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return <div id="nav">
            <Nav bsStyle="pills" activeKey={1} onSelect={() => {}}>
                <NavItem eventKey={1} href="#">Tips & Tricks</NavItem>
                <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
                <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
            </Nav>
        </div>
    }
};

export default Header;