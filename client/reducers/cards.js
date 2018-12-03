function cards(state = [], action) {
  switch(action.type){
    case 'TURN_CARD_UP':
      const selected = state.find( card => card.id == action.id )
      const pair = state.find( card => card.id == selected.pair )
      const countCarsUp = state.reduce( (acc, card) => card.isUp?++acc:acc, 0)

      if(countCarsUp % 2 == 0)
        pair.isUp = false

      return state.map( card => {
        // Turn down every NOT paired card each 2 events.
        if(!card.isPaired)
          if(countCarsUp % 2 == 0)
            card.isUp = false
        
        // Turn up selected card and...
        if(card.id == selected.id){
          card.isUp = true
          // If needed, check it as paired.
          if(pair.isUp && card.pair == pair.id)
            card.isPaired = true
        }
        // If previous card was the pair, check it as paired.
        else if(card.id == selected.pair && pair.isUp)
          card.isPaired = true
          
        return card
      })
    default:
      return state
    }
}

export default cards;
