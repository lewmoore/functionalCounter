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