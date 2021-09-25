// CONTACT PAGE
window.addEventListener('load', function(e) {

    const inputForm = document.querySelector('#contact-form');
    const nameInput = document.querySelector('#userName');
    const emailInput = document.querySelector('#email')
    const messageInput = document.querySelector('#message')
    const submit = document.querySelector('.submit button')
    
        inputForm.addEventListener('submit', function(event){
            event.preventDefault()
            let isValid = false;

           isValid = validation(nameInput, emailInput, messageInput);

           if(isValid)
           {
            function sendEmail() {
                Email.send({
                  Host: "smtp.gmail.com",
                  Username: "sender@email_address.com",
                  Password: "Enter your password",
                  To: 'receiver@email_address.com',
                  From: "sender@email_address.com",
                  Subject: "Sending Email using javascript",
                  Body: "Well that was easy!!",
                  Attachments: [
                    {
                      name: "File_Name_with_Extension",
                      path: "Full Path of the file"
                    }]
                })
                  .then(function (message) {
                    alert("Mail has been sent successfully")
                  });
              } 
           }
        })
    
    })

    function validation(nameInput, emailInput, messageInput)
    {
        const nameValue = (nameInput.value).trim()
        const emailValue = (emailInput.value).trim()
        const messageValue = (messageInput.value).trim()
        let allGood = false
        let validName = false
        let validEmail = false
        let validMessage = false

        if(nameValue === '')
        {
            const warning = document.querySelector('.nameWarning');
            warning.textContent = "Please Enter Your Name"
        }
        else
        {
            const warning = document.querySelector('.nameWarning');
            warning.textContent = ""
            validName = true
        }

        if(emailValue === '')
        {
            const warning = document.querySelector('.emailWarning');
            warning.textContent = "Please Enter Your Email"
        }
        else
        {
            const warning = document.querySelector('.warning');
            warning.textContent = ""
            validEmail = true
        }

        if(messageValue === '')
        {
            const warning = document.querySelector('.messageWarning');
            warning.textContent = "Please Enter A Message"
        }
        else
        {
            const warning = document.querySelector('.messageWarning');
            warning.textContent = ""
            validMessage = true
        }

        if(validName && validEmail && validMessage)
        {
            allGood = true
            return allGood
        }
    }
// CONTACT PAGE END