<template>
  <div class="nav-bar">
    <div class="leftbox"><slot name="leftslot"></slot></div>
    <div class="centenbox"><slot name="centenslot"></slot></div>
    <div class="rightbox"><slot name="rightslot"></slot></div>
  </div>
</template>

<script>
  export default {
    
  };
</script>

<style>
  .nav-bar{
    display: flex;
    height: 40px;
    line-height: 40px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
    
    position: fixed;
    left: 0;
    right: 0;
    top:0;
    z-index: 2;
  }
  .leftbox,.rightbox{
    width: 17%;
  }
  .centenbox{
    flex: 1;
  }
</style>
