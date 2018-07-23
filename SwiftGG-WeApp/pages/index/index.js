//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'SwiftGG, 最走心的翻译组',
        title: '这是一个标题',
        author: '作者: 冬瓜',
    },
    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function () {
        console.log("onLoad");
    },
    onShow: function() {
        console.log("onShow");
    },
    getUserInfo: function (e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    }
})