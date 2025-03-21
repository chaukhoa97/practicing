[GFE link](https://www.greatfrontend.com/questions/user-interface/file-explorer)

There are two types of objects – files and directories:

- Files are essentially leaf nodes of the tree, they do not have children and cannot be interacted with.
- Directories can be empty or contain other objects – either files or directories.
- Directories can be expanded and collapsed. Clicking on a directory should toggle its expanded/collapsed state.
- Directories should appear before files. All the items should be sorted alphabetically within their respective categories.

## ARIA

- All tree nodes are contained in or owned by an element with role tree.
- The element with role tree has either a visible label referenced by `aria-labelledby` or a value specified for `aria-label`.
- Each element serving as a tree node has role treeitem.
- Each parent node contains or owns an element with role group.
- Each child node is contained in or owned by an element with role group that is contained in or owned by the node that serves as the parent of that child.
- Each element with role treeitem that serves as a parent node has `aria-expanded` set to false when the node is in a closed state and set to true when the node is in an open state. End nodes do not have the `aria-expanded` attribute because, if they were to have it, they would be incorrectly described to assistive technologies as parent nodes.
- Each treeitem element has a `aria-level`, `aria-setsize`, and `aria-posinset` specified.

## Example Data

(Follow up) Fix data lại theo [Obsidian#Flatten Object...](obsidian://open?vault=MeoBeo&file=Tech%2FReact%2Freact-snippets)

```js
const data = [
  {
    id: 1,
    name: 'README.md',
  },
  {
    id: 2,
    name: 'Documents',
    children: [
      {
        id: 3,
        name: 'Word.doc',
      },
      {
        id: 4,
        name: 'Powerpoint.ppt',
      },
    ],
  },
  {
    id: 5,
    name: 'Downloads',
    children: [
      {
        id: 6,
        name: 'unnamed.txt',
      },
      {
        id: 7,
        name: 'Misc',
        children: [
          {
            id: 8,
            name: 'foo.txt',
          },
          {
            id: 9,
            name: 'bar.txt',
          },
        ],
      },
    ],
  },
]
```
