import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import { firebase } from './firebase/firebase'

const store = configureStore()
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

// Make sure the app only renders a single time
let hasRendered = false
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'))
        hasRendered = true
    }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(startSetExpenses()).then(() => {
            renderApp()
            if (history.location.pathname === '/') {
                // User is on the login page
                history.push('/dashboard')
            }
        })
    } else {
        renderApp()
        history.push('/')
    }
})
