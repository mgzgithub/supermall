//防抖函数
export function debounce(func,delay){
  let timer = null
  return function(...args){
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this,args)
    }, delay);
  }
}

//时间戳转换函数自封装
export function formatDate(date, fmt) {
  //y+ 一个或多个y
  //y* 0个或多个y
  //y？ 0个或1个y
  //test	检索字符串中指定的值。返回 true 或 false。
  if (/(y+)/.test(fmt)) {
    //RegExp 对象表示正则表达式，它是对字符串执行模式匹配的强大工具。
    //replace	替换与正则表达式匹配的子串。
    //RegExp.$1代表用户传进来的fmt（yyyy），
    //(date.getFullYear() + '')  把时间戳转换成date后，date本身是个数字。所以这里要获取他的年分，然后+ ''空字符串，转成字符串格式
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    //substr(start,length) 是字符串提取。第一个参数是下标，从哪里开始截取，默认从头开始，如是负数，则从尾开始算，
    //下标如是0，则表示不截取。第二个参数是限制截取出来的字符串长度。空格也算一个字符。
  }
  let o = {
    //对应的匹配获取传进来的date中月日时分秒函数
    'M+': date.getMonth() + 1,//月份不能为0所以得+1 表示最小1月
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };

//K是O里面的各个属性，即m+ d+ h+.....可以理解为索引
  for (let k in o) {
    //如果这个用o里面的k属性新创建的正则对象在传进来的参数fmt里存在，则将fmt替换为传进来对应的日期格式。
    if (new RegExp(`(${k})`).test(fmt)) {
      //比如是 'M+': date.getMonth() 作用是把这个的最终值变成string格式
      let str = o[k] + '';
      //这行不知道咋解释..总之是替换什么东西吧
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  //返回最终的格式
  return fmt;
};

//封装补零算法函数
function padLeftZero (str) {
  //比如说传进来的str是4s   
  //      00 + 4  004 截取 str（4）是一个长度。截取后就是04 最终成为04秒   妙啊~！
  return ('00' + str).substr(str.length);
};