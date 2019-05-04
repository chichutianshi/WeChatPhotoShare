Page({
  data: {
    text: '\n',
    items: [],
    startX: 0, //开始坐标
    startY: 0,
    imgUrls: [
      'http://img.qdaily.com/article/article_show/20161107121441NhLlXEWBxeVJ4y2K.jpg?imageMogr2/auto-orient/thumbnail/!755x450r/gravity/Center/crop/755x450/ignore-error/1',
      'https://product.cnc.blzstatic.cn//fe9/8ff4d7bacecf9eeae7c7d18ea51b3354-thumb4-Multiplayer.jpg',
      'http://vpic.video.qq.com/19254956/m0017iz4vuk_ori_1.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true
  },

  onLoad: function (e) {
    var that = this;
    for (var i = 0; i < 3; i++) {
      this.data.items.push({
        content: i + " 向左滑动删除哦",
        isTouchMove: false //默认隐藏删除
      })
    }
    this.setData({
      items: this.data.items
    });
  },

  //手指触摸动作开始 记录起点X坐标
  touchstart: function (e) {
    //开始触摸时 重置所有删除
    this.data.items.forEach(function (v, i) {
      if (v.isTouchMove) //只操作为true的
        v.isTouchMove = false;
    })
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      items: this.data.items
    })
  },

  //滑动事件处理
  touchmove: function (e) {
    var that = this,
      index = e.currentTarget.dataset.index, //当前索引
      startX = that.data.startX, //开始X坐标
      startY = that.data.startY, //开始Y坐标
      touchMoveX = e.changedTouches[0].clientX, //滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY, //滑动变化坐标

      //获取滑动角度
      angle = that.angle({
        X: startX,
        Y: startY
      }, {
          X: touchMoveX,
          Y: touchMoveY
        });
    that.data.items.forEach(function (v, i) {
      v.isTouchMove = false

      //滑动超过30度角 return
      if (Math.abs(angle) > 30) return;
      if (i == index) {
        if (touchMoveX > startX) //右滑
          v.isTouchMove = false
        else //左滑
          v.isTouchMove = true
      }
    })

    //更新数据
    that.setData({
      items: that.data.items
    })
  },

  /**

  * 计算滑动角度

  * @param {Object} start 起点坐标

  * @param {Object} end 终点坐标

  */

  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y

    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },

  //删除事件
  del: function (e) {
    let that = this
    wx.showModal({
      title: '提示',
      content: '确定删除吗?',
      success: function (res) {
        if (res.confirm) {
          // console.log('用户点击确定')
          that.data.items.splice(e.currentTarget.dataset.index, 1)
          that.setData({
            items: that.data.items
          })
        } else if (res.cancel) {
          // console.log('用户点击取消')
        }
      }
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
})