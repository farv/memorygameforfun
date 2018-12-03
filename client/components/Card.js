import React from 'react'

const Card = React.createClass({
    render() {
        const cardUp = <img src={this.props.img} />
        const cardDown = <img src="http://i.annihil.us/u/prod/marvel/i/mg/5/f0/5261a85a501fe/standard_fantastic.jpg" />
        return(
            <div className="card" onClick={() => this.props.onClick(this.props.id)}>
                { this.props.isUp?cardUp:cardDown }
            </div>
        )
    }
})

export default Card