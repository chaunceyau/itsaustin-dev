import { visit } from 'unist-util-visit'
import { slug } from 'github-slugger'
import { toString } from 'mdast-util-to-string'

export default function remarkTocDefinitionTooltips(options) {
  return (tree) =>
    visit(tree, 'definition', (node, index, parent) => {
      console.log('HMM.defintion')
      console.log(node)
      // const textContent = toString(node)
      // options.exportRef.push({
      //   value: textContent,
      //   url: '#' + slug(textContent),
      //   depth: node.depth,
      // })
      // node.type = 'div'
    })
}