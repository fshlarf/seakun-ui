<template>
  <div class="label">{{ label }}</div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Baru'
    }
  }
}
</script>

<style>
.label {
  width: 63px;
  background: #E9FAF5;
  border-radius: 39px;
  color: #00BA88;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  padding: 3px 0px !important;
}
</style>