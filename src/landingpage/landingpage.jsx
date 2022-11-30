import React from "react";
import "./landingpage.css";

// import components

import ProfileImage from "./components/profileImage/profileimage";
import Address from "./components/address/address";
import Introduction from "./components/introduction/introduction";
import ProSkills from "./components/proSkills/proskills";
import PersonalSkills from "./components/personalSkills/personalskills";

function LandingPage() {
    return(
        <div>
            <ProfileImage />
            <Address />
            <Introduction />
            <ProSkills />
            <PersonalSkills />
        </div>
    )
}

export default LandingPage;