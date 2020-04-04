import React, { Component, Fragment } from "react";
import PhotoStyled from "./Photo.styled";

class Photo extends Component {
    state = {};

    constructor(props) {
        super(props);
    }

    mouseOver = () => {
        this.setState({mouseOver: true});
        this.props.updateViewer(this.props.myMedia);
    }

    mouseOut = () => {
        this.setState({mouseOver: false});
    }


    render() {
        const {props, state} = this;

        return (
            <PhotoStyled {...props}>
                <img
                    className={`image ${state.mouseOver? "mouseOver": ""}`}
                    src={props.myMedia? props.myMedia.image : "#"}
                    onMouseOver={this.mouseOver}
                    onMouseOut={this.mouseOut}
                    onClick={this.mouseOver}
                />
            </PhotoStyled>
        );
    }
}

export default Photo;
