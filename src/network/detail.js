import {request} from './request'

export function GetDetailData(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

//es6创建类。整合数据 使用构造函数
//导出商品详情数据
export class DetailGoods{
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.oldPrice = itemInfo.oldPrice
    this.realPrice = itemInfo.lowNowPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
  }
}

//导出店铺信息数据
export class DetailShop{
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}

//导出商品参数数据封装类
export class DeGoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}