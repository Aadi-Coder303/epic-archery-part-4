// CREATED BY THE AADI GOLECHA ON 28TH OF JULY 
//COMPUTER CLASS

class Computer 
{
  //Making the computer is static (still)
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    //Created the comp player using its image and added it to the world
    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

        World.add(world, this.body);
  }

  //function to display the player
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
