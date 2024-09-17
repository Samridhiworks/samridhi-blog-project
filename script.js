
    function showPopup() {
      document.getElementById('popupForm').style.display = 'flex';
    }

    setTimeout(() => {
      showPopup();
    }, 10000);
     

    document.getElementById('closePopup').onclick = function() {
      document.getElementById('popupForm').style.display = 'none';
    };

    window.onclick = function(event) {
      if (event.target == document.getElementById('popupForm')) {
        document.getElementById('popupForm').style.display = 'none';
      }
    };


    // popup form2

  
