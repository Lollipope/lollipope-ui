<template>
  <button
    class="l-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'l-button--' + type : '',
      buttonSize ? 'l-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
      },
    ]"
  >
    <i class="l-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
export default {
  name: 'LButton',

  inject: {
    lForm: {
      default: '',
    },
    lFormItem: {
      default: '',
    },
  },

  props: {
    type: {
      type: String,
      default: 'default',
    },
    size: String,
    icon: {
      type: String,
      default: '',
    },
    nativeType: {
      type: String,
      default: 'button',
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
  },

  computed: {
    _lFormItemSize() {
      return (this.lFormItem || {}).lFormItemSize
    },
    buttonSize() {
      return this.size || this._lFormItemSize || (this.$ELEMENT || {}).size
    },
    buttonDisabled() {
      // return this.$options.propsData.hasOwnProperty('disabled')
      //   ? this.disabled
      //   : (this.lForm || {}).disabled
      return this.disabled
    },
  },

  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    },
  },
}
</script>
