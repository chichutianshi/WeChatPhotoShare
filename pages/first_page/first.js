Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectRow: 0,
    note: [],
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
        var temp = res.data;
        wx.request({
          url: 'http://localhost:8080/uuidLogin',
          data:{
            thirdSessionKey: temp
          },
          success: (res) => {
            //console.log("状态值"+res.data.status)
            if (res.data.status==0){
              that.setData({
                thirdSessionKey: temp
              })         
            }else{
              wx.navigateTo({
                url: '../login_page/login',
              })
            }
          }
        })

        
      },
      fail: function(res) {
        wx.navigateTo({
          url: '../login_page/login',
        })
      },
      complete: function() {
        // console.log(that.data.note)
        if (that.data.note.length == 0) {
          //console.log("come in")
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
                selectRow: that.data.selectRow + 15
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