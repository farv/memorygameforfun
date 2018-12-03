import React from 'react'
import {render} from 'react-dom'

// Import css
import css from './styles/style.styl'

// Import Components
import Main from './components/Main'
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Provider } from 'react-redux';
import store from './store';

render(
    <Provider store={store}>
        <Main>
            <PhotoGrid rows={4} colums={4} />
        </Main>
    </Provider>,
 document.getElementById('root'))