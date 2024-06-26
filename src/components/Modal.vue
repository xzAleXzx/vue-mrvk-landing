<script>
  export default  {
    props: {
      show: Boolean
    }
  }
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="custom-modal-mask" @mousedown.self="$emit('close')">
      <div class="custom-modal-container">
        <div class="custom-modal-content">
          <div class="custom-modal-header">
            <slot name="header">default header</slot>
          </div>

          <div class="custom-modal-body">
            <slot name="body">
              default body
              <button @click="$emit('close')">Ok</button>
            </slot>
          </div>

          <button
            class="custom-modal-default-button"
            @click="$emit('close')"
          >
            <img src="../assets/images/close-icon-modal.svg" alt="modalClose">
          </button>
        </div>

      </div>
    </div>
  </Transition>
</template>

<style>

</style>