const work_details = [
    { week: "1",work: "index.html" },
    { week: "2",work: "index.html" },
    { week: "3",work: "index.html" },
    { week: "4",work: "hero.html" },
    { week: "4",work: "teamactivity.html" },

    { week: "4/npm/dist",work: "index.html" },
  ];
  var ol_links = document.getElementById("links");
  for(week in work_details){
      week=work_details[week];
      var li =document.createElement("li");
      var link = document.createElement("a");
      link.innerHTML = "week " +week["week"];
      link.href = "portfolio/week"+week["week"]+"/"+week["work"];
      li.appendChild(link);
      ol_links.appendChild(li);
      
  }