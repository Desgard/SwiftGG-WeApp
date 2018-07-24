//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: '更新中',
        title: '欢迎来到 SwiftGG 翻译组，这里每周都有优质翻译文章等你来看',
        author: 'author: 冬瓜',
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
    onPullDownRefresh: function() {
        console.log("onPulldownrefresh");
    },
})