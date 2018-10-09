import hyperscriptHelper from 'hyperscript-helpers'
import { h, diff, patch } from 'virtual-dom'
import createElement from 'virtual-dom/create-element'

const { div, button } = hyperscriptHelper(h)

const initNumber = 0 

const MESSAGES = {
    ADD: 'Add',
    MINUS: 'Minus',
}

const view = (dispatch, number) => {
    return div([
        div({ className: 'mv2' }, `Count: ${number}`),
        button({ className: 'pv1 ph2 mr2', 
        onclick: () => dispatch(MESSAGES.ADD) } , '+'),
        button({ className: 'pv1 ph2',
        onclick: () => dispatch(MESSAGES.MINUS) }, '-'),
    ])
}

const update = (buttonClicked, number) => {
    if (buttonClicked == MESSAGES.ADD) {
        return number + 1
    } else if (buttonClicked == MESSAGES.MINUS) {
        return number - 1 
    } else {
        return number
    }
}

// impure function below

const app = (initNumber, update, view, node) => {
    let number = initNumber
    let currentView = view(dispatch, number)
    let rootNode = createElement(currentView)
    node.appendChild(rootNode)

    function dispatch(buttonClicked) {
        number = update(buttonClicked, number)
        const updatedView = view(dispatch, number)
        const patches = diff(currentView, updatedView)
        rootNode = patch(rootNode, patches)
        currentView = updatedView
    }
}

const rootNode = document.getElementById('app')

app(initNumber, update, view, rootNode)