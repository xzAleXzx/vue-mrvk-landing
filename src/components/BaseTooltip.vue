<template>
  <div>
    <div :class="['custom-relative', active]"
         :style="`--orange-bg: url(${getImgUrl('images/possibilities/possibilities-circle/orange.png')}); --blue-bg: url(${getImgUrl('images/possibilities/possibilities-circle/blue.png')})`">
      <slot />
    </div>
    <div :class="propsClass">
      <div>
        <span>{{ title }}</span>
        <span>{{ desc1 }}</span>
        <span>{{ desc2 }}</span>
      </div>
      <button @click.stop="handleClose">
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
    active: { active: Boolean },
    getImgUrl: Function,
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    handleClose() {
      this.$emit('close', {
        activeIndex: ''
      })
    },
    handleClickOutside(e) {
      if (this.active.active) {
        if (e.target instanceof HTMLElement && !this.$el.contains(e.target)) {
          this.$emit('close', {
            activeIndex: ''
          })
        }
      }
    }
  }

}
</script>