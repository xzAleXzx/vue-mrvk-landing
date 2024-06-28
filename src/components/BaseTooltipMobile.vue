<template>
  <div :class="['tooltip-card-mobile', active]" @click="handleClose">
    <div class="custom-relative-mobile">
      <div class="gray-element"></div>
      <slot />
      <div class="item-description-mobile">{{ itemDescription }}</div>
      <div class="arrow-right-mobile" :style="`--arrow-right-mobile: url(${getImgUrl('images/possibilities/possibilities-tooltip-mobile/arrow-right.svg')})`"></div>
    </div>
    <div :class="propsClass">
      <div>
        <span>{{ title }}</span>
        <span>{{ desc1 }}</span>
        <span>{{ desc2 }}</span>
      </div>
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
    itemDescription: String
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    handleClose() {
      this.$emit('closeMobile', {
        activeIndexMobile: ''
      })
    },
    handleClickOutside(e) {
      if (this.active.active) {
        if (e.target instanceof HTMLElement && !this.$el.contains(e.target)) {
          this.$emit('closeMobile', {
            activeIndexMobile: ''
          })
        }
      }
    }
  }

}
</script>