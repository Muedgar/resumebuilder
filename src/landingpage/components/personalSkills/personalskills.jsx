import React, {useState} from "react";
import "./personalskills.css";

// import assets
import edit from "./assets/edit.svg";

const PersonalSkills = () => {
    const [editStatus, setEditStatus] = useState(true);
    const [skills, setSkills] = useState(['Team Work','Communication','Creative','Organisation','Management']);
    const [skill, setSkill] = useState('');
    const [newSkill, setNewSkill] = useState('');


     function handlePersonalLevel(e) {
        e.preventDefault();
        let classNameLevels = document.querySelectorAll(`.${e.target.classList[0]}`);
       
        /*
        {
            commonClass:
            specificClass:
        }
        */
    //    classNameLevels.forEach(div => {
        
    //    });
    for(let i=0;i<classNameLevels.length;i++) {
        let div = classNameLevels[i];
        div.style.backgroundColor = "rgba(199, 199, 199, 0.536)";
    }
    for(let i=0;i<classNameLevels.length;i++) {
        let div = classNameLevels[i];
        if(e.target !== div) {
            
            div.style.backgroundColor = "white";
       
        }else {
            div.style.backgroundColor = "white";
            
            break;
        }
    }
     }

    return (

        
        <div className="personalskills">
            <img className="menu" onClick={()=>{
                setEditStatus(!editStatus)
            }}src={edit} alt="edit" />
            <div>
                <h4 className="skillsTitle">PERSONAL SKILLS</h4>
            </div>
            {editStatus? 
            <div className="personalskillsContainer">
                {
                    skills.map((skil,ky) => (

                        <div className="personalskillContainer" key={ky}>
                            <h4>{skil}</h4>
                            <div className="personalskillLevelContainer pSkills">
                                <div onClick={handlePersonalLevel} className={`personalSkillLevelClass${ky} one personalskillLevel`}></div>
                                <div onClick={handlePersonalLevel} className={`personalSkillLevelClass${ky} two personalskillLevel`}></div>
                                <div onClick={handlePersonalLevel} className={`personalSkillLevelClass${ky} three personalskillLevel`}></div>
                                <div onClick={handlePersonalLevel} className={`personalSkillLevelClass${ky} four personalskillLevel`}></div>
                                <div onClick={handlePersonalLevel} className={`personalSkillLevelClass${ky} five personalskillLevel`}></div>
                            </div>
                        </div>
                    ))
                }
            </div>
            :
            <div className="personaladdSkill">
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

export default PersonalSkills;