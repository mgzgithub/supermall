<template>
    <div id="list">
      <div v-for="(item, index) in listData" :key="index" class="item">
        <span class="icon">
          <img :src="item.icon" class="profile-minicon">
        </span>
        <div class="info">{{item.info}}</div>
      </div>
    </div>
</template>

<script>
	export default {
		name: "ListView",
    props: {
		  listData: {
		    type: Array,
        default: []
      }
    },
    data() {
      return {
        imgurlArr:[
          {imgurl:'~assets/img/profile/message.svg'},
          {imgurl:'~assets/img/profile/pointer.svg'},
          {imgurl:'~assets/img/profile/vip.svg'},
          {imgurl:'~assets/img/profile/cart.svg'},
         {imgurl:'~assets/img/profile/shopping.svg'},
        ]
      }
    },
    mounted() {
      // console.log(this.listData);
      console.log(this.listData.icon);
    },
	}
</script>

<style scoped>
  #list {
    background-color: #fff;
    font-size: 15px;
    color: #333;
  }

  #list .item {
    height: 44px;
    line-height: 44px;
    position: relative;
  }

  .icon svg {
    width: 18px;
    height: 18px;
  }

  .item .icon {
    margin-top: 10px;
    position: absolute;
    left: 16px;
    top: -7px;
  }

  .item .info {
    margin-left: 40px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    padding-left: 5px;
  }

  .item:last-of-type .info {
    border-bottom: none;
  }
  .profile-minicon{
    position: relative;
    top: 3px;
    width: 20px;
    height: 30px;
  }
</style>
