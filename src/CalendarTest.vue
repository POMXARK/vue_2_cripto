<template>
  <div>
    <label for="example-input"></label>
    <b-input-group class="mb-3">
      <b-input-group-append>
        <b-form-datepicker
          v-model="value_"
          locale="ru-RU"
          aria-controls="example-input"
        ></b-form-datepicker>
      </b-input-group-append>
    </b-input-group>
    <p class="mb-1">Value: '{{ value_ }}'</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value_: '',
        formatted: '',
        selected: ''
      }
    },
    methods: {
      onContext(ctx) {
        // The date formatted in the locale, or the `label-no-date-selected` string
        this.formatted = ctx.selectedFormatted
        // The following will be an empty string until a valid date is entered
        this.selected = ctx.selectedYMD
      }
    }
  }
</script>