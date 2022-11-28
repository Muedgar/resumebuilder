import React from "react";
import "./landingpage.css";

// import components

import ProfileImage from "./components/profileImage/profileimage";
import Address from "./components/address/address";
import Introduction from "./components/introduction/introduction";
import ProSkills from "./components/proSkills/proskills";

function LandingPage() {
    return(
        <div>
            <ProfileImage />
            <Address />
            <Introduction />
            <ProSkills />
        </div>
    )
}

export default LandingPage;