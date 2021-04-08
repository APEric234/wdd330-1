const work_details = [
    { week: "1",Message:"week 1",file: "index.html" },
    { week: "2",Message:"week 2",file: "index.html" },
    { week: "3",Message:"week 3",file: "index.html" },
    { week: "4",Message:"week4: hero with options",file: "hero.html" },
    { week: "4",Message:"week4: team activity",file: "teamactivity.html" },

    { week: "4/npm/dist",Message:"week4: npm",file: "index.html" },
    { week: "5",Message:"week5: hero with logging",file: "hero.html" },
    
    { week: "7",Message:"week7: hero with random",file: "ninja.html" },
    { week: "8",Message:"week8: transform example",file: "base.html" },
    { week: "10",Message:"week10: notes on fetch and client side validation",file: "index.html" },

    { week: "13",Message:"Final Project",file: "finalProject/pages/index.html" },


];
  var ol_links = document.getElementById("links");
  for(week in work_details){
      week=work_details[week];
      var li =document.createElement("li");
      var link = document.createElement("a");
      link.innerHTML = week["Message"];
      link.href = "portfolio/week"+week["week"]+"/"+week["file"];
      li.appendChild(link);
      ol_links.appendChild(li);
      
  }