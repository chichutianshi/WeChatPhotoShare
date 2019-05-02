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
          //url: 'http://localhost:8080/uuidLogin',
          url: 'https://www.xqdiary.top/sp/uuidLogin',
          data: {
            thirdSessionKey: temp
          },
          success: (res) => {
            //console.log("状态值"+res.data.status)
            if (res.data.status == 0) {
              that.setData({
                thirdSessionKey: temp
              })
            } else {
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
            //url: 'http://localhost:8080/loadPhotos',
            url: 'https://www.xqdiary.top/sp/loadPhotos',
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
              // console.log(that.data.selectRow)
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

  reloadData: function() {
    let that = this
    this.setData({
      note: '',
      selectRow: 0
    })
    wx.request({
      //url: 'http://localhost:8080/loadPhotos',
      url: 'https://www.xqdiary.top/sp/loadPhotos',
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
        // console.log(that.data.selectRow)
      },

      fail: (res) => {
        console.log("请求失败!")
      }
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    console.log('onPullDownRefresh', '下拉刷新....');
    this.reloadData()
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    wx.showLoading({
      title: '加载中...',
    })
    this.loadMore()
  },
  loadMore: function() {
    let that = this
    wx.request({
      //url: 'http://localhost:8080/loadPhotos',
      url: 'https://www.xqdiary.top/sp/loadPhotos',
      data: {
        selectRow: that.data.selectRow,
        thirdSessionKey: ''
      },
      success: (res) => {
        if(res.data!='')
        {
          var newNote = that.data.note.concat(res.data)
          console.log(newNote.length)
          that.setData({
            note: newNote,
            selectRow: that.data.selectRow + 15
          })
          wx.hideLoading()
        }
        else
        {
          wx.hideLoading()
          wx.showToast({
            icon: 'none',
            title: '到底了',
          })
        }
        
        
      },
      fail: (res) => {

      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
  
})