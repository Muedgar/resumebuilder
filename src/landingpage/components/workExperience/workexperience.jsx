import React, {useState} from "react";

import "./workexperience.css";

import edit from "./assets/edit.svg";
import briefcase from "./assets/briefcase.svg";
import save from "./assets/save.svg";

function WorkExperience () {
    const [editStatus,setEditStatus] = useState(true);

    const [workExperiences, setWorkExperiences] = useState([ {year: '2015', jobTitle: 'Hr Manager', location: 'Bethany Services, Grand Rapids MI', description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'},
    {year: '2015', jobTitle: 'Hr Director', location: 'Bethany Services, Grand Rapids MI', description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'}]);
    const [remaining, setRemaining] = useState('');
    const [remainingTwo, setRemainingTwo] = useState('');
    
    // add experience
    const [year, setYear] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

    ////
    const [yearTwo, setYearTwo] = useState('');
    const [jobTitleTwo, setJobTitleTwo] = useState('');
    const [locationTwo, setLocationTwo] = useState('');
    const [descriptionTwo, setDescriptionTwo] = useState('');
    return(
        <div className="workexperienceContainer">
            
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
                // <div className="addExperience">
                //     <input type="text" value={year} onChange={e=>setYear(e.target.value)} placeholder="year" />
                //     <input type="text" value={jobTitle} onChange={e=>setJobTitle(e.target.value)} placeholder="job title" />
                //     <input type="text" value={location} onChange={e=>setLocation(e.target.value)} placeholder="location" />
                //     <textarea id="textAreaId" type="text" value={description} onChange={e=>setDescription(e.target.value)} placeholder="describe experience"></textarea>
                //     <input type="button" onClick={()=> {
                //         if(!description || (description.length<252 || description.length>262)) {
                //             document.getElementById("textAreaId").style.border = "2px solid red";                            
                //             return;
                //         }
                //         document.getElementById("textAreaId").style.border = "2px solid green";
                //         let obj = {
                //             year,
                //             jobTitle,
                //             location,
                //             description
                //         };
                        
                //         if(workExperiences.length<2) {
                //             let newExperiences = workExperiences;
                //             newExperiences.push(obj);
                //             setWorkExperiences(newExperiences);
                //             setYear('');
                //             setJobTitle('');
                //             setLocation('');
                //             setDescription('');
                //         }
                //     }} value="add" />
                // </div>
                <>
                <img className="menu" src={edit} onClick={() => {
                    setEditStatus(true);
                    setYear(workExperiences[0].year);
                    setJobTitle(workExperiences[0].jobTitle);
                    setLocation(workExperiences[0].location);
                    setDescription(workExperiences[0].description);

                    setYearTwo(workExperiences[1].year);
                    setJobTitleTwo(workExperiences[1].jobTitle);
                    setLocationTwo(workExperiences[1].location);
                    setDescriptionTwo(workExperiences[1].description);
                }} alt="edit" />
            <img className="menu"  onClick={()=> {
                        if(!description || (description.length<252 || description.length>262)) {
                            document.getElementById("textAreaIdThreeOne").style.border = "2px solid red";                            
                            return;
                        }
                        if(!descriptionTwo || (descriptionTwo.length<252 || descriptionTwo.length>262)) {
                            document.getElementById("textAreaIdThreeTwo").style.border = "2px solid red";                            
                            return;
                        }
                        document.getElementById("textAreaIdThreeOne").style.border = "2px solid green";
                        document.getElementById("textAreaIdThreeTwo").style.border = "2px solid green";
                        let obj = {
                            year,
                            jobTitle,
                            location,
                            description
                        };

                        let obj2 = {
                            year: yearTwo,
                            jobTitle:jobTitleTwo,
                            location:locationTwo,
                            description: descriptionTwo
                        }
                        
                        setWorkExperiences([obj,obj2]);
                        console.log(workExperiences);
                            setYear('');
                            setJobTitle('');
                            setLocation('');
                            setDescription('');
                            setYearTwo('');
                            setJobTitleTwo('');
                            setLocationTwo('');
                            setDescriptionTwo('');
                            setEditStatus(true);
                 }} src={save} alt="edit" />
                    {
                        workExperiences.map((workExperience,i)=> (
                            <div className="experience" key={i}>
                                <div className="experienceYearTitle">
                                <input placeholder="Year" type="number" value={i===0?year:yearTwo} onChange={e => {
                                        i===0?setYear(e.target.value):setYearTwo(e.target.value)
                                       }} />
                                       <div></div>
                                       <input placeholder="Job Title" type="text" value={i===0?jobTitle:jobTitleTwo} onChange={e => {
                                        i===0?setJobTitle(e.target.value):setJobTitleTwo(e.target.value)
                                       }} />
                                </div>
                                            <div className="experienceAddress">
                                            <input placeholder="Company Address" type="text" value={i===0?location:locationTwo} onChange={e => {
                                        i===0?setLocation(e.target.value):setLocationTwo(e.target.value)
                                    }} />
                                            </div>
                                            <div className="experienceDescription">
                                            <textarea id={i===0?`textAreaIdThreeOne`:`textAreaIdThreeTwo`} placeholder="Describe your work experience" value={i===0?description:descriptionTwo} onChange={e=> {
                                        i===0?setDescription(e.target.value):setDescriptionTwo(e.target.value)
                                        i===0?setRemaining(`${252-description.length} characters left`):setRemainingTwo(`${252-descriptionTwo.length} characters left`);
                                       }}></textarea>
                                            </div>
                                            <p style={{marginTop: '10px', marginLeft: '150px'}}>{i===0?remaining:remainingTwo}</p>
                                        </div>
                                            ))
                    }
                    </>
                :
                <>
                <img className="menu" onClick={()=>{
                setEditStatus(false);
                setYear(workExperiences[0].year);
                    setJobTitle(workExperiences[0].jobTitle);
                    setLocation(workExperiences[0].location);
                    setDescription(workExperiences[0].description);

                    setYearTwo(workExperiences[1].year);
                    setJobTitleTwo(workExperiences[1].jobTitle);
                    setLocationTwo(workExperiences[1].location);
                    setDescriptionTwo(workExperiences[1].description);
            }}src={edit} alt="edit" />
                {
                    workExperiences.length>0 ?
                    <>
                    {
                        workExperiences.map((workExperience,i)=> (
                            <div className="experience" id={`experience${i+1}`} key={i}>
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