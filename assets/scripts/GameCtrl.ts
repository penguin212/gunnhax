import { _decorator, Component, instantiate, Node, input, Input, EventKeyboard, KeyCode } from 'cc';

import { Ball } from './Ball';
import { BallQ } from './BallQ';
import { Source } from './Source';
const { ccclass, property } = _decorator;

@ccclass('GameCtrl')
export class GameCtrl extends Component {

    @property({
        type: Ball,
        tooltip: 'Add Ball prefab owner here'
    })
    public ball: Ball;

    @property({
        type: Node,
        tooltip: 'Add BallQ prefab owner here'
    })
    public source: Node;

    onLoad() {
        this.initListener();
    }

    initListener() {
    
        //if keyboard key goes down, go to onKeyDown
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    
        //if an mouse or finger goes down, do this
        this.node.on(Node.EventType.TOUCH_START, () => {
            let newBall = instantiate(this.ball);
            this.source.addChild(newBall.node);
            newBall.startUp();
    
        })
    
    }
    onKeyDown(event: EventKeyboard) {
        switch (event.keyCode) {
        case KeyCode.KEY_A:
            //end game
            break;
        case KeyCode.KEY_P:
            //add one point
            break;
        case KeyCode.KEY_Q:
            //reset score to zero
        }
    }
    update(deltaTime: number) {
        
    }
}


