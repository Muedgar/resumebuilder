async function Signin(email, password, buttonSubmission) {
    let data = {
        email,
        password
    }


    const response = await fetch("https://amali-resumebuilder-backend.herokuapp.com/amaliresumebuilder/backend/api/login", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });

      response.json()
      .then((data) => {
        if(!data.user) {
          throw new Error("Something went wrong");
        }
        buttonSubmission.style.width = "50%";
                                    buttonSubmission.value="Login Complete.";
                                
                                     setTimeout(() => {
                                        buttonSubmission.value="Login.";
                                    }, 3000);
        
        sessionStorage.setItem("currentlyLoggedIn", data.user.username);
        window.location = "/";
      }).catch(e=> {
       
        buttonSubmission.style.width = "80%";
                                    buttonSubmission.value="Something went wrong, login again.";
                                
      });
}

export default Signin;