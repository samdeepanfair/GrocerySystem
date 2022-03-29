//get selected table row to edit-modal 
var table = document.getElementById("db-table");

for(let i = 0; i < table.rows.length; i++){
   table.rows[i].onclick = function(){
      
      document.getElementById("pName_edit").value = this.cells[0].innerHTML;
      document.getElementById("pID_edit").value = this.cells[1].innerHTML;
      document.getElementById("pStock_edit").value = this.cells[3].innerHTML;
      document.getElementById("pPrice_edit").value = this.cells[4].innerHTML;
      checkCategory(this.cells[2].innerHTML);

      for(let j = 0; j < table.rows.length; j++){
         if (table.rows[j].style.backgroundColor == "rgb(176, 176, 176)"){
            table.rows[j].style.backgroundColor == "rgb(230,230,230)";
            console.log("same");
         }
      }

      this.style.backgroundColor = "#b0b0b0";
      
   }
}

function checkCategory(text){
console.log(text);
   var select = document.getElementById("pCategory_edit");
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