const work_details = [
    { week: "1",Message:"week 1",work: "index.html" },
    { week: "2",Message:"week 2",work: "index.html" },
    { week: "3",Message:"week 3",work: "index.html" },
    { week: "4",Message:"week4: hero with options",work: "hero.html" },
    { week: "4",Message:"week4: team activity",work: "teamactivity.html" },

    { week: "4/npm/dist",Message:"week4: npm",work: "index.html" },
    { week: "5",Message:"week5: hero with logging",work: "hero.html" },
    
    { week: "7",Message:"week7: hero with random",work: "ninja.html" },
    { week: "8",Message:"week8: transform example",work: "base.html" },

];
  var ol_links = document.getElementById("links");
  for(week in work_details){
      week=work_details[week];
      var li =document.createElement("li");
      var link = document.createElement("a");
      link.innerHTML = week["Message"];
      link.href = "portfolio/week"+week["week"]+"/"+week["work"];
      li.appendChild(link);
      ol_links.appendChild(li);
      
  }