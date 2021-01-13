import React from 'react'
import { Container } from "react-bootstrap";

class Head extends React.Component {
    state={className:'up', siji:'loro'};
    handleScroll=()=>{
        if (window.pageYOffset > 250) {
              this.setState({ className: "bot", siji:'telu' });   
            }
        else{
              this.setState({ className: "up", siji:'loro' });
            }
        }
        componentDidMount(){
            window.addEventListener("scroll", this.handleScroll);
          }
          componentWillUnmount() {
            window.removeEventListener("scroll", this.handleScroll);
          }
    render() {
        return (
            <>
            <Container fluid className='head-box'>
                <h4 className={this.state.className} >Donad</h4>
            </Container>
            <Container fluid className='bot-box'>
                <a href='/'>
                <h5 className={this.state.siji}>Logo</h5></a>
            </Container>
            </>
        )
    }
}
export default Head;