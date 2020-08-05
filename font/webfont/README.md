阿里巴巴-普惠体-Regular
引用：
#第一步：使用font-face声明字体
```
@font-face {font-family: 'webfont';
    src: url('https://cdn.jsdelivr.net/gh/sw586/xr_cdn/font/webfont/webfont.eot'); /* IE9*/
    src: url('https://cdn.jsdelivr.net/gh/sw586/xr_cdn/font/webfont/webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('https://cdn.jsdelivr.net/gh/sw586/xr_cdn/font/webfont/webfont.woff') format('woff'), /* chrome、firefox */
    url('https://cdn.jsdelivr.net/gh/sw586/xr_cdn/font/webfont/webfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url('https://cdn.jsdelivr.net/gh/sw586/xr_cdn/font/webfont/webfont.svg#webfont') format('svg'); /* iOS 4.1- */
}
```

#第二步：定义使用webfont的样式
```
.web-font{
    font-family:"webfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
```

# 第二步：定义使用webfont的样式
```
<i class="web-font">你要输入的文字</i>
```