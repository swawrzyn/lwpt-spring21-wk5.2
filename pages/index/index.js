// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    restaurants: [],
    baia: {},
  },
  // 事件处理函数
  onLoad() {
    const self = this;
    console.log('this one is first')
    let Restaurants = new wx.BaaS.TableObject('restaurants_sp21')
    
    // Restaurants.find().then(
    // (res) => {
    //   // success function
    //   // you have access to res
    //   console.log('result', res)
    //   self.setData({
    //     restaurants: res.data.objects
    //   })
    //   console.log('this one is last')
    // },
    // (err) => {
    //   // fail function
    //   console.log('err', err)
    // })

    // console.log('this one is second.')

    const baiaId = '6059e80ebc331f03dae16752'

    Restaurants.get(baiaId).then((res) => {
      console.log('res', res)
      self.setData({
        baia: res.data
      })
    }, (err) => {

    })

  },
})
