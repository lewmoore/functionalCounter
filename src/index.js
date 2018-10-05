import hyperscript from "hyperscript"
import hyperscriptHelper from 'hyperscript-helpers'

const { div, button } = hyperscriptHelper(hyperscript)

const view = (number) => {
    return div([
        div({ className: 'mv2' }, `Count: ${number}`),
        button({ className: 'pv1 ph2 mr2', 
        onclick: (number) => { update(number)}}, '+'),
        button({ className: 'pv1 ph2',
        onclick: (number) => minus(number)}, '-'),
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

const rootNode = document.getElementById('app')

rootNode.appendChild(view(0))