<template>
  <li :class="['tab',{ 'is-active' : active}]" v-on="$listeners">
    <slot />
  </li>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  }

}
</script>

<style lang="scss" scoped>

$green-seakun: #52AF9C !default;

.tab {
  --animation-time: 200ms;
  position: relative;
  overflow: hidden;
  color: $green-seakun;
   cursor: pointer;
}
.tab::after {
  content: '';
  display: block;
  bottom: 0;
  left: 0;
  width: 100%;
  height: var(--underline-size, 2px);
  position: absolute;
  background-color: var(--underline-color, currentColor);
  transition:
    transform ease var(--animation-time, 200ms),
    opacity ease 0ms 200ms;
  transform: translateX(100%);
  opacity: 0;
}

.tab:hover ~ .tab::after {
  transform: translateX(-100%);
   color: $green-seakun!important;
}

.tabs-wrapper:not(:hover) .tab:not(.is-active)::after {
  transform: translateY(100%);
}

.tabs:hover .tab:hover::after,
.tabs-wrapper:hover .tabs:hover .tab:hover::after {
  transition-delay: 0ms, 0ms;
}

.tab.is-active{
    color: $green-seakun!important;
}

.tab.is-active::after,
.tab:hover::after {
  transform: translateX(0%);
  opacity: 1;
  color: $green-seakun!important;

}

.tabs-wrapper {
  display: flex;
  justify-content: center;
  background-color: #ecf0f1;
  border-radius: 6px 6px 0 0;
}

.tabs-content {
  height: 200px;
  border-radius: 0 0 6px 6px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 90px;
}

.tabs {
  display: inline-flex;
  justify-content: center;
  margin:0px;
  padding-left:0px;
}

.tab {
  --underline-color: #86D0C1;
  --underline-size: 5px;

  color: inherit;
  font-family: system-ui, sans-serif;
  padding: 20px;
  text-decoration: none;
  white-space: nowrap;
  line-height: 1;
}

</style>
