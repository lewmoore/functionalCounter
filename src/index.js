import hyperscript from 'hyperscript'
import hyperscriptHelper from 'hyperscript-helpers'

const { div } = hyperscriptHelper(hyperscript)

const view = (number) => {
    return div([
        div(`Count: ${numner}`),
        button('+'),
        button('-'),
    ])
}

const rootNode = document.getElementById('app')

rootNode.appendChild(view(0))