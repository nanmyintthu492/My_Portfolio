emailjs.init("GhSqzDplyb2I4_NOk");

document.getElementById("contact-form")
.addEventListener("submit", function(event){

    event.preventDefault();

    emailjs.send("service_yomw582",
                 "template_u6uvh4s",
    {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value
    })
    .then(function(){

        alert("Message sent successfully!");

        document.getElementById("contact-form").reset();

    })
    .catch(function(error){

        alert("Failed to send message.");
        console.log(error);

    });

});
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const icon = themeBtn.querySelector("i");

    if(document.body.classList.contains("dark-mode")){
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
    else{
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }

});

function showSkill(skill){

    const title = document.getElementById("skill-title");
    const desc = document.getElementById("skill-desc");

    if(skill === "html"){
        title.textContent = "HTML";
        desc.textContent =
        "Used in my portfolio and web projects to create page structure and content.";
    }

    if(skill === "css"){
        title.textContent = "CSS";
        desc.textContent =
        "Used to design responsive layouts, animations, and modern UI components.";
    }

    if(skill === "js"){
        title.textContent = "JavaScript";
        desc.textContent =
        "Used to create interactive features and dynamic user experiences.";
    }
       if(skill === "csharp"){
        title.textContent = "C#";
        desc.textContent =
        "Used in desktop applications and backend development with .NET framework.";
    }

    if(skill === "spring"){
        title.textContent = "Spring Boot";
        desc.textContent =
        "Java framework used to build secure and scalable backend applications.";
    }

    if(skill === "mysql"){
        title.textContent = "MySQL";
        desc.textContent =
        "Used to design and manage relational databases and store application data.";
    }
}
