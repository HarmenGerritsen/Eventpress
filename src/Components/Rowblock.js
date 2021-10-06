import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import fe1 from "../Images/FE.png";
import po1 from "../Images/PO.png";
import ai1 from "../Images/AI.png";
import be1 from "../Images/BE.png";
import csc1 from "../Images/CSC.png";
import DiscreteSliderValues from '../Components/slider';

class Rowblock extends React.Component {
    
    render(){
    return(
    
        <div className="rowBlock">
            <Row className="row">
                <Col style={{}}>
                    <a href="#">
                        <img className="fe1" onClick={this.props.handles2} src={fe1} alt=''></img>
                    </a>
                </Col>
                <Col style={{}}>
                    <a href="#">
                        <img className="be1" onClick={this.props.handles2} src={be1} alt=''></img>
                    </a>
                </Col>
                <Col style={{}}>
                    <a href="#">
                        <img className="ai1" onClick={this.props.handles2} src={ai1} alt=''></img>
                    </a>
                </Col>
                <Col style={{}}>
                    <a href="#">
                        <img className="po1" onClick={this.props.handles2} src={po1} alt=''></img>
                    </a>
                </Col>
                <Col style={{}}>
                    <a href="#">
                        <img className="csc1" onClick={this.props.handles2} src={csc1} alt=''></img>
                    </a>
                </Col>
            </Row>
            <Row className="row">
                <Col style={{}}>
                    <a href="#">
                        <img className="fe1" onClick={this.props.handles2} src={fe1} alt=''></img>
                    </a>
                </Col>
                <Col style={{}}>
                    <a href="#">
                        <img className="be1" onClick={this.props.handles2} src={be1} alt=''></img>
                    </a>
                </Col>
                <Col style={{}}>
                    <a href="#">
                        <img className="ai1" onClick={this.props.handles2} src={ai1} alt=''></img>
                    </a>
                </Col>
                <Col style={{}}>
                    <a href="#">
                        <img className="po1" onClick={this.props.handles2} src={po1} alt=''></img>
                    </a>
                </Col>
                <Col style={{}}>
                    <a href="#">
                        <img className="csc1" onClick={this.props.handles2} src={csc1} alt=''></img>
                    </a>
                </Col>
            </Row>
            <Row className="row">
                <Col style={{}}>
                    <a href="#">
                        <img className="fe1" onClick={this.props.handles2} src={fe1} alt=''></img>
                    </a>
                </Col>
                <Col style={{}}>
                    <a href="#">
                        <img className="be1" onClick={this.props.handles2} src={be1} alt=''></img>
                    </a>
                </Col>
                <Col style={{}}>
                    <a href="#">
                        <img className="ai1" onClick={this.props.handles2} src={ai1} alt=''></img>
                    </a>
                </Col>
                <Col style={{}}>
                    <a href="#">
                        <img className="po1" onClick={this.props.handles2} src={po1} alt=''></img>
                    </a>
                </Col>
                <Col style={{}}>
                    <a href="#">
                        <img className="csc1" onClick={this.props.handles2} src={csc1} alt=''></img>
                    </a>
                </Col>
            </Row>
            <div className="slider"><DiscreteSliderValues /></div>
        </div>
        
    )
    }
}
    
export default Rowblock;


