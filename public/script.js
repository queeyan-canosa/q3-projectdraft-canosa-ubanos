function toggleDropdown(dropdownId) {
        var dropdownContent = document.getElementById(dropdownId);
        
        if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
          dropdownContent.style.display = "block";
        } else {
          dropdownContent.style.display = "none";
        }
      }


function starnumbers {
  let star = document.getElementbyClassName("stars");
  let output = document.getElementbyId = ("outputs");
  
  let number;
  for(i = 0; i < n; i++) {
    if (n>0) {
      (n == 1) number = "one";
    }
      else {(n == 2) number = "two";
              }
      else { (n == 3) number = "three";
             }
      else {(n == 4) number = "four";
              }
      else {(n == 5) number = "five";
             }
     star[i].className = "star " + number;
    }
      output.innerText = "Rating is: " + n + "/5";
  }
    

function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}
  
  
     
 
  
}