// CREATED BY THE AADI GOLECHA ON 28TH OF JULY
//PLAYER CLASS

class Player {

  //Created a static (still) player and added to the world
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player1.png");

    World.add(world, this.body);
  }


  //Displaying the player using its image
  display() {
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
