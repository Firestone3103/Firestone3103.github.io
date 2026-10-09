function showAlert(message)
{
    alert(message);
}

function checkPassword()
{
    const passwordInput = document.getElementById("password-input");
    const password = passwordInput.value;
    const correctPassword = "3103"; 

    if (password === correctPassword)
    {
        alert("Brawo! Hasło jest poprawne! 🎉");

        goToPage("success-page");
    }
    else
    {
        alert("Nie wiesz kiedy mam urodziny❓❗️");
        passwordInput.value = ""; 
    }
}


function goToPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    document.getElementById(pageId).classList.add('active');
}
