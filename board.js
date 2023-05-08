const hscore = document.getElementById("h-score");
const gscore = document.getElementById("g-score");

const h_fieldset = document.getElementById("h-fieldset");
const g_fieldset = document.getElementById("g-fieldset");

let homeScore = 0;
let guestScore = 0;

function onClick_hbtn1()
{
   homeScore+=1;
   hscore.innerText= homeScore;
}

function onClick_hbtn2()
{
    homeScore+=2;
   hscore.innerText= homeScore;
}

function onClick_hbtn3()
 {
   homeScore+=3;
   hscore.innerText= homeScore;
}

function onClick_gbtn1()
{
    guestScore+=1;
   gscore.innerText= guestScore;
}
function onClick_gbtn2()
{
    guestScore+=2;
   gscore.innerText= guestScore;
}
function onClick_gbtn3()
{
    guestScore+=3;
   gscore.innerText= guestScore;
}

function onClick_new_btn()
{
    homeScore = 0;
    guestScore = 0;
    hscore.innerText= homeScore;
    gscore.innerText= guestScore;
    h_fieldset.style.backgroundColor= "#000000";
    g_fieldset.style.backgroundColor= "#000000";
}
function onClick_end_btn()
{
    if(homeScore > guestScore)
    {
        h_fieldset.style.backgroundColor = "#77FF33";
        g_fieldset.style.backgroundColor = "#9C0909";
    }
    else
    {
        g_fieldset.style.backgroundColor = "#77FF33";
        h_fieldset.style.backgroundColor = "#9C0909";
    }
}
