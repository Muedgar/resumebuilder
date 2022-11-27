import React, {useState} from "react";

import "./profileimage.css";

import profile from "./assets/profile.svg";

const ProfileImage = () => {
    const [imageValue, setImageValue] = useState(profile);
    
   

    function handleClick() {
        let input = document.getElementById('fileId');
        input.click();
    }

    function handleChange() {
        let input = document.getElementById('fileId');
        // input.file = input.files[0];
        var fReader = new FileReader();
        fReader.readAsDataURL(input.files[0]);
        // document.getElementById("fileId").value = input.files[0].name;
        // console.log(input.files[0].name);
        fReader.onloadend = function(event) {
                setImageValue(event.target.result);
            }
            console.log(input.files[0]);
    }
    return(
        <div className="profileContainer">
            <img src={imageValue} alt="Profile"/>
            <button onClick={handleClick}>Change profile image</button>
            <input onChange={handleChange} id="fileId" type="file" accept="image/png, image/jpeg"/>
        </div>
    )
}

export default ProfileImage;