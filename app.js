window.onload = function(){  
    myFunction();
    function myFunction() {
        var x = document.querySelector("#snackbar");
        const btn = document.querySelector(".btn");

        btn.addEventListener('click', ()=> {
            x.classList.add("show");
            setTimeout(function(){ x.classList.remove("show"); }, 3000);    
        })
      }
 }  
    