import React from "react"
import { render } from 'react-dom';

function Hi() {
    return <h1><i>Buddy BoilerPlate is working in React</i></h1>
}


render(<Hi />, document.getElementById("app"));