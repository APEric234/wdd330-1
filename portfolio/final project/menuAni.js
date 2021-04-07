function animateMenu() {
  var element = document.getElementById("navbarToggler");
 
  if(element.classList.contains("open")){
    element.classList.remove("open");
  }else{
    element.classList.add("open");
  }
}
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
    var name=resp.results[0].name.first.substring(3);
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
function saveRandomName(){
  var id=document.getElementById("fileName").value;
  document.cookie=id+"="+JSON.stringify({name:document.getElementById("demo").innerHTML})+";";

}
function checkSavedFiles(){
  var ul=document.getElementById("displayFIles");
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
  var name=document.getElementById("fileNameR").value;
  var cookies=getCookies();
  console.log("got here");
  for(x in cookies){
    var file_name=cookies[x].split("=")[0];
    console.log("filename is: "+ file_name+";");
    console.log("name is: "+ name+";");

    console.log();
    if( file_name.trim()==name.trim()){
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