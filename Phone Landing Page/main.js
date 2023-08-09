document.addEventListener("DOMContentLoaded", function() {
    var circle = document.getElementById("circle");
    var upBtn = document.getElementById("upBtn");
    var downBtn = document.getElementById("downBtn");

    var rotateValue = 0; // Initialize the rotation value
    var rotateSum;

    upBtn.onclick = function() {
        rotateValue -= 90;
        rotateSum = "rotate(" + rotateValue + "deg)";
        circle.style.transform = "rotate(" + rotateValue + "deg)";
    };

    downBtn.onclick = function() {
        rotateValue += 90;
        rotateSum = "rotate(" + rotateValue + "deg)";
        circle.style.transform = "rotate(" + rotateValue + "deg)";
    };
});