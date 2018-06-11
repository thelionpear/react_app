import React from 'react'; 
class Counter extends React.Component {
    state = { value: 0 }

    inc = () => {
        this.setState( state => {
            return { value: state.value + 1 }
        })
    }

    dec = () => {
        this.setState( state => {
            return { value: state.value -1 }
        })
    }

    render() {
        const { value } = this.state; 
        return (
            <div>
                <h2>{value}</h2>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }
}

export default Counter; 