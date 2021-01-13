import { Button, Container } from 'react-bootstrap'

function Hero(){
    return(
        <Container fluid className='hero'>
            <h1 className='display-text-1 hero-text1'>Donat enak</h1>
            <h1 className='display-text-1 hero-text2'>Harga sahabat</h1>
            <Button variant='warning' size='lg' className='display-text-2'>PESAN</Button>
            <div className='down-box'>
            <h1 className='down'>^</h1>
            </div>
        </Container>
    )
}
export default Hero;