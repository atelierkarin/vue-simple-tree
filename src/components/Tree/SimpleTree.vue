<template>
  <div class="simple-tree-main tree">
    <div
      v-for="t in data"
      :key="t.id"
      :id="'treeview-' + t.id"
      class="treeview"
      :class="'treeview-' + t.id"
    >
      <ul class="list-group">
        <tree-element
          :nodeData="t"
          :checkedNodes="checkedNodes"
          @check="onCheck"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import TreeElement from "./TreeElement";

export default {
  components: {
    TreeElement,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    value: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    checkedNodes(v) {
      this.$emit("input", v);
    },
    value(v) {
      if (JSON.stringify(this.checkedNodes) !== JSON.stringify(v)) {
        this.checkedNodes = v;
      }
    },
  },
  methods: {
    onCheck(data) {
      const targetNodes = this.getAllTargetNodes(data.node);
      this.setCheckStatus(targetNodes, data.newValue);
    },

    getAllTargetNodes(node) {
      if (node.type === "target") {
        return [node.id];
      } else {
        if (node.children && node.children.length > 0) {
          let targetNodes = [];
          node.children.forEach((child) => {
            targetNodes = [...targetNodes, ...this.getAllTargetNodes(child)];
          });
          return targetNodes;
        } else {
          return [];
        }
      }
    },

    setCheckStatus(ids, value) {
      if (!value) {
        this.checkedNodes = this.checkedNodes.filter((cn) => !ids.includes(cn));
      } else {
        this.checkedNodes = [...new Set([...this.checkedNodes, ...ids])];
      }
    },
  },
  created() {
    this.checkedNodes = this.value;
  },
  data() {
    return {
      checkedNodes: [],
    };
  },
};
</script>

<style>
.treeview .list-group {
  border-radius: 4px;
  overflow: hidden;
  border-top: none;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}

.treeview .list-group-item {
  cursor: pointer;
  border-top-right-radius: 0px !important;
  border-top-left-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
  border-bottom-left-radius: 0px !important;

  border: none !important;
  border-top: 1px solid #ddd !important;
  border-left: none !important;
  border-right: none !important;
  border-bottom: none !important;
}
.treeview span.indent {
  margin-left: 10px;
  margin-right: 10px;
}
.treeview span.spacing {
  margin-left: 2px;
  margin-right: 2px;
}
.treeview span.icon {
  width: 12px;
  margin-right: 5px;
}
.treeview .node-disabled {
  color: silver;
  cursor: not-allowed;
}
.treeview .list-group-item:not(.node-disabled):hover {
  background-color: #f5f5f5;
}
</style>
