document.addEventListener("DOMContentLoaded", function () {
    const socialForm = document.getElementById("socialForm");
    const socialMediaSelect = document.getElementById("socialMediaSelect");
    const socialOtherLabel = document.getElementById("socialOtherLabel");
    const socialOtherInput = document.getElementById("socialOther");

    socialForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const socialMedia = socialMediaSelect.value;
        let socialHandle = "";

        if (socialMedia === "other") {
            // If "Other" is selected, use the "Other" social network name
            socialHandle = socialOtherInput.value;
        } else {
            // If any other option is selected, use the handle entered in the initial input
            const socialHandleInput = document.getElementById("socialHandle");
            socialHandle = socialHandleInput.value;
        }

        const nameInput = document.getElementById("name");
        const name = nameInput.value;

        if (name && socialHandle) {
            const userData = {
                name,
                socialMedia,
                socialHandle
            };

            console.log(userData);
            // You can now use userData to work with the collected information.
            // You can save this data to an array or perform any other desired action here.
        } else {
            alert("Please enter both a name and a social media handle.");
        }
    });

    // Add an event listener to the select element to show/hide the "Other" input
    socialMediaSelect.addEventListener("change", function () {
        if (socialMediaSelect.value === "other") {
            socialOtherLabel.style.display = "block";
            socialOtherInput.style.display = "block";
        } else {
            socialOtherLabel.style.display = "none";
            socialOtherInput.style.display = "none";
        }
    });
});
