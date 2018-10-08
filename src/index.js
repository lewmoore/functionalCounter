import hyperscript from "hyperscript"
import hyperscriptHelper from 'hyperscript-helpers'

const { div, button } = hyperscriptHelper(hyperscript)

const initNumber = 0 

const view = (dispatch, number) => {
    return div([
        div({ className: 'mv2' }, `Count: ${number}`),
        button({ className: 'pv1 ph2 mr2', 
        onclick: () => dispatch('Add') } , '+'),
        button({ className: 'pv1 ph2',
        onclick: () => dispatch('Minus') }, '-'),
    ])
}

const update = (buttonClicked, number) => {
    if (buttonClicked == 'Add') {
        return number + 1
    } else if (buttonClicked == 'Minus') {
        return number - 1 
    } else {
        return number
    }
}

// impure function below

const app = (initNumber, update, view, node) => {
    let number = initNumber
    let currentView = view(dispatch, number)
    node.appendChild(currentView)

    function dispatch(buttonClicked) {
        number = update(buttonClicked, number)
        const updatedView = view(dispatch, number)
        node.replaceChild(updatedView, currentView)
        currentView = updatedView
    }
}

const rootNode = document.getElementById('app')

app(initNumber, update, view, rootNode)

// rootNode.appendChild(view(update('Add', initNumber))) 