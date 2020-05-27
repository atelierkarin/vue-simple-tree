# Simple Tree

Since a simple bootstrap 3 tree style is needed, I create this library for my use.
This Tree will read an array of trees, and reply an array of `id` from the selected "target" nodes.

## Usage

Define the tree structure by the following, specify the target node by adding `type: "target"`

```
[
  {
    id: "Tree1",
    text: "This is tree 1",
    children: [
      {
        id: "Tree1-1",
        text: "This is subtree 1",
        children: [
          {
            id: "Tree1-1-1",
            type: "target",
            text: "This is subtree 1-1",
          },
          {
            id: "Tree1-1-2",
            type: "target",
            text: "This is subtree 1-2",
          },
        ],
      },
      {
        id: "Tree1-2",
        type: "target",
        text: "This is subtree 2",
      },
    ],
  },
]
```

Then pass the tree by `data` and get the selected nodes by `v-model`

```
<simple-tree :data="tree" v-model="selected" />
```
