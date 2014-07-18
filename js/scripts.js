$(document).ready(function(){
  $('form#new-triangle').submit(function(event){
    event.preventDefault();

    var side1 = parseInt($("input#side-one").val());
    var side2 = parseInt($("input#side-two").val());
    var side3 = parseInt($("input#side-three").val());


    var triangle = { sideOne: side1,
                    sideTwo: side2,
                    sideThree: side3,
                    calc: function () {
                  if ((((this.sideOne + this.sideTwo) < this.sideThree) || ((this.sideTwo + this.sideThree) < this.sideOne) || ((this.sideThree + this.sideTwo) < this.sideOne))) {
                  return "NOT A TRIANGLE";
                } else if (this.sideOne === this.sideTwo && this.sideOne === this.sideThree) {
                  return "EQUILATERAL";
                } else if (this.sideOne === this.sideThree || this.sideTwo === this.sideOne || this.sideThree === this.sideTwo) {
                  return "ISOCELES";
                } else if ((this.sideOne !== this.sideTwo && this.sideOne !== this.sideThree) && (this.sideTwo !== this.sideThree)) {
                  return "SCALENE";
                } else {
                  return false;
                }
                }
              }




      if (triangle.calc() === "NOT A TRIANGLE") {
        alert("Not a triangle!");
      }  else if (triangle.calc() === "EQUILATERAL") {
        $('#equal').append("<li>" + side1 + side2 + side3 + "</li>");
      } else if(triangle.calc() ===  "ISOCELES") {
        $('#two-sides').append("<li>" + side1 + side2 + side3 + "</li>");
      } else if (triangle.calc() === "SCALENE") {
       $('#none').append("<li>" + side1 + side2 + side3 + "</li>");
      } else {
        return false;
      }



  });
});
