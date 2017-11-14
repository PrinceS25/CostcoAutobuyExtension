function myInterval() {
   if (!document.getElementsByName("add-to-cart")[0].getAttribute("disabled")) {
      alert("We've got something in stock!");
   }
   location.reload(true);
}
setInterval("myInterval()",60000);
