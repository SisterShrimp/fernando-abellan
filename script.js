 
document.querySelectorAll('.copy-link').forEach((copyLinkContainer)=> {
    const inputField = copyLinkContainer.querySelector('.copy-link-input');
    const copyButton = copyLinkContainer.querySelector('.copy-link-button');
   
    
    inputField.addEventListener('focus', () => inputField.select());
    
    copyButton.addEventListener('click', () => {
    const text = inputField.value;
    inputField.select();
    navigator.clipboard.writeText(text);
inputField.value = 'Copied!';
setTimeout(() => inputField.value = text, 2000);

    });
    });
    
    
 
 
 
 const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
 const openModalBtn = document.querySelector(".btn-open");
  const closeModalBtn = document.querySelector(".btn-close");





  const openModal = function () {
     modal.classList.remove("hidden");
      overlay.classList.remove("hidden");

  };

 openModalBtn.addEventListener("click" , openModal);


  const closeModal = function (){
      modal.classList.add("hidden");
      overlay.classList.add("hidden");
  };

  closeModalBtn.addEventListener("click" , closeModal);

  overlay.addEventListener("click", closeModal);



let text = document.getElementById("Text").innerHTML;
const copyContent = async () => {
    try {
        await navigator.clipboard.writeText(text);
        console.log("Copied to Clipboard!");
    } catch (err) {
        console.log("Failed to Copy: ", err)
    }
}



  















// // Get the modal
// var modal = document.getElementsByClassName('modal');

// // Get the button that opens the modal
// var btn = document.getElementsByClassName("btn-open");


// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("btn-close");

// var overlay =document.getElementsByClassName("overlay hidden");


// // When the user clicks the button, open the modal 
// btn[0].onclick = function() {
//     modal[0].style.display = "block";
// }

// btn[1].onclick = function() {
//     modal[1].style.display = "block";
// }
// // When the user clicks on <span> (x), close the modal
// span[0].onclick = function() {
//     modal[0].style.display = "none";
// }

// span[1].onclick = function() {
//     modal[1].style.display = "none";
// }
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal[0]) {
//          modal[0].style.display = "none";
//      }
//     if (event.target == modal[1]) {
//          modal[1].style.display = "none";
//      }  
//      }