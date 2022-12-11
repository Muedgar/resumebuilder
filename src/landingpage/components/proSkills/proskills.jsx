import React, {useState} from "react";
import "./proskills.css";

// import assets
import edit from "./assets/edit.svg";

const ProSkills = () => {
    const [editStatus, setEditStatus] = useState(true);
    const [skills, setSkills] = useState(['FIGMA','ILLUSTRATOR','INDESIGN','PHOTOSHOP','HTML/CSS','MS-WORD']);
    const [skill, setSkill] = useState('');
    const [newSkill, setNewSkill] = useState('');
    
    

   
     

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
                                e.preventDefault();
                                let settingCurrentId = `proSkillId${ky}`;
                                console.log("set current id", settingCurrentId);
                                
                                
        var x = e.clientX;
       
        let childElement = document.getElementById(settingCurrentId);
        
        let newX = x - 839;
        if(newX>0 && newX<260) {
        
            childElement.style.width = newX+"px";
        
        }
                            }}  className="skillLevelContainer">

                                <div id={`proSkillId${ky}`} className="skillLevel"></div>
                            </div>
                        </div>
                    ))
                }
            </div>
            :
            <div className="addSkill">
                <input placeholder="Replace Skill Name" value={skill} onChange={event=>setSkill(event.target.value)}/>
                <input placeholder="New Skill" value={newSkill} onChange={event=>setNewSkill(event.target.value)}/>
                <button onClick={() => {
                    if(!skill) {
                        return;
                    }
                    skills.forEach((skil,i)=> {
                        if(skil.toUpperCase() === skill.toUpperCase()) {
                            let newskills = skills;
                            newskills[i] = newSkill;
                            setSkills(newskills);
                        }
                    });
                }}>Edit Skill</button>
            </div>
            }
        </div>
    )
}

export default ProSkills;