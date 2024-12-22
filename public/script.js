function toggleDropdown(dropdownId) {
  var dropdownContent = document.querySelector(`#${dropdownId} .dropdown-cont, #${dropdownId} .dropdown-cont1`);
   
  if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
      dropdownContent.style.display = "block";
    } 
  else {
     dropdownContent.style.display = "none";
    }
  }

