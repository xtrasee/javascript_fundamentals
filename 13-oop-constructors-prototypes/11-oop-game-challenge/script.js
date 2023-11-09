function Player(name) {
    this.name = name;
    this.lvl = 1;
    this.points = 0;
}

Player.prototype.gainXp = function (xp) {

    this.points += xp;

    if (this.points >= 10) {
        this.lvl += 1;
        this.points -= 10;
    }

}

Player.prototype.describe = function () {
    console.log(this.name, this.lvl, this.points);
}

let player1 = new Player('Tracy');
player1.gainXp(5);
player1.gainXp(7);
player1.describe();