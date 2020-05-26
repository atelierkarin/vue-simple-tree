# Simple Tree

Define the tree structure by the following, specify the target node by adding `type: "target"`

```
[
  {
    id: "Tree1",
    type: "t1",
    text: "This is tree 1",
    children: [
      {
        id: "Tree1-1",
        type: "cat",
        text: "This is subtree 1",
        parent: "Tree1",
        children: [
          {
            id: "Tree1-1-1",
            type: "target",
            text: "This is subtree 1-1",
            parent: "Tree1-1",
          },
          {
            id: "Tree1-1-2",
            type: "target",
            text: "This is subtree 1-2",
            parent: "Tree1-1",
          },
        ],
      },
      {
        id: "Tree1-2",
        type: "target",
        text: "This is subtree 2",
        parent: "Tree1",
      },
    ],
  },
]
```

Then pass the tree by `data` and get the selected nodes by `v-model`

```
<simple-tree :data="tree" v-model="selected" />
```
