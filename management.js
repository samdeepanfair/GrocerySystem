
var queryBtn = document.querySelectorAll("button.db-btns");

var modals = document.querySelectorAll(".modal-container");

var closeBtn = document.querySelectorAll(".modal-close-btn");

for (var i = 0; i < queryBtn.length; i++) {
    queryBtn[i].onclick = function(e) {
       e.preventDefault();
       modal = document.querySelector(e.target.getAttribute("href"));
       modal.style.display = "block";
    }
}

for (var i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function() {
       for (var index in modals) {
         if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
       }
    }
   }


// function displayModal(id) {
//     switch(id) {
//         case "addBtn":
//             var modal = document.getElementById("add-popup");
//             break;
//         case "editBtn":
//             var modal = document.getElementById("edit-popup");
//             break;
//         case "deleteBtn":
//             var modal = document.getElementById("delete-popup");
//             break;
//     }

//     modal.style.display = "block";
// // }

// function closeModal() {
//     modal.style.display = "none";
// }

// addBtn.onclick = function() {
//     modal.style.display = "block";
// }

// closeBtn.onclick = function() {
//     modal.style.display = "none";
// }

// window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
// }