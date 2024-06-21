<script>
  export default  {
    props: {
      show: Boolean
    }
  }
</script>

<template>
  <Transition name="burger">
    <div v-if="show" class="custom-burger-mask">
      <div class="custom-burger-container">
        <div class="custom-burger-header">
          <slot name="header">default header</slot>
          <button @click="$emit('close')">
            <img src="../assets/images/close-icon-modal.svg" height="14" width="14" alt="close" />
          </button>
        </div>

        <div class="custom-burger-body">
          <slot name="body">
            default body
            <button @click="$emit('close')">Ok</button>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>

</style>