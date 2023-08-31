let form = document.getElementById("usernameForm");
let username = document.getElementById("username");
document.getElementById("blitz_rating").innerHTML = "Unknown";
document.getElementById("bullet_rating").innerHTML = "Unknown";
document.getElementById("rapid_rating").innerHTML = "Unknown";
document.getElementById("blitz_rating").style.color = "transparent";
document.getElementById("bullet_rating").style.color = "transparent";
document.getElementById("rapid_rating").style.color = "transparent";
form.addEventListener("submit", (e) => {e.preventDefault()
    fetchData()
    });

async function fetchData() { 
    const res = await fetch("https://api.chess.com/pub/player/" + username.value + "/stats");
    const statistics = await res.json();
    if (res.status == 404){
        document.getElementById("ErrorMessage").style.display = "block"
    } else {
        document.getElementById("ErrorMessage").style.display = "none"
        try {
            document.getElementById("blitz_rating").innerHTML=statistics.chess_blitz.last.rating;
            document.getElementById("blitz_rating").style.color="#D1D1D1";
        }catch{
            document.getElementById("blitz_rating").innerHTML="Unknown";
            document.getElementById("blitz_rating").style.color="red";
        }
        try {
            document.getElementById("bullet_rating").innerHTML=statistics.chess_bullet.last.rating;
            document.getElementById("bullet_rating").style.color="#D1D1D1";
        }catch{
            document.getElementById("bullet_rating").innerHTML="Unknown";
            document.getElementById("bullet_rating").style.color="red";
        }
        try {
            document.getElementById("rapid_rating").innerHTML=statistics.chess_rapid.last.rating;
            document.getElementById("rapid_rating").style.color="#D1D1D1";
        }catch{
            document.getElementById("rapid_rating").innerHTML="Unknown";
            document.getElementById("rapid_rating").style.color="red";
        }
    }
}