import React from "react";
import NameParent from './NameParent/NameParent';
import DataParent from './DataParent/DataParent';
import TypeParent from './TypeParent/TypeParent';
import SizeParent from './SizeParent/SizeParent';

const TableFiles = () => {
    return (
        <div id="TableFiles">
            <NameParent/>
            <DataParent/>
            <TypeParent/>
            <SizeParent/>

        </div>
    );
};

export default TableFiles;