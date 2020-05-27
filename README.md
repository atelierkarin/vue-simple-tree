# Simple Tree

Since a simple bootstrap 3 tree style is needed, I create this library for my usage.
It is expected to have bootstrap 3 CSS enabled when using this component.

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
