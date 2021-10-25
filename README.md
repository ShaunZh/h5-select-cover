## 下拉选项遮挡输入框的问题

对于文本输入框之所以不会遮挡，是因为文本输入框进行输入时，弹出的是系统级的输入法键盘，所以不会遮挡。但是对于下拉选项而言，弹出框的下拉选项是我们自己实现的，也就不是系统级的，所以，系统不会对其进行处理，如：将聚焦的输入框推动到可视范围之内，因此，会导致遮挡问题。

对于这个问题的解决需要分为以下几步：

1. 如果滚动区的高度小于屏幕的高度，说明需要在底部填充空元素 div 来将页面撑开，产生垂直滚动条，以便将输入框顶上去，这个 div 的高度为弹出框的高度，暂定为 popH，对于这种情况，到这一步即可解决遮挡的问题
2. 如果滚动区的高度大于屏幕的高度，则需要按照如下流程进行处理：

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2fe64168d13f4a04b539365b3f5422eb~tplv-k3u1fbpfcp-watermark.image?)

效果如下：

1. 滚动区小于屏幕高度
   <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fda6b5778b904a2ba7c724997a2cb141~tplv-k3u1fbpfcp-watermark.image?" width="49%" height="50%"  />

2. 滚动区的高度与屏幕高度相当

<img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5afbe77f7cd34b50ac3f7c6f40b3bdda~tplv-k3u1fbpfcp-watermark.image?" width="49%" height="50%"  />

3. 滚动区高度大于屏幕高度

![example3.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dbaa67e8469c43508789633b9b5c6829~tplv-k3u1fbpfcp-watermark.image?)
