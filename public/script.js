function toggleDropdown(dropdownId) {
        var dropdownContent = document.getElementById(dropdownId);
        
        if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
          dropdownContent.style.display = "block";
        } else {
          dropdownContent.style.display = "none";
        }
      }
