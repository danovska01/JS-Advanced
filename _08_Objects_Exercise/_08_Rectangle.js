function rectangleFunct (width, height, color){

    class Rectangle {
        constructor(width, height, color){
           this.width = width;
           this.height = height;
           // Първа буква главна и следващите каквито са подадени 
           this.color = color[0].toUpperCase() + color.slice(1);     
        }
        calcArea(){
            return this.height * this.width;
        };
    }
    return new Rectangle(width, height, color);
   
}

let rect = rectangleFunct(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

let rect1 = rectangleFunct(10, 5, 'Blue');
console.log(rect1.width);
console.log(rect1.height);
console.log(rect1.color);
console.log(rect1.calcArea());