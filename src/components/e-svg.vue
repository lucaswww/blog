<template>
  <svg class="icon" aria-hidden="true" :font-size="size + 'px'">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
export default {
	name: 'e-svg',
	props: {
		name: {
			type: String,
			required: true
		},
		size: {
			type: Number,
			default: 24
		}
	}
};
</script>

<style scoped>
/* symbol icon */
.icon {
  overflow: hidden;
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: -0.15em;
}
</style>
