<template>
  <div id="app">
    <simple-tree :data="tree" v-model="selected" />
    {{ selected }}
  </div>
</template>

<script>
import SimpleTree from "./components/Tree/SimpleTree";

export default {
  name: "Tree",
  components: {
    SimpleTree,
  },
  data() {
    return {
      selected: [],
      tree: [
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
      ],
    };
  },
};
</script>
