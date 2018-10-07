import hyperscript from "hyperscript"
import hyperscriptHelper from 'hyperscript-helpers'

const { div, button } = hyperscriptHelper(hyperscript)

const initNumber = 0 

const view = (number) => {
    return div([
        div({ className: 'mv2' }, `Count: ${number}`),
        button({ className: 'pv1 ph2 mr2', 
        onclick: () => {} }, '+'),
        button({ className: 'pv1 ph2',
        onclick: () => {} }, '-'),
    ])
}

const update = (buttonClicked, number) => {
    if (buttonClicked === 'Add') {
        return number + 1
    } else if (buttonClicked == 'Minus') {
        return number - 1 
    } else {
        return number
    }
}

// impure function below

const app = (initNumber, update, view, node) => {
    let model = initNumber
    let currentView = view(model)
    node.appendChild(currentView)
}

const rootNode = document.getElementById('app')

app(initNumber, update, view, rootNode)

// rootNode.appendChild(view(update('Add', initNumber))) 