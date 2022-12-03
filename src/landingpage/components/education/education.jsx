import React, {useState} from "react";

import "./education.css";

import edit from "./assets/edit.svg";
import briefcase from "./assets/briefcase.svg";
import delet from "./assets/delete.svg";

function Education () {
    const [editStatus,setEditStatus] = useState(true);

    const [education, setEducation] = useState([ {year: '2015', jobTitle: 'Hr Manager', description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'}]);
/*

       
    */
    // add experience
    const [year, setYear] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [description, setDescription] = useState('');
    return(
        <div className="educationContainer">
            <img className="menu" onClick={()=>{
                setEditStatus(!editStatus)
            }}src={edit} alt="edit" />
            <div className="educationTitle">
                <div className="experienceLogo">
                    <img src={briefcase} alt="briefcase" />
                </div>
                <h1>
                    EDUCATION
                </h1>
            </div>
            {
                !editStatus?
                <div className="addEducation">
                    <input type="text" value={year} onChange={e=>setYear(e.target.value)} placeholder="year" />
                    <input type="text" value={jobTitle} onChange={e=>setJobTitle(e.target.value)} placeholder="job title" />
                    <textarea type="text" value={description} onChange={e=>setDescription(e.target.value)} placeholder="describe experience"></textarea>
                    <input type="button" onClick={()=> {
                        let obj = {
                            year,
                            jobTitle,
                            description
                        };
                        
                        if(education.length<1) {
                            let newExperiences = education;
                            newExperiences.push(obj);
                            setEducation(newExperiences);
                            setYear('');
                            setJobTitle('');
                            setDescription('');
                        }
                    }} value="add" />
                </div>
                :
                <>
                {
                    education.length>0 ?
                    <>
                    {
                        education.map((workExperience,i)=> (
                            <div className="education" id={`${i}`} key={i}>
                                <img className="menu" onClick={e=>{
                                    let deleteWithKey = e.target.parentNode.id;
                console.log(deleteWithKey);
                let dlExperiences = education;

                let setE = [];
                for(let i=0;i<dlExperiences.length;i++) {
                    if(String(i)===String(deleteWithKey)) {
                        continue;
                    }else {
                        setE.push(dlExperiences[i]);
                    }
                    
                }
                setEducation(setE);
                                    
            }}src={delet} alt="delete" />
                                            <div className="experienceYearTitle">
                                                <h3>{workExperience.year}</h3>
                                                <div></div>
                                                <h2>{workExperience.jobTitle}</h2>
                                            </div>
                                            <div className="experienceDescription">
                                                <p>{workExperience.description}</p>
                                            </div>
                                        </div>
                                            ))
                    }
                    </>
                    :
                    <>
                    {
                    <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>Add at least one experience</div>
                    }</>
                
            }
                </>
            }
            
            
        </div>
    );
}

export default Education;