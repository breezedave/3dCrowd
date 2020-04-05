import React, {Fragment, Component} from "react";
import Gallery from "../Gallery/Gallery";

class Page extends Component {
    state={
        photoSize: 0,
    }

    constructor(props) {
        super(props);
        const self = this;

        document.body.onresize = () => {
            self.resize();
        }

        window.addEventListener("orientationchange", () => {
            self.resize();
        });
    }

    componentDidMount() {
        this.resize();
    }

    resize() {
        this.setState({photoSize: screen.availHeight * screen.availWidth < 400000? 40: 60});
        this.setState({maxWidth: screen.availWidth * .9})
    }

    render() {
        const {photoSize, maxWidth} = this.state;

        return (
            <Fragment>
                <div className="instructions">
                    <h1>A COMMUNITY DRIVEN PRODUCT</h1>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScNRsoECLifQX_j34ug8FHrFj7qbzHs5UX2pridDP7lKG3oXg/viewform" target="_blank">SIGN UP AS A 3DCROWD VOLUNTEER</a>
                    <p>3D PRINTERS SAVE LIVES</p>
                    <p>DO YOU WANT TO HELP PRODUCE FACE SHIELDS FOR FRONTLINE STAFF?</p>
                </div>
                <Gallery
                    photoSize={photoSize}
                    maxWidth={maxWidth}
                    gapSize={6}
                    minViewerWidth={6}
                    minViewerHeight={3}
                />
            </Fragment>
        );
    }
}


export default Page;
