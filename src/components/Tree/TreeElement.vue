<template>
  <span>
    <tree-node
      :haveChildren="nodeData.children && nodeData.children.length > 0"
      :nodeLevel="nodeLevel"
      :nodeData="nodeData"
      :displayText="nodeData.text"
      :expanded="expanded"
      :checked="checked"
      @check="onCheck"
      @expand="onExpand"
    />
    <template v-if="nodeData.children && nodeData.children.length > 0">
      <tree-element
        v-for="child in nodeData.children"
        :key="child.id"
        :nodeLevel="nodeLevel + 1"
        :nodeData="child"
        :checkedNodes="checkedNodes"
        v-show="expanded"
        @check="onCheck"
      />
    </template>
  </span>
</template>

<script>
import TreeNode from "./TreeNodes/TreeNode";

export default {
  name: "tree-element",
  components: {
    TreeNode,
  },
  props: {
    nodeData: {
      type: Object,
      default: null,
    },
    nodeLevel: {
      type: Number,
      default: 0,
    },
    checkedNodes: {
      type: Array,
      default: [],
    },
  },
  computed: {
    checked() {
      return this.getNodeCheckStatus(this.nodeData);
    },
  },
  methods: {
    onCheck(data) {
      this.$emit("check", data);
    },
    onExpand(data) {
      this.expanded = !this.expanded;
    },

    getNodeCheckStatus(node) {
      if (node.type === "target") {
        let returnValue = this.checkedNodes.includes(node.id) ? "all" : "none";
        return returnValue;
      } else {
        if (node.children && node.children.length > 0) {
          let childrenValue = [];
          node.children.forEach((child) => {
            // Only search if target node or node have children
            if (
              child.type === "target" ||
              (child.children !== undefined && child.children.length > 0)
            )
              childrenValue.push(this.getNodeCheckStatus(child));
          });
          let checkedAll = childrenValue.filter((cv) => cv === "all");
          let checkedSome = childrenValue.filter((cv) => cv === "some");
          let returnValue =
            checkedAll.length === childrenValue.length
              ? "all"
              : checkedAll.length > 0 || checkedSome.length > 0
              ? "some"
              : "none";
          return returnValue;
        } else {
          return;
        }
      }
      return "none";
    },
  },
  data() {
    return {
      expanded: false,
    };
  },
};
</script>
