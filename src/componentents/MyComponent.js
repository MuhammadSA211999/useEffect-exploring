import React from 'react'
class MyComponent extends React.Component {
    state = {
        count: 0,
        date: new Date()
    }
    componentDidMount() {
        const { count } = this.state
        document.title = `Clicked ${count} times`
        setInterval(this.tick, 1000)
        console.log(this.tick);


    }
    componentDidUpdate() {
        const { count } = this.state
        document.title = `Clicked ${count} times`
        // setInterval(this.tick, 1000)
        // console.log(count);

    }
    addClick = () => {
        this.setState(({ count }) => ({
            count: count + 1
        }))
    }
    tick = () => {
        this.setState({
            date: new Date()
        })
    }
    render() {
        const { date } = this.state
        return (
            <div>
                <p>Time:{date.toLocaleTimeString()}</p>
                <p>
                    <button onClick={this.addClick} type='button'>Click</button>
                </p>
            </div>
        )
    }
}
export default MyComponent