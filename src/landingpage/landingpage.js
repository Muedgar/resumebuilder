import React from "react";
import "./landingpage.css";

// import components

import ProfileImage from "./components/profileImage/profileimage";
import Address from "./components/address/address";

function LandingPage() {
    return(
        <div>
            <ProfileImage />
            <Address />
        </div>
    )
}

export default LandingPage;