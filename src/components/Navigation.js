import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./css/Navigation.css"

const sort =  [
    {
        name: "all",      
        text: "전체보기"
    },
    {
        name: "minimum_rating",
        text: "평점순"
    },
    {
        name: "year",
        text: "년도순"
    }
]

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand><Link to="/"><strong>Movie App</strong></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <NavDropdown title="분류" id="basic-nav-dropdown">
                        {sort.map((c) => (
                            <NavDropdown.Item key={c.name} to={c.name === 'all' ? '/' : `/${c.name}`} end> {c.text} </NavDropdown.Item>
                         ))}
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default Navigation;