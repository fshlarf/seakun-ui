<template>
  <span>
    <div
      class="accordion-header collapsed"
      data-toggle="collapse"
      aria-expanded="false"
      :data-target="`#${name}`"
      :aria-controls="name"
    >
      <h5>
        {{ title }}
        <span class="icon-toggle"></span>
      </h5>
    </div>
    <div class="collapse accordion-body" data-parent="#accordion" :id="name">
      <slot></slot>
    </div>
  </span>
</template>

<script>
export default {
  props: {
    name: String,
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.accordion-header {
  position: relative;
  cursor: pointer;
  padding: 0.75rem 0;
  .icon-toggle {
    color: #86d0c1;
    &::before {
      top: 1rem;
      right: 0.5rem;
      content: '';
      position: absolute;
      display: block;
      width: 15px;
      height: 2px;
      font-size: 1rem;
      -webkit-transition: all 0.4s;
      -moz-transition: all 0.4s;
      -o-transition: all 0.4s;
      transition: all 0.4s;
    }
    &::after {
      top: 1rem;
      right: 0.5rem;
      content: '';
      position: absolute;
      display: block;
      width: 15px;
      height: 2px;
      font-size: 1rem;
      -webkit-transition: all 0.4s;
      -moz-transition: all 0.4s;
      -o-transition: all 0.4s;
      transition: all 0.4s;
    }
  }
  h5 {
    margin-bottom: 0;
    padding-right: 2rem;
    font-size: 1.25rem;
    .icon-toggle:before {
      top: 1.5rem;
    }
    .icon-toggle:after {
      top: 1.5rem;
    }
  }
  &[aria-expanded='false'] {
    .icon-toggle {
      &::before {
        background: #999;
        transform: rotate(-180deg);
      }
      &::after {
        background: #999;
        transform: rotate(-90deg);
      }
    }
  }
  &[aria-expanded='true'] {
    h5 {
      color: #86d0c1;
    }
    .icon-toggle {
      &::before {
        background: #86d0c1;
        transform: rotate(0deg);
      }
      &::after {
        background: #86d0c1;
        transform: rotate(0deg);
      }
    }
  }
}
.accordion-body {
  color: #999;
  font-size: 0.9rem;
}
</style>
