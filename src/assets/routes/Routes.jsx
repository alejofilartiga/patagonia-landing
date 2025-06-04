import {Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Error from "../components/Pages/Error/Error";

function Routes() {
    return (
        <ReactDomRoutes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
        </ReactDomRoutes>
    )
}

export default Routes;