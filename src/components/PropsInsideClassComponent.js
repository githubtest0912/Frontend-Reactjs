import React from "react";
class PropsInsideClassComponent extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.email}</h1>
            </div>
        )
    }

}

export default PropsInsideClassComponent