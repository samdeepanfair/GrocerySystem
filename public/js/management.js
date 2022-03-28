//get selected table row to edit-modal 
var table = document.getElementById("db-table");

for(let i = 0; i < table.rows.length; i++){
   table.rows[i].onclick = function(){
      document.getElementById("pName-edit").value = this.cells[0].innerHTML;
      document.getElementById("pID-edit").value = this.cells[1].innerHTML;
      document.getElementById("pStock-edit").value = this.cells[3].innerHTML;
      document.getElementById("pPrice-edit").value = this.cells[4].innerHTML;
      checkCategory(this.cells[2].innerHTML);
   }
}

function checkCategory(text){
console.log(text);
   var select = document.getElementById("pCategory-edit");
   Array.from(select.options).forEach(element => {
      if(element.text == text){
         console.log(element.value);
         select.value = element.value;
      }
   });
}


//Show modal / close modal 
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