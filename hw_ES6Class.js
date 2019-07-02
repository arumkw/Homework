class Shape {
    constructor(id, x, y){
        this.id = id
        this.x = x
        this.y = y
    }

    move(x,y){
        this.x = x;
        this.y = y;
    }
}

class Rectangle extends Shape{
    constructor(id, x, y, width, height){
        super(id, x, y)
        this.width = width;
        this.height = height;
    }
}

class Circle extends Shape{
    constructor(id, x, y, radius){
        super(id, x, y)
        this.radius = radius
    }
}

class Eye extends Circle{
    constructor(id, x, y, radius, color){
        super(id, x, y, radius)
        this.color = color;
    }

    roll(rollAmount){
        this.x += rollAmount
        this.move(this.x, this.y)
        //return this.x + rollAmount
    }
}

let eyes = new Eye(1, 2, 3, 4, 'Merah')
console.log('Sebelum roll:', eyes)
eyes.roll(100)
console.log('Sesudah roll:', eyes)