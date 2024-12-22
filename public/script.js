function toggleDropdown(dropdownId) {
        var dropdownContent = document.getElementById(dropdownId);
        
        if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
          dropdownContent.style.display = "block";
        } else {
          dropdownContent.style.display = "none";
        }
      }


function starsaccess {
  let star = document.getElementbyClassName("stars");
  let output = document.getElementbyId = ("outputs");
  
  function remove() {
    let i = 0;
    while (i < 5) {
        star[i].className = "stars";
        i++;
    }
}
  
  
  
  
  
}