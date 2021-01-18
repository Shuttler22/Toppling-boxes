class ground {
constructor (x, y, w, h) {
    var option = {
        isStatic: true
    }
    this.ground = Bodies.rectangle(x, y, w, h, option)
    this.w = w;
    this.h = h;
    World.add(world, this.ground)
}
display()
{
    rectMode(CENTER)
    fill("green")
    rect(this.ground.position.x, this.ground.position.y, this.w, this.h)
}
}
