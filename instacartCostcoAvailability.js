// Go to https://www.instacart.com/store/costco/info?tab=delivery

function checkAvailability() {
   if (document.getElementsByTagName('h1')[0].innerText !== "No delivery times available") {
	audio.play();
	setTimeout(function(){alert("Delivery Available!!")}, 2000);
   }
   else {
	console.log("refreshing");
	location.reload(true);
   }
}

src = "https://soundbible.com/mp3/sms-alert-1-daniel_simon.mp3"
let audio = new Audio(src);
setInterval("checkAvailability()", 60000 * 3); // Every 3 minutes