import React, {useState} from "react";
import "./proskills.css";

// import assets
import edit from "./assets/edit.svg";

const ProSkills = () => {
    const [editStatus, setEditStatus] = useState(true);
    const [skills, setSkills] = useState(['FIGMA','ILLUSTRATOR','INDESIGN','PHOTOSHOP','HTML/CSS','MS-WORD']);
    const [skill, setSkill] = useState('');
    const [currentId, setCurrentId] = useState('');
    
    

    function handleSkillLevel(e) {
        e.preventDefault();
        var x = e.clientX;
        if(!currentId) {
            return;
        }
        let childElement = document.getElementById(currentId);
        console.log("logging", currentId);
        let newX = x - 10;
        if(newX>0 && newX<261) {
        
            childElement.style.width = newX+"px";
        
        }
        setCurrentId('');
      }

     

    return (

        
        <div className="proskills">
            <img className="menu" onClick={()=>{
                setEditStatus(!editStatus)
            }}src={edit} alt="edit" />
            <div>
                <h4 className="skillsTitle">PRO SKILLS</h4>
            </div>
            {editStatus? 
            <div className="skillsContainer">
                {
                    skills.map((skil,ky) => (

                        <div className="skillContainer" key={ky}>
                            <h4>{skil}</h4>
                            <div onClick={(e) => {
                                setCurrentId(`id${ky}`);
                                handleSkillLevel(e);
                            }}  className="skillLevelContainer">

                                <div id={`id${ky}`} className="skillLevel"></div>
                            </div>
                        </div>
                    ))
                }
            </div>
            :
            <div className="addSkill">
                <input value={skill} onChange={event=>setSkill(event.target.value)}/>
                <button onClick={() => {
                    if(!skill) {
                        return;
                    }
                    setSkills([...skills,skill]);
                }}>Add Skill</button>
            </div>
            }
        </div>
    )
}

export default ProSkills;