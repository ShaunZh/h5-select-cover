## 下拉选项遮挡输入框的问题

对于文本输入框之所以不会遮挡，是因为文本输入框进行输入时，弹出的是系统级的输入法键盘，所以不会遮挡。但是对于下拉选项而言，弹出框的下拉选项是我们自己实现的，也就不是系统级的，所以，系统不会对其进行处理，如：将聚焦的输入框推动到可视范围之内，因此，会导致遮挡问题。

对于这个问题的解决需要分为以下几步：

1. 如果滚动区的高度小于屏幕的高度，说明需要在底部填充空元素 div 来将页面撑开，产生垂直滚动条，以便将输入框顶上去，这个 div 的高度为弹出框的高度，暂定为 popH，对于这种情况，到这一步即可解决遮挡的问题
2. 如果滚动区的高度大于屏幕的高度，则需要按照如下流程进行处理：

![image.png](https://github.com/ShaunZh/h5-select-cover/blob/main/post-assets/example0.png?)

效果如下：

1. 滚动区小于屏幕高度
   <img src="https://github.com/ShaunZh/h5-select-cover/blob/main/post-assets/example1.gif?" width="49%" height="50%"  />

2. 滚动区的高度与屏幕高度相当
   <img src="https://github.com/ShaunZh/h5-select-cover/blob/main/post-assets/example2.git?" width="49%" height="50%"  />

3. 滚动区高度大于屏幕高度
   <img src="https://github.com/ShaunZh/h5-select-cover/blob/main/post-assets/example3.git?" width="49%" height="50%"  />
