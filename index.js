//  -- User E-mail - for a reason
 const scriptURL = "https://script.google.com/macros/s/AKfycbxtlW6rzpECYRBmFyFErx9dsllPKkT6MKvEb9Yld-Mt_qGGBdqjWIjc83PeCnstH2ht/exec"
 const form = document.forms["submit-to-google-sheet"]
 const successMsg = document.getElementById("success-msg")

 form.addEventListener("submit", (e) => {
   e.preventDefault()
   fetch(scriptURL, { method: "POST", body: new FormData(form) })
     .then((response) => {
       successMsg.innerHTML = "Prepare for upcoming Beneficial!"
       setTimeout(() => {
        successMsg.innerHTML = ""
       }, 3000);
       form.reset()
     })
     .catch((error) => console.error("Error!", error.message))
 })




 // -- Launch time - for a reason
 const countDownDate = new Date("2023-12-31 00:00:00").getTime()

 let x = setInterval(function () {
   let now = new Date().getTime()

   let distance = countDownDate - now

   let days = Math.floor(distance / (1000 * 60 * 60 * 24))
   let hours = String(
     Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
   ).padStart(2, "0")
   let minutes = String(
     Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
   ).padStart(2, "0")
   let seconds = String(
     Math.floor((distance % (1000 * 60)) / 1000)
   ).padStart(2, "0")

   document.getElementById("days").innerHTML = days
   document.getElementById("hours").innerHTML = hours
   document.getElementById("minutes").innerHTML = minutes
   document.getElementById("seconds").innerHTML = seconds

   if (distance < 0) {
     clearInterval(x)
     document.getElementById("days").innerHTML = "00"
     document.getElementById("hours").innerHTML = "00"
     document.getElementById("minutes").innerHTML = "00"
     document.getElementById("seconds").innerHTML = "00"
   }
 }, 1000)