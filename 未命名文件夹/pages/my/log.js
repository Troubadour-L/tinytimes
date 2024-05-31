Page({
  data: {
    tabs: [
      {
        icon: 'AlipayCircleFill',
        activeIcon: 'AlipayCircleFill',
        text: '首页',
      },
      {
        icon: 'StarOutline',
        activeIcon: 'StarFill',
        text: '收藏',
      },
      {
        icon: 'HeartOutline',
        activeIcon: 'HeartFill',
        text: '喜欢',
      },
    ],

    current: 0,
  },
  handleChange(index) {
    console.log(this.data)
    this.setData({ current: index });
    my.switchTab({
      url: '/pages/index/index'  // url详解请见【路由使用须知】
  })
  },
});
