document.getElementById("KyleForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Filed Submitted Successfully!");
    this.reset();
});
