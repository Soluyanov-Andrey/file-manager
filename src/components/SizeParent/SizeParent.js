import React from "react";
import SizeBlok from "./SizeBlok"
import SizeTitle from "./SizeTitle"
const SizeParent = () => {
    return (
        <div id="SizeParent">
            <SizeTitle/>
            <SizeBlok/>
        </div>
    );
};

export default SizeParent;