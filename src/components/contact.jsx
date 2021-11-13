import React from 'react';
import {Outlet} from "react-router-dom"
class Contact extends React.Component {
    render() { 
        return <div> hi from conatc page <Outlet/></div>;
    }
}
 
export default Contact;