// JavaScript File
let age;
      document.getElementById("enter").addEventListener("click", ratingTeller);
      function ratingTeller() {
        age = document.getElementById("inputbox").value;
        if (age >= 17) {
          document.getElementById("response").textContent = "You can watch an R movie alone.";
        }
        else if (age >= 13) {
          document.getElementById("response").textContent = "You can watch a PG-13 movie alone.";
        }
        else if (age >= 5) {
          document.getElementById("response").textContent = "You can watch a G or PG movie alone.";
        }
        else {
         document.getElementById("response").textContent = "You are too young for these things...";
        }
        alert("Thank you for verifying your age!");
      }