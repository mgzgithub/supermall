<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    
  };
</script>

<style>
#tab-bar{
		/* 设置弹性布局 */
		display: flex;
		background: #eee;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.2);
		z-index: 3;
	}
</style>
