<template>
  <div>
    <div :class="['custom-relative', active]">
      <slot />
    </div>
    <div :class="propsClass">
      <div>
        <span>{{ title }}</span>
        <span>{{ desc1 }}</span>
        <span>{{ desc2 }}</span>
      </div>
      <button @mousedown="handleClose">
        <img src="../assets/images/close-icon.svg" alt="closeIcon" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    desc1: String,
    desc2: String,
    propsClass: [String, { active: Boolean }],
    active: { active: Boolean }
  },
  methods: {
    handleClose () {
      this.$emit('close', {
        activeIndex: ''
      })
      this.isShow = !this.isShow;
    }
  },

}
</script>