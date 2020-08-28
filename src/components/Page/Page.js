import React, {Component} from "react";
import TableFiles from "./TableFiles/TableFiles";
import TreeMenu from "./TreeMenu/TreeMenu";

class Page extends Component {
    constructor() {
        super();
    }

    render() {
        // console.log(this.state);
        return (
            <React.Fragment>
                <TreeMenu/>
                <TableFiles/>

            </React.Fragment>
        );
    }
};

export default Page;