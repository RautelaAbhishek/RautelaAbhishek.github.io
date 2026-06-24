var shown = false;

function showHideEmail(){
    if(shown){
        document.getElementById("email").innerHTML = "Show my email";
    }
    else{
        var myEmail = "<a href='mailto:rautelak@mail.uc.edu'>rautelak@mail.uc.edu</a>";
        document.getElementById("email").innerHTML = myEmail;
        shown = true;
    }
}