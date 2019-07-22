import React from 'react'
import Portrait from "/Users/sahel//Documents/portfolioWebsite/src/Assets/Images/portrait.png"
import CSS from "../Ball/Ball.module.css"


export default class Ball extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            droidX: 0,
            mouseX: 0,
            toTheRight: true,
            speed: 2,
            accelMod: 1
        }
    }

    // Keep track of the mouse position.
    handleMouseMove(event) {
        this.setState({
            mouseX: event.pageX
        })
    }

    // Speed Mod Bar
    handleSpeedChange(e) {
        if (parseFloat(e.target.value)) {
            this.setState({
                speed: e.target.value
            })
        }
    }

    // Acceleration Mod Bar
    handleAccelChange(e) {
        if (parseFloat(e.target.value)) {
            this.setState({
                accelMod: e.target.value
            })
        }
    }

    // Get moving!
    movement() {
        let { droidX, mouseX, speed, accelMod } = this.state;

        // Need a pretty strict if statement to make sure React doesn't end up in a 
        // render loop with all the state changes / re-rendering going on.
        if (Math.abs(Math.round(droidX) - mouseX) !== 1) {

            let distance = mouseX - droidX;
            let acceleration = Math.abs(distance * accelMod) / 100;

            // Move to the right
            if (droidX < mouseX) {
                this.setState({
                    droidX: droidX + (speed * acceleration),
                    toTheRight: true
                });
            }

            // Move to the left
            else {
                this.setState({
                    droidX: droidX - (speed * acceleration),
                    toTheRight: false
                });
            }
        }
    }

    // Get some initial movement on first mount. 
    componentWillMount() {
        this.setState({
            mouseX: 300
        });
    }

    // Set up the mouse event listener and fire up the movement function.
    componentDidMount() {
        document.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        setInterval(this.movement.bind(this), 1);
    }

    // Clean up.
    componentWillUnmount() {
        document.removeEventListener('mousemove', (e) => this.handleMouseMove(e));
    }

    // Away we go.
    render() {
        let {droidX} = this.state;

        return (
            <div>
                <div className={CSS.bb8} style={{ WebkitTransform: `translateX(${droidX}px)` }}>
                    <div className={CSS.ball} style={{ WebkitTransform: `rotateZ(${droidX / 2}deg)` }}>
                        <li><img className={CSS.image} src={Portrait} alt="portrait"></img></li>
                    </div>
                </div>

            </div>
        );
    }
}