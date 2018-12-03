import React, {Component} from 'react'
import {connect} from 'react-redux'

import Card from './Card'
import { turnCardUp } from '../actions/actionCreators';

const columns = 4
const rows = 4

class PhotoGrid extends Component {

    constructor(props){
        super(props)
        this.onClick = this.onClick.bind(this)
    }

    onClick(id){
        this.props.dispatch(turnCardUp(id))
    }

    render() {
        const { cards } = this.props
        let game = []
        for (let i = 0; i < columns; i++){
            let row = [];
            for (let j = 0; j < rows; j++){
                const card = cards[4*i+j]
                row.push(<span><Card { ...card } onClick={this.onClick}/></span>);
            }
            game.push(<div>{ row }</div>)
        }
        return(
            <div className="photo-grid">
                { game }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { ...state}
}

export default connect(mapStateToProps)(PhotoGrid)
export { PhotoGrid }


