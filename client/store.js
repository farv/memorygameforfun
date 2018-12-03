import { createStore } from 'redux'

import rootReducer from './reducers/index'

const rows = 4
const columns = 4

const generateNewDefaultState = (rows, columns) => {
    const halfLength = (rows * columns)/2
    let randomValues = []

    for(var i=0; i<halfLength; i++){
        let numRandom
        do {
            numRandom = Math.floor(Math.random() * 8)
        } while(randomValues.includes(numRandom))
        randomValues.push(numRandom)
    }

    const valuesDuplicated = randomValues.concat(randomValues).sort(() => Math.random() - 0.5)

    const imageUrls = getImagesUrls(halfLength) 

    console.log(imageUrls)
      
    const arrayCards = valuesDuplicated.map((imgNum, idx) => {
        const first = valuesDuplicated.indexOf(imgNum)
        const last = valuesDuplicated.lastIndexOf(imgNum)

        return {
            id: idx,
            img: imageUrls[imgNum],
            pair: first==idx?last:first,
            isUp: false
        }
    })

    return arrayCards
}

const getImagesUrls = (length) => {
    // It has been patch because Marvel API doesn't have images in all its characters.
    const response = httpGet(`https://gateway.marvel.com:443/v1/public/characters?limit=${length+4}&offset=50&apikey=291790a87f7a461327b93dea235688bd`);
    const json = JSON.parse(response);
    return json.data.results.
        filter(elem => !elem.thumbnail.path.includes("image_not_available")).
        map(elem => elem.thumbnail.path + "/standard_fantastic." + elem.thumbnail.extension);
}

const httpGet = (url) => {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

const defaultState = {
    cards: generateNewDefaultState(rows,columns)
}

const store = createStore(rootReducer, defaultState)

export default store