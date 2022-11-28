import React, {useState} from "react";
import "./introduction.css";

// import assets
import quote from "./assets/quote.svg";
import edit from "./assets/edit.svg";

const Introduction = () => {
    const [editStatus, setEditStatus] = useState(true);
    const [introduction, setIntroduction] = useState("The 2022 FIFA World Cup is an international association football tournament contested by the men's national teams of FIFA's member associations. The 22nd FIFA World Cup, it is taking place in Qatar from 20 November to 18 December 2022.");

    

    return (

        
        <div className="introduction">
            <img className="menu" onClick={()=>{
                setEditStatus(!editStatus)
            }}src={edit} alt="edit" />
            <div>
                <img className="quoteIcon" src={quote} alt="edit intro" />
            </div>
            {editStatus? 
            <div>
                <p>
                    {introduction}
                </p>
            </div>
            :
            <div>
                <textarea onChange={(event) => {
                    setIntroduction(event.target.value)
                }}>
                    {introduction}
                </textarea>
            </div>
            }
        </div>
    )
}

export default Introduction;