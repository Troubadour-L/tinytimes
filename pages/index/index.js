import globalStore from '../../stores/globalStores';

Page({
  data: {
    current: 0,
    customBodyVisible: false,
    items: [{
      title: "综合排序",
      subTitle: "描述文案",
      content: "西红柿",
    }, {
      title: "浏览最多",
      subTitle: "描述文案",
      content: "蚂蚁",
    },
    {
      title: "评分最高",
      subTitle: "描述文案",
      content: "蚂蚁",
    },
    {
      title: "销量最多",
      subTitle: "描述文案",
      content: "蚂蚁",
    }],
    lottie: {
      id: 'lottie-1',
      desc: 'Django自动播放,低端设备降级',
      autoplay: true,
      path: 'https://mdn.alipayobjects.com/huamei_kvagri/afts/file/A*zpzdSpsu480AAAAAAAAAAAAADsSCAQ',
      placeholder: 'https://mdn.alipayobjects.com/huamei_kvagri/afts/img/A*0f-3QYPxpssAAAAAAAAAAAAADsSCAQ/original',
      optimize: 'true',
      repeatCount: -1,
      assetsPath: 'https://gw.alipayobjects.com/os/lottie-asset/bb/data.json/'
    },
    itemsCustom: [{
        title: '同城资讯',
        icon: 'https://mdn.alipayobjects.com/huamei_kvagri/afts/img/A*uXGaTYfr8vcAAAAAAAAAAAAADsSCAQ/original',
        tag: '1',
      },
      {
        title: '同城商圈',
        icon: 'https://mdn.alipayobjects.com/huamei_kvagri/afts/img/A*FjuRRaFsNc4AAAAAAAAAAAAADsSCAQ/original',
      },
      {
        title: '跳蚤市场',
        icon: 'https://mdn.alipayobjects.com/huamei_kvagri/afts/img/A*xiHCS6VrpLkAAAAAAAAAAAAADsSCAQ/original',
        tag: '新',
      },
      {
        title: '限时折扣',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*now3Q4h5DH8AAAAAAAAAAAAAARQnAQ',
        isLottie: true,
        id: 'lottie-1',
        desc: 'Django自动播放,低端设备降级',
        autoplay: true,
        path: 'https://mdn.alipayobjects.com/huamei_kvagri/afts/file/A*zpzdSpsu480AAAAAAAAAAAAADsSCAQ',
        placeholder: 'https://mdn.alipayobjects.com/huamei_kvagri/afts/img/A*0f-3QYPxpssAAAAAAAAAAAAADsSCAQ/original',
        optimize: 'true',
        repeatCount: -1,
        assetsPath: 'https://gw.alipayobjects.com/os/lottie-asset/bb/data.json/'
      }
    ],
  },
  async onLoad(query) {
    globalStore.bind(this, '$data');
    console.log(globalStore.data.title, '111')
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    const json = await my.request({
      url: 'https://api.apiopen.top/api/sentences',
      success: (res) => {
        console.log(res.data.result);
      }
    })
  },
  onReady() {
    // 页面加载完成
    var lottieContext = my.createLottieContext(this.data.lottie.id);
    lottieContext.play()

    this.handleOpen()
  },
  onShow() {
    // 页面显示
    // handleOpen()

  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },

  onSwipeChange(e) {
    this.setData({
      current: e.detail.current,
    });
  },
  onChange(current) {
    this.setData({
      current,
    });
  },
  handleTapItem(item) {
    my.alert({
      title: '点击了',
      content: JSON.stringify(item)
    });
  },
  handleOpen() {
    console.log('lsw');
    this.setData({
      customBodyVisible: true
    });
  },
  handleClose() {
    this.setData({
      customBodyVisible: false,
    });
  },

});
