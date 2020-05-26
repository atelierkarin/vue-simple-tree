<template>
  <li class="list-group-item node-tree">
    <span class="indent" v-for="l in levelArray" :key="l"
      ><span class="spacing"
    /></span>
    <button
      class="btn btn-default expand-btn"
      v-if="haveChildren"
      @click="onExpand"
    >
      {{ expanded ? "-" : "+" }}
    </button>
    <span class="indent" v-else />
    <span class="spacing" />
    <button
      class="btn btn-default checked-status"
      href="javascript:;"
      @click="onCheck"
      :class="checkIcon"
    ></button>
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
      if (this.checked === "all") return "checked";
      else if (this.checked === "some") return "half";
      else return "unchecked";
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
.simple-tree-main .checked-status {
  display: inline-block;
  width: 32px;
  height: 32px;
}

.simple-tree-main .expand-btn {
  width: 32px;
  height: 32px;
}

.simple-tree-main .checked-status.checked {
  background: url("~@/assets/checked.png") no-repeat;
}

.simple-tree-main .checked-status.unchecked {
  background: url("~@/assets/unchecked.png") no-repeat;
}

.simple-tree-main .checked-status.half {
  background: url("~@/assets/half.png") no-repeat;
}
</style>
