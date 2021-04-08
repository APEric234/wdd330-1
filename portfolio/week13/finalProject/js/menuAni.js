function pageFullyLoaded(){
  var element = document.getElementById("navbarToggler");
  if(element.classList.contains("open")){
    element.classList.remove("open");
  }
}
var startLine = ["iNsertName watchs as he enters the" ,"He invites iNsertName to his ", "A caped figred descretly singles iNsertName, iNsertName follow him to the ", "Something weird is happening at the "];
var emotions = ["scared","happy","sad","angry",'passionate','busy'];
var descrLines =["iNsertName notices the people around seem oddly ", "your guide seems strangely"];
var locations= ["castle", "bar","tavern","forest","bay",'home','hamlet','village'];

function animateMenu() {
  var element = document.getElementById("navbarToggler");
  var element2 = document.getElementById("sr-only");

  if(element.classList.contains("open")){
    element.classList.remove("open");
    element2.classList.remove("open");
    element2.innerHtml="Current";
    element2.innerText="Current";
  }else{
    element.classList.add("open");
    element2.classList.add("open");
    element2.innerText=" ";
  }
}
function getRandomHook(){
  var fullHook="";
  var start=startLine[getRandomArbitrary(0,startLine.length)];

  var place=locations[getRandomArbitrary(0,locations.length)];
  var descrLine=descrLines[getRandomArbitrary(0,descrLines.length)];
  var emo=emotions[getRandomArbitrary(0,emotions.length)];
  //compile randomly chosen pieces
 fullHook=start+place+".\n";
 fullHook=fullHook+descrLine+emo+".\n";
    
  document.getElementById("demo").innerHTML = fullHook

};
function getRandomPokeName(){
  var poke="";
  var xhttp = new XMLHttpRequest();
  //choose from all original pokemon
  var random_number=getRandomArbitrary(1,151);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     
      var resp=JSON.parse(this.responseText);
      poke = resp.name.substring(0,3);
      
    }
  };
  var partial="https://pokeapi.co/api/v2/pokemon/";
  xhttp.open("get", partial+random_number, true);
  xhttp.send();
  var partial_name = 'https://randomuser.me/api/';
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    
    var resp=JSON.parse(this.responseText);
    var name=resp.results[0].name.first.substring(2);
    //set first characacter to upper case
    name = name.charAt(0).toUpperCase() + name.slice(1);
    document.getElementById("demo").innerHTML = name + poke;
    
  }
  
};
xhttp.open("get", partial_name, true);
  xhttp.send();
}
function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function loadName(){
  console.log("A caped figred descretly singles Dréahau, you follow him to the village. undefinedsad. ".replaceAll('d','b'))
  var id=document.getElementById("fileName").value;
  var error=document.getElementById("fileError");
  var storyOBJ=document.getElementById("demo")
  var story=storyOBJ.innerHTML;
  error.style="display:none";
  var found=false;
  if(id && story){
    var cookies=getCookies();
    
    for (x in cookies){
      cookie = cookies[x];

      if (cookie.split("=")[0].trim()==id){
        console.log("got here")
        found=true;
        var name=cookie.split("=")[1];
        console.log("name is " + name)
        storyOBJ.innerHTML=story.replaceAll('iNsertName',name);
        
        console.log("inner is " + storyOBJ.innerHTML)
      }
    }
    if (!found){
      error.style="display:block";
      error.innerText="No such save";
    }
    }else{
    error.style="display:block";

  }
  
}
function saveRandomName(){
  var id=document.getElementById("fileName").value.trim();
  var error=document.getElementById("fileError");
  error.style="display:none";
  if(id){
    document.cookie=id+"="+document.getElementById("demo").innerHTML+";";
  }else{
    error.style="display:block";

  }
  
}
function checkSavedFiles(){
  var ul=document.getElementById("displayFiles");
  ul.innerHTML="";
  cookies=getCookies();
  for (x in  cookies){
      console.log(cookies[x]);
     li= document.createElement('li');
    li.innerHTML=cookies[x].split("=")[0];
    ul.appendChild(li);
  }
}

function getCookies(){
  var cookie=document.cookie;
  var cookies=cookie.split(";");
  console.log(cookies);
  return cookies;
}

function removeFile(){
  var name=document.getElementById("fileNameR").value.trim();
  var cookies=getCookies();
  console.log("got here");
  for(x in cookies){
    var file_name=cookies[x].split("=")[0];
    console.log("filename is: "+ file_name+";");
    console.log("name is: "+ name+";");

    console.log();
    if( file_name.trim()==name){
      console.log("got here");
      var d = new Date();
      d.setTime(d.getTime()  -365*60*60);
      console.log("cookies override is: "+ cookies[x]+"; Expires=Tue, 01 Apr 2000 05:25:50 GMT;");
      document.cookie=cookies[x]+"; Expires=Tue, 01 Apr 2000 05:25:50 GMT;";
    }
  }

  document.cookie=cookies.join(";");
  checkSavedFiles();
}