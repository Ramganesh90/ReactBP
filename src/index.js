import React from "react"
import { render } from 'react-dom';

// eslint-disable-next-line react/prop-types
const Greetings = (props) => <h1><i>{props.message}</i></h1>;


function Hi() {
    return <Greetings message="Buddy BoilerPlate is working in React" />;
}


render(<Hi />, document.getElementById("app"));