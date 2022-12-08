import React, {useState} from "react";
import "./followme.css";

// import assets
import edit from "./assets/edit.svg";
import globe from "./assets/globe.svg";

const FollowMe = () => {
    const [editStatus, setEditStatus] = useState(true);
    const [links, setLinks] = useState(['www.linkedin/profile.com','www.facebook.com','www.instagram.com','www.website.com']);
    const [newLink, setNewLink] = useState('');
    const [oldLink, setOldLink] = useState('');


    return (

        
        <div className="followme">
            <img className="menu" onClick={()=>{
                setEditStatus(!editStatus)
            }}src={edit} alt="edit" />
            <div>
                <h4 className="skillsTitle">FOLLOW ME</h4>
            </div>
            {editStatus? 
            <div className="followmeContainer">
                {
                    links.map((skil,ky) => (

                        <div className="personalskillContainer followM" key={ky}>
                            <div className="globeStyle">
                                <img src={globe} alt="globe" />
                            </div>
                            <h4>{skil}</h4>
                        </div>
                    ))
                }
            </div>
            :
            <div className="addfollowme">
                <input placeholder="Paste link to replace" value={oldLink} onChange={event=>setOldLink(event.target.value)}/>
                <input placeholder="Add new link" value={newLink} onChange={event=>setNewLink(event.target.value)}/>
                <button onClick={() => {
                    links.forEach((lnk,i) => {
                        if(String(lnk).toLowerCase() === String(oldLink).toLowerCase()) {
                            let newLinks = links;
                            newLinks[i] = newLink;
                            setLinks(newLinks);
                        }
                    });
                }}>Add Link</button>
            </div>
            }
        </div>
    )
}

export default FollowMe;