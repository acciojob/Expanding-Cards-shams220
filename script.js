//your JS code here. If required.
const images = document.querySelectorAll("img");
      const texts = document.querySelectorAll(".img-text");

       texts.forEach((t) => {
        t.style.visibility = "hidden";
      });
      images.forEach((i,index) => {
        i.addEventListener("mouseover", () => {
          i.style.width = "500px";
        // text[index].style.visibility = "visible"
          texts[index].style.visibility = "visible";
          
        });
        i.addEventListener("mouseout", () => {
          i.style.width = "100px";
          texts[index].style.visibility = "hidden";
        });
      });