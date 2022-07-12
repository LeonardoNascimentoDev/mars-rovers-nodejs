const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
let rover;
let inpNot = 1;
let output;

class Rover {
    constructor(upX, upY){
        this.upX = upX;
        this.upY = upY;
        this.N = 1;
        this.E = 2;
        this.S = 3;
        this.W = 4;
        this.x = 0;
        this.y = 0;
        this.pointed = this.N;
    }

    putPosition(x, y, dir) {
        this.x = x;
        this.y = y;
        if (dir == 'N') {
            this.facing = 1;
        } else if (dir == 'E') {
            this.facing = 2;
        } else if (dir == 'S') {
            this.facing = 3;
        } else if (dir == 'W') {
            this.facing = 4;
        }
    }

    positionShow() {
        let direction;
        if (this.facing == 1) {
            direction = 'N';
        } else if (this.facing == 2) {
            direction = 'E';
        } else if (this.facing == 3) {
            direction = 'S';
        } else if (this.facing == 4) {
            direction = 'W'
        }
        return (this.x + " " + this.y + " " + direction)
    }

    toLeft() {
        this.pointed = (this.pointed - 1) < this.N ? this.W : this.pointed - 1;
    }

    toRight() {
        this.pointed = (this.pointed + 1) > this.W ? this.N : this.pointed + 1;
    }

    walk() {
        if (this.pointed == this.N) {
            this.y++;
        } else if (this.pointed == this.E) {
            this.x++;
        } else if (this.pointed == this.S) {
            this.y--;
        } else if (this.pointed == this.W) {
            this.x--;
        }
    }

    runRover(controls) {
        for (let idx = 0; idx < controls.length; idx++) {
            this.firstProcess(controls.charAt(idx));
        }
    }

    firstProcess(control) {
        if (control == 'L') {
           this.toLeft();
        } else if (control == 'R') {
           this.toRight();
        } else if (control == 'M') {
           this.walk();
        } else {
            console.log("Use Mars language please!");
            process.exit();
        }
    }

}

module.exports = Rover;

readline.on('line', function (data) {
    if (inpNot == 1) {
        let fieldSplit = data.split(" ");
        rover = new Rover(fieldSplit[0], fieldSplit[1]);
        inpNot++;
    } else if (inpNot == 2) {
        let fieldSplit = data.split(" ");
        rover.putPosition(fieldSplit[0], fieldSplit[1], fieldSplit[2]);
        inpNot++;
    } else if (inpNot == 3) {
        rover.runRover(data);
        output = rover.positionShow();
        inpNot++;
    } else if (inpNot == 4) {
        let fieldSplit = data.split(" ");
        rover.putPosition(fieldSplit[0], fieldSplit[1], fieldSplit[2]);
        inpNot++;
    } else if (inpNot == 5) {
        rover.runRover(data);
        console.log(output);
        console.log(rover.positionShow());
        process.exit();
    } 
})
