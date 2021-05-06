<template>
  <div>
    <nav-bar class="home-navbar"
      ><template v-slot:centenslot><div>购物街</div></template></nav-bar
    >
    <home-swiper :banners="banners" />
    <re-commend-view :recommends="recommends" />
    <featrue-view />
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']" />

    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
      <li>32</li>
      <li>33</li>
      <li>34</li>
      <li>35</li>
      <li>36</li>
      <li>37</li>
      <li>38</li>
      <li>39</li>
      <li>40</li>
      <li>41</li>
      <li>42</li>
      <li>43</li>
      <li>44</li>
      <li>45</li>
      <li>46</li>
      <li>47</li>
      <li>48</li>
      <li>49</li>
      <li>50</li>
    </ul>
  </div>
</template>

<script>
//公共组件
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabcontrol/TabControl'

//本页面的组件
import HomeSwiper from './childrencpn/HomeSwiper'
import FeatrueView from './childrencpn/FeatrueView'
import ReCommendView from './childrencpn/ReCommendView'

//导入封装的方法。
import {GetRequestData,GetHomeGoods} from 'network/home'

export default {
  name:'Home',
  components:{
    NavBar,
    TabControl,
    HomeSwiper,
    ReCommendView,
    FeatrueView
  },
  data() {
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      }
    }
  },
  //生命周期函数，主页创建时就执行
  created(){
    //调用获取轮播图等数据的方法
    this.GetRequestData();
    
    //第一次创建时把 流行、新款、精选的数据都请求一页
    this.GetHomeGoods('pop');
    this.GetHomeGoods('new');
    this.GetHomeGoods('sell');
  },
  methods: {
    //获取轮播图等数据。
    GetRequestData(){
        GetRequestData().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    //获取首页数据方法 因为这里是抽离到methods封装，所以可以在外层传递参数，决定调用时查询哪个类型的数据
    GetHomeGoods(type){
      //动态获取数据页码：根据传进来的对应type获取到data对应的goods中的数组数据。然后获取他的页码，+1，代表了执行网络请求时，请求下一页的数据
      const page = this.goods[type].page +1
      //调用获取首页数据的封装方法,然后根据传进去的数据，.then执行网络请求
      GetHomeGoods(type,page).then(res => {
        //把请求到的数据赋值给data中的goods。并把页码+1
        //push(...res.data.list)解释：...代表了可以传入特别多个的数据，然后内部会依次将里面的元素一个一个取出并保存到对应数组中。
        //这样写的话代表 每次根据当前页码请求到的数据，都会依次追加到原来的list中。push的原义就是：在数组中添加新元素
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    },
  },
}
</script>

<style>
.home-navbar {
  background: #ff8e96;
  text-align: center;
  color: #fff;
}
.tab-control {
  position: sticky;
  top: 40px;
}
</style>
