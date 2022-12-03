import React from "react";



import "./landingpage.css";

// import components

import ProfileImage from "./components/profileImage/profileimage";
import Address from "./components/address/address";
import Introduction from "./components/introduction/introduction";
import ProSkills from "./components/proSkills/proskills";
import PersonalSkills from "./components/personalSkills/personalskills";
import WorkExperience from "./components/workExperience/workexperience";
import Education from "./components/education/education";

// import styles
export const LandingPage = React.forwardRef((props, ref) => {

    
    return(
        <div ref={ref}>
            <div id="cvId" className="cv">
            <div className="rightPart">
                <div className="profileandaddress">
                    <ProfileImage />
                    <Address />
                </div>
                <div>
                    <WorkExperience />
                    <Education />
                </div>
                <div>
                    
                </div>
                <div>
                    
                </div>
            </div>
            
            <aside className="leftPart">
                <Introduction />
                <ProSkills />
                <PersonalSkills />
            </aside>
            </div>
        
        </div>
    )
});

export default LandingPage;