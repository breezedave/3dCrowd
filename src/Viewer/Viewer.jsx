import React, { Component, Fragment } from "react";
import ViewerStyled from "./Viewer.styled";

class Viewer extends Component {
    render() {
        const {props} = this;
        const transparentPic = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mlYpURKwg6pChOlkQFXGUKhbBQmkrtOpgcumP0KQhSXFxFFwLDv4sVh1cnHV1cBUEwR8QJ0cnRRcp8buk0CLGO457eO97X+6+A4R6malmYBxQNctIxWNiNrciBl8RoNmPIfRKzNQT6YUMPMfXPXx8v4vyLO+6P0e3kjcZ4BOJZ5luWMTrxNObls55nzjMSpJCfE48ZtAFiR+5Lrv8xrnosMAzw0YmNUccJhaLbSy3MSsZKvEUcURRNcoXsi4rnLc4q+Uqa96TvzCU15bTXKc1jDgWkUASImRUsYEyLERp10gxkaLzmId/0PEnySWTawOMHPOoQIXk+MH/4HdvzcLkhJsUigEdL7b9MQIEd4FGzba/j227cQL4n4ErreWv1IGZT9JrLS1yBPRsAxfXLU3eAy53gIEnXTIkR/LTEgoF4P2MvikH9N0CXatu35rnOH0AMtSrpRvg4BAYLVL2mse7O9v79m9Ns38/QJdyk4rQcyEAAAAGYktHRADEAJUAGA1iFykAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfkBAQVMRj0PzzcAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAA1JREFUCNdjODJVggEABQQBctzRNzYAAAAASUVORK5CYII=`;


        let viewerComponent;

        if(!props.viewerPath) {
            viewerComponent = (<img src={transparentPic} />)
        } else {
            if(props.viewerPath.video) viewerComponent = (<video src={props.viewerPath.video} loop={true} autoPlay={true} muted={true} />)
            if(!props.viewerPath.video) viewerComponent = (<img src={props.viewerPath.image} />)
        }

        return (
            <ViewerStyled {...props}>
                {viewerComponent}
            </ViewerStyled>
        );
    }
}

export default Viewer;
