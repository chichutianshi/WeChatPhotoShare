Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '\n',
    mainComments: [
      { 
        avatarUrl:"http://vpic.video.qq.com/19254956/m0017iz4vuk_ori_1.jpg",
        nickname:"艾莎",
        comment:"骄傲的法拉第哈德公交卡大家嘎斯角度来讲打开了放假啊十点零分ioooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo"
      },
      {
        avatarUrl: "http://vpic.video.qq.com/19254956/m0017iz4vuk_ori_1.jpg",
        nickname: "小白",
        comment: "骄傲的法按时打发角度来讲打开了放啊大厦的噶多噶分"
      },
      {
        avatarUrl: "http://vpic.video.qq.com/19254956/m0017iz4vuk_ori_1.jpg",
        nickname: "小白",
        comment: "骄傲的法按时打发角度来讲打开了放啊大厦的噶多噶分"
      },
      {
        avatarUrl: "http://vpic.video.qq.com/19254956/m0017iz4vuk_ori_1.jpg",
        nickname: "小白",
        comment: "骄傲的法按时打发角度来讲打开了放啊大厦的噶多噶分"
      },
      {
        avatarUrl: "http://vpic.video.qq.com/19254956/m0017iz4vuk_ori_1.jpg",
        nickname: "小白",
        comment: "骄傲的法按时打发角度来讲打开了放啊大厦的噶多噶分"
      },
      {
        avatarUrl: "http://vpic.video.qq.com/19254956/m0017iz4vuk_ori_1.jpg",
        nickname: "小白",
        comment: "骄傲的法按时打发角度来讲打开了放啊大厦的噶多噶分"
      },
      {
        avatarUrl: "http://vpic.video.qq.com/19254956/m0017iz4vuk_ori_1.jpg",
        nickname: "小白",
        comment: "骄傲的法按时打发角度来讲打开了放啊大厦的噶多噶分"
      },
      {
        avatarUrl: "http://vpic.video.qq.com/19254956/m0017iz4vuk_ori_1.jpg",
        nickname: "艾莎",
        comment: "骄傲的法拉第哈德公交卡大家嘎斯角度来讲打开了放假啊十点零分ioooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo"
      },
      {
        avatarUrl: "http://vpic.video.qq.com/19254956/m0017iz4vuk_ori_1.jpg",
        nickname: "小白",
        comment: "骄傲的法按时打发角度来讲打开了放啊大厦的噶多噶分"
      },
      {
        avatarUrl: "http://vpic.video.qq.com/19254956/m0017iz4vuk_ori_1.jpg",
        nickname: "艾莎",
        comment: "骄傲的法拉第哈德公交卡大家嘎斯角度来讲打开了放假啊十点零分ioooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo"
      },
      {
        avatarUrl: "http://vpic.video.qq.com/19254956/m0017iz4vuk_ori_1.jpg",
        nickname: "小白",
        comment: "骄傲的法按时打发角度来讲打开了放啊大厦的噶多噶分"
      },
      {
        avatarUrl: "http://vpic.video.qq.com/19254956/m0017iz4vuk_ori_1.jpg",
        nickname: "艾莎",
        comment: "骄傲的法拉第哈德公交卡大家嘎斯角度来讲打开了放假啊十点零分ioooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo"
      },
      {
        avatarUrl: "http://vpic.video.qq.com/19254956/m0017iz4vuk_ori_1.jpg",
        nickname: "艾莎",
        comment: "骄傲的法拉第哈德公交卡大家嘎斯角度来讲打开了放假啊十点零分ioooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo"
      }
    ],
    imgUrls: [],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,
    isShow: true,
    currentTab: 0,
    showLoading: true,
    topic: '添加评论...',
    intruction: '',
    max: 500,
    avatarURL:'',
    nickname:'',
    likeNum:'',
    islike:'',
    photoId:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log(options.introduce)
    let Urls = JSON.parse(options.photoUrls)
    for (let i = 0; i < Urls.length; i++) {
      Urls[i] = "https://www.xqdiary.top/loadPic/" + options.photoId+"/"+Urls[i]
     // Urls[i] = "http://localhost:8080/loadPic/" + options.photoId + "/" + Urls[i]
    }
    // console.log(Urls[0])
    this.setData({
      imgUrls: Urls,
      intruction:options.introduce,
      avatarURL:options.avatarURL,
      nickname: options.nickname,
      likeNum:options.likeNum,
      islike:options.like,
      photoId:options.photoId
    })
    console.log(options.like)
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


  },

  to_commit:function(e){
    wx.navigateTo({
      url: '../sonRemark_page/sonRemark',
    })
  },

  //展示图片
  previewImage: function (e) {
    // console.log(e.currentTarget.dataset.index)
    wx.previewImage({
      current: this.data.imgUrls[e.currentTarget.dataset.index],
      // 当前显示图片的http链接		  	
      urls: this.data.imgUrls
      // 需要预览的图片http链接列表		
    })
  },

  inputs: function(e) {
    // 获取输入框的内容
    var value = e.detail.value;
    // console.log(value)
    // 获取输入框内容的长度
    var len = parseInt(value.length);

    if (len > this.data.max) return;
    // 当输入框内容的长度大于最大长度限制（max)时，终止setData()的执行
    this.setData({
      currentWordNumber: len, //当前字数  
      introduce: value
    });
  }
})