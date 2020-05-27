<template>
  <li class="list-group-item node-tree">
    <span class="indent" v-for="l in levelArray" :key="l"
      ><span class="spacing"
    /></span>
    <button
      class="btn btn-default tree-btn"
      v-if="haveChildren"
      @click="onExpand"
    >
      <span
        class="glyphicon"
        :class="expanded ? 'glyphicon-chevron-down' : 'glyphicon-chevron-right'"
        aria-hidden="true"
      ></span>
    </button>
    <span class="indent" v-else />
    <span class="spacing" />
    <button
      class="btn btn-default tree-btn"
      href="javascript:;"
      @click="onCheck"
    >
      <span class="glyphicon" :class="checkIcon" aria-hidden="true"></span>
    </button>
    <span class="spacing" />
    <span class="star-bc-node-text">{{ displayText }}</span>
  </li>
</template>

<script>
export default {
  props: {
    nodeData: {
      type: Object,
      default: null,
    },
    nodeLevel: {
      type: Number,
      default: 0,
    },
    haveChildren: {
      type: Boolean,
      default: false,
    },
    expanded: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: String,
      default: "none",
    },
    displayText: {
      type: String,
      default: "",
    },
  },
  computed: {
    levelArray() {
      return Array.from(Array(this.nodeLevel).keys());
    },
    checkIcon() {
      if (this.checked === "all") return "glyphicon-ok";
      else if (this.checked === "some") return "glyphicon-minus";
      else return null;
    },
  },
  methods: {
    onCheck() {
      this.$emit("check", {
        node: this.nodeData,
        newValue: this.checked === "all" ? false : true,
      });
    },
    onExpand() {
      this.$emit("expand", this.nodeData);
    },
  },
};
</script>

<style>
.simple-tree-main .tree-btn {
  display: inline-block;
  width: 20px;
  height: 20px;
  padding: 0px;
}
</style>
