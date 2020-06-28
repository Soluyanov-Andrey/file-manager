import React from "react";
import NameParent from './Line/Name/NameParent';
import DataParent from './Line/Data/DataParent';
import TypeParent from './Line/Type/TypeParent';
import SizeParent from './Line/Size/SizeParent';

const TableFiles = () => {
    return (
        <div id="overflow">
        <div id="TableFiles">
            <NameParent/>
            <DataParent/>
            <TypeParent/>
            <SizeParent/>
        </div>
        </div>
    );
};

export default TableFiles;