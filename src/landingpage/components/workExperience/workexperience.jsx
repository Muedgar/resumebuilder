import React, {useState} from "react";

import "./workexperience.css";

import edit from "./assets/edit.svg";
import briefcase from "./assets/briefcase.svg";
import delet from "./assets/delete.svg";

function WorkExperience () {
    const [editStatus,setEditStatus] = useState(true);

    const [workExperiences, setWorkExperiences] = useState([ {year: '2015', jobTitle: 'Hr Manager', location: 'Bethany Services, Grand Rapids MI', description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'},
    {year: '2015', jobTitle: 'Hr Director', location: 'Bethany Services, Grand Rapids MI', description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'}]);
/*

       
    */
    // add experience
    const [year, setYear] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    return(
        <div className="workexperienceContainer">
            <img className="menu" onClick={()=>{
                setEditStatus(!editStatus)
            }}src={edit} alt="edit" />
            <div className="experienceTitle">
                <div className="experienceLogo">
                    <img src={briefcase} alt="briefcase" />
                </div>
                <h1>
                    WORK EXPERIENCE
                </h1>
            </div>
            {
                !editStatus?
                <div className="addExperience">
                    <input type="text" value={year} onChange={e=>setYear(e.target.value)} placeholder="year" />
                    <input type="text" value={jobTitle} onChange={e=>setJobTitle(e.target.value)} placeholder="job title" />
                    <input type="text" value={location} onChange={e=>setLocation(e.target.value)} placeholder="location" />
                    <textarea type="text" value={description} onChange={e=>setDescription(e.target.value)} placeholder="describe experience"></textarea>
                    <input type="button" onClick={()=> {
                        let obj = {
                            year,
                            jobTitle,
                            location,
                            description
                        };
                        
                        if(workExperiences.length<2) {
                            let newExperiences = workExperiences;
                            newExperiences.push(obj);
                            setWorkExperiences(newExperiences);
                            setYear('');
                            setJobTitle('');
                            setLocation('');
                            setDescription('');
                        }
                    }} value="add" />
                </div>
                :
                <>
                {
                    workExperiences.length>0 ?
                    <>
                    {
                        workExperiences.map((workExperience,i)=> (
                            <div className="experience" id={`${i}`} key={i}>
                                <img className="menu" onClick={e=>{
                                    let deleteWithKey = e.target.parentNode.id;
                console.log(deleteWithKey);
                let dlExperiences = workExperiences;

                let setE = [];
                for(let i=0;i<dlExperiences.length;i++) {
                    if(String(i)===String(deleteWithKey)) {
                        continue;
                    }else {
                        setE.push(dlExperiences[i]);
                    }
                    
                }
                setWorkExperiences(setE);
                                    
            }}src={delet} alt="delete" />
                                            <div className="experienceYearTitle">
                                                <h3>{workExperience.year}</h3>
                                                <div></div>
                                                <h2>{workExperience.jobTitle}</h2>
                                            </div>
                                            <div className="experienceAddress">
                                                <p>{workExperience.location}</p>
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

export default WorkExperience;