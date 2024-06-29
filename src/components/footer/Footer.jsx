import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function Footer() {
    return (
        <Navbar bg="light" className="mt-auto">
            <Container className="justify-content-center">
                <Navbar.Text>
                    © Portal Rh 2024.
                </Navbar.Text>
            </Container>
        </Navbar>
    );
}