var shown = false;

function showHideEmail(){
    if(shown){
        document.getElementById("email").innerText = "Show my email";
        shown = false;
    }
    else{
        var myEmail = "rautelak@mail.uc.edu";
        document.getElementById("email").innerText = myEmail;
        shown = true;
    }
}
