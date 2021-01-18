import { Col, Container, Row } from "react-bootstrap";

function Contact(){
    return(
        <Container fluid className='contact-box'>
            <Row>
                <Col xs={12} md={6} className='contact' >
                    <h4>| Temukan kami |</h4>
                    <h5>Facebook/@DonaD</h5>
                    <h5>Instagram/@DonaD</h5>
                    <a href='https://wa.me/6285774456834?text=Pengem+Donat%0D%0ANama+Anda%3A+'>
                    <h5>Whatsapp</h5>
                    </a>
                    
                </Col>
                <Col xs={12} md={6} className='contact' >
                    <h4>| Design oleh |</h4>
                    <h5>www.ReaLine.my.id</h5>
                </Col>
            </Row>
        </Container>
    )
}
export default Contact;