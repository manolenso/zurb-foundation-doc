'use babel'

import { CompositeDisposable } from 'atom'

export default {

  activate() {
    atom.commands.add('atom-workspace', {
        'zurb-doc:doc': () => this.search()
    })
  },

  search() {
    var shell = require('shell')
    var wordToSearchFor = atom.workspace.getActiveTextEditor().getSelectedText() || atom.workspace.getActiveTextEditor().getWordUnderCursor()
    var grammar = atom.workspace.getActiveTextEditor().getGrammar().name;

    shell.openExternal('http://foundation.zurb.com/sites/docs/' + wordToSearchFor + '.html')
  }

}
