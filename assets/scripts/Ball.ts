import { _decorator, Component, Node, UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Ball')
export class Ball extends Component {

    @property({
        type:Node,
        tooltip: "node"
    })
    public ball: Node;

    public velocity: number = 0;
    public radius: number;

    onLoad(){
        this.startUp();
        this.radius = this.ball.getComponent(UITransform).height * this.ball.scale.y / 2;
    }

    startUp() {
        this.ball.setPosition(100, 500);
        this.velocity = 0;
        this.start();
    }

    start() {
    }

    update(deltaTime: number) {
        this.velocity += 5 * deltaTime;

        if (this.ball.position.y < -300 + this.radius) {
            console.log("hit");
            this.velocity = -this.velocity * .6;
            this.ball.setPosition(this.ball.position.x, -300 + this.radius)
            return;
        }

        this.ball.setPosition(this.ball.position.x, this.ball.position.y - this.velocity);
    }
}


