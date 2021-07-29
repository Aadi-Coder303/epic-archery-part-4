// CREATED BY THE AADI GOLECHA ON 28TH OF JULY
//COMPUTER ARROW CLASS

class ComputerArrow {

  //giving Appropriate properties to arrow
  constructor(x, y, width, height, archerAngle) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };

    //created arrow and added it to the world
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("./assets/arrow.png");
    this.isRemoved = false;
    this.archerAngle = archerAngle;
    this.velocity = p5.Vector.fromAngle(archerAngle);
    World.add(world, this.body);
  }

  //shoot function to shoot the arrow
  shoot(archerAngle) {
    this.velocity = p5.Vector.fromAngle(archerAngle + PI / 2);
    this.velocity.mult(32);
    Matter.Body.setVelocity(this.body, {
      x: this.velocity.x,
      y: this.velocity.y
    });

    //setting the static to false
    Matter.Body.setStatic(this.body, false);
  }

  //displaying the arrow
  display() {
    var tmpAngle;
    if (this.body.velocity.y === 0) {
      tmpAngle = this.archerAngle + PI / 2;
    } else {
      tmpAngle = Math.atan(this.body.velocity.y / this.body.velocity.x) - PI;
    }

    Matter.Body.setAngle(this.body, tmpAngle);

    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}