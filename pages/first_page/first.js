Page({

  /**
   * 页面的初始数据
   */
  data: {
    note: [{
        instruction: '大脸猫爱吃鱼大脸猫爱吃鱼大脸猫爱吃鱼大脸猫爱吃鱼大脸猫爱吃鱼',
        likeNum: '1',
        show: false,
        nickname: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: 'http://f10.baidu.com/it/u=121654667,1482133440&fm=72',
        avatarURL: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpg'
      },
      {
        name: '大脸猫爱吃鱼',
        heart_num: '2',
        show: false,
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg',
        avatarURL: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpg'
      },
      {
        name: '大脸猫爱吃鱼',
        heart_num: '3',
        show: false,
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg',
        avatarURL: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpg'
      }, {
        name: '大脸猫爱吃鱼',
        heart_num: '4',
        show: false,
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: 'http://f10.baidu.com/it/u=121654667,1482133440&fm=72',
        avatar: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpg'
      },
      {
        name: '大脸猫爱吃鱼',
        heart_num: '5',
        show: false,
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: 'http://f10.baidu.com/it/u=121654667,1482133440&fm=72',
        avatar: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpg'
      },
      {
        name: '大脸猫爱吃鱼',
        heart_num: '6',
        show: false,
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg',
        avatar: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpg'
      },
      {
        name: '大脸猫爱吃鱼',
        heart_num: '7',
        show: false,
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: 'http://img4.imgtn.bdimg.com/it/u=2748975304,2710656664&fm=26&gp=0.jpg',
        avatar: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpg'
      }, {
        name: '大脸猫爱吃鱼',
        heart_num: '8',
        show: false,
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: 'http://img2.imgtn.bdimg.com/it/u=1561660534,130168102&fm=26&gp=0.jpg',
        avatarURL: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpg'
      }
    ],
    selectRow: 0,
    // note: [],
    thirdSessionKey: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this
    wx.getStorage({
      key: 'rawData',
      success: function(res) {
        console.log(res.data)
      },
      // fail:function(res){
      //   wx.navigateTo({
      //     url: '../login_page/login',
      //   })
      // }
    })
    wx.getStorage({
      key: 'thirdSessionKey',
      success: function(res) {
        that.setData({
          thirdSessionKey: res.data
        })
        console.log(res.data)
      },
      fail: function(res) {
        wx.navigateTo({
          url: '../login_page/login',
        })
      },
      complete: function() {
        // console.log(that.data.note)
        if (that.data.note.length == 0) {
          console.log("come in")
          wx.request({
            url: 'http://localhost:8080/loadPhotos',
            data: {
              selectRow: that.data.selectRow,
              thirdSessionKey: ''
            },
            success: (res) => {
              console.log(res.data)
              that.setData({
                note: res.data,
                selectRow:that.data.selectRow+15
              })
              console.log(that.data.selectRow)
            },

            fail: (res) => {
              console.log("请求失败!")
            }
          })
        }
      }
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    let note = this.data.note // 获取原数据
    for (let i in note) {
      // 设置监听回调事件，当元素 .loadImg{{i}},进入页面20px内就触发回调事件，设置图片为真正的图片，通过show控制
      wx.createIntersectionObserver().relativeToViewport().observe('.item-' + i, (ret) => {
        if (ret.intersectionRatio > 0) {
          note[i].show = true
        }
        this.setData({ // 更新数据
          note
        })
      })
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }

})