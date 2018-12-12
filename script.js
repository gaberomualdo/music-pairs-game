var colors = [
  "#27ae60",
  "#c0392b",
  "#8e44ad",
  "#341f97",
  "#e67e22",
  "#0984e3",
  "#e84393",
  "#e1b12c"
];
var songs = [
  "Eastside",
  "Riptide",
  "Closer",
  "Shallow",
  "God is a Woman",
  "Hold My Hand",
  "Symphony",
  "Psycho"
];
var artists = [
  "Benny Blanco ft. Halsey &amp; Khalid",
  "Vance Joy",
  "The Chainsmokers ft. Halsey",
  "Lady Gaga &amp; Bradley Cooper",
  "Ariana Grande",
  "Jess Glynne",
  "Clean Bandit ft. Zara Larsson",
  "Post Malone ft. Ty Dolla $ign"
];
shuffle(songs.concat(artists)).forEach(function(value){
  var className = songs.indexOf(value);
  if(className == -1) {
    className = artists.indexOf(value);
  }
  document.querySelector("div.game").innerHTML += "<section onclick='clickBtn(this);' class='select' pairId='" + className + "'>" + value + "</section>";
});
setTimeout(function(){
  document.querySelectorAll(".select").forEach(function(btn){
    btn.classList.remove("select");
  });
}, 500);
function clickBtn(btn){
  btn.classList.add("select");
  if(document.querySelector("#active")){
    if(document.querySelector("#active").getAttribute("pairId") == btn.getAttribute("pairId") && btn != document.querySelector("#active")){
      document.querySelector("#active").classList.add("paired");
      btn.classList.add("paired");
      
      document.querySelector("#active").setAttribute("style","background-color: " + colors[btn.getAttribute("pairId")]);
      btn.setAttribute("style","background-color: " + colors[btn.getAttribute("pairId")]);
    }
    setTimeout(function(){
      document.querySelector("#active").classList.remove("select");
      btn.classList.remove("select");
      document.querySelector("#active").removeAttribute("id");
    }, 375);
  }else{
    btn.setAttribute("id", "active");
  }
}
