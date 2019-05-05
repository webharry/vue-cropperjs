# vue-cropperjs
vue基于cropperjs，实现裁剪图片组件封装，图片裁剪组件支持移动端和PC端。

## install
```
npm install vue-cropperjs --save-dev
```
## use
1、在main.js文件全局引入组件vue-cropperjs:

```js
import Crop from "vue-cropperjs";
```

2、使用组件：

```html
<crop
        ref="cropper"
        class="cropper"
        :src="src"
        :auto-crop-area="1"
        :movable="true"
        :zoomOnWheel="true"
        :zoomOnTouch="true"
        :minContainerHeight="height"
        :cropBoxResizable="false"
        :cropBoxMovable="false"
        :minCropBoxWidth="width"
        :toggleDragModeOnDblclick="false"
        :autoCropArea="autoCropArea"
        :guides="false"
        :highlight="false"
      />
```

### 源码
See [github](https://github.com/webharry/vue-cropperjs).
