import React, {useState} from "react";

import "./hobbies.css";

import edit from "./assets/edit.svg";
import briefcase from "./assets/briefcase.svg";
import delet from "./assets/delete.svg";

function Hobbies () {
    const [editStatus,setEditStatus] = useState(true);

    const [hobbies, setHobbies] = useState([ {description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'}]);
/*

       
    */
    // add experience
    const [description, setDescription] = useState('');
    return(
        <div className="hobbiesContainer">
            <img className="menu" onClick={()=>{
                setEditStatus(!editStatus)
            }}src={edit} alt="edit" />
            <div className="hobbiesTitle">
                <div className="experienceLogo">
                    <img src={briefcase} alt="briefcase" />
                </div>
                <h1>
                    HOBBIES AND INTERESTS
                </h1>
            </div>
            {
                !editStatus?
                <div className="addHobby">
                    <textarea id="textAreaId" type="text" value={description} onChange={e=>setDescription(e.target.value)} placeholder="describe hobby"></textarea>
                    <input type="button" onClick={()=> {
                        if(!description || (description.length<252 || description.length>262)) {
                            document.getElementById("textAreaId").style.border = "2px solid red";                            
                            return;
                        }
                        document.getElementById("textAreaId").style.border = "2px solid green";
                        let obj = {description};
                        
                        if(hobbies.length<1) {
                            let newExperiences = hobbies;
                            newExperiences.push(obj);
                            setHobbies(newExperiences);
                            setDescription('');
                        }
                    }} value="add" />
                </div>
                :
                <>
                {
                    hobbies.length>0 ?
                    <>
                    {
                        hobbies.map((workExperience,i)=> (
                            <div className="hobbies" id={`${i}`} key={i}>
                                <img className="menu" onClick={e=>{
                                    let deleteWithKey = e.target.parentNode.id;
                console.log(deleteWithKey);
                let dlExperiences = hobbies;

                let setE = [];
                for(let i=0;i<dlExperiences.length;i++) {
                    if(String(i)===String(deleteWithKey)) {
                        continue;
                    }else {
                        setE.push(dlExperiences[i]);
                    }
                    
                }
                setHobbies(setE);
                                    
            }}src={delet} alt="delete" />
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
                    <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>Add one hobby</div>
                    }</>
                
            }
                </>
            }
            
            
        </div>
    );
}

export default Hobbies;