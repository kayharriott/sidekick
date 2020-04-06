
    function myFunction() {
        //alert("Hello World!");
    }

    function colorize() {
        var element = document.getElementsByTagName("body")[0];
        element.style.backgroundColor = 'blue';
   }

   function openForm(){
       
    document.getElementById("overlay").style.display = "block";
       document.getElementById("signupForm").style.display = "block";
    }

   function closeForm(){
       document.getElementById("signupForm").style.display = "none";
       document.getElementById("overlay").style.display = "none";      
    }
