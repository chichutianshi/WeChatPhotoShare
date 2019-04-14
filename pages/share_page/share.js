const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uploaderList: [],
    uploaderNum: 0,
    showUpload: true,
    max: 300,
    topic: '写下你的想法，和大家一起分享吧！',
    thirdSessionKey: '',
  },
  // 删除图片
  clearImg: function(e) {
    var nowList = []; //新数据
    var uploaderList = this.data.uploaderList; //原数据

    for (let i = 0; i < uploaderList.length; i++) {
      if (i == e.currentTarget.dataset.index) {
        continue;
      } else {
        nowList.push(uploaderList[i])
      }
    }
    this.setData({
      uploaderNum: this.data.uploaderNum - 1,
      uploaderList: nowList,
      showUpload: true
    })
  },
  //展示图片
  showImg: function(e) {
    var that = this;
    wx.previewImage({
      urls: that.data.uploaderList,
      current: that.data.uploaderList[e.currentTarget.dataset.index]
    })
  },
  //上传图片
  upload: function(e) {
    var that = this;
    wx.chooseImage({
      count: 9 - that.data.uploaderNum, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'],
      // 可以指定来源是相册还是相机，默认二者都有
      success: function(res) {
        console.log(res)
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        let tempFilePaths = res.tempFilePaths;
        let uploaderList = that.data.uploaderList.concat(tempFilePaths);
        if (uploaderList.length == 9) {
          that.setData({
            showUpload: false
          })
        }
        that.setData({
          uploaderList: uploaderList,
          uploaderNum: uploaderList.length,
        })
      }
    })
  },

  //提交照片到服务器
  submit: function(e) {
    let that = this;
    let uploaderList = that.data.uploaderList
    let uploaderNum = that.data.uploaderNum
    let thirdSessionKey = that.data.thirdSessionKey
    let photoId
    console.log(thirdSessionKey)
    console.log(uploaderList)
    console.log("uploaderNum:" + uploaderNum)
    for (let i = 0; i < uploaderNum; i++) {
      //上传第一张图片
      if (i == 0) {
        wx.uploadFile({
          url: 'https://www.xqdiary.top/photoShare/fileCtrl/upPicture',
          filePath: uploaderList[i],
          header: {
            "Content-Type": "multipart/form-data",
          },
          formData: {
            'thirdSessionKey': thirdSessionKey,
          },
          success: (res) => {
            if (res.data.photoId != null && res.data.photoId != "") {
              photoId = res.data.photoId
              console.log(photoId)
            } else {

            }
          },
          fail: (resf) => {
            console.log("调用接口失败!")
          },
        })
      } else {
        wx.uploadFile({
          url: 'https://www.xqdiary.top/photoShare/fileCtrl/upPicture',
          filePath: uploaderList[i],
          header: {
            "Content-Type": "multipart/form-data",
          },
          formData: {
            "photoId": photoId
          },
          success: (res1) => {

          },
        })
      }
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this
    wx.getStorage({
      key: 'thirdSessionKey',
      success: function(res) {
        // console.log(res.data)
        that.setData({
          thirdSessionKey: res.data
        })
      },
      fail: function(res) {
        wx.navigateTo({
          url: '../login_page/login',
        })
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
    let that = this
    if (that.data.thirdSessionKey == '') {
      wx.getStorage({
        key: 'thirdSessionKey',
        success: function(res) {
          that.setData({
            thirdSessionKey: res.data
          })
        },
      })
    }
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

  },
  inputs: function(e) {
    // 获取输入框的内容
    var value = e.detail.value;
    // 获取输入框内容的长度
    var len = parseInt(value.length);

    if (len > this.data.max) return;
    // 当输入框内容的长度大于最大长度限制（max)时，终止setData()的执行
    this.setData({
      currentWordNumber: len //当前字数  
    });

  }
})