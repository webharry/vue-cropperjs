<template>
  <div class="contaner">
    <button class="cropBtn" @click="show = true">点击进行截图</button>
    <!-- <img v-show="cropImg" :src="cropImg" alt=""> -->
    <div class="crop-box" v-if="show" @touchmove.prevent>
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
      <div class="crop-btn">
        <a href="javascript:;" class="cancel" @click="cancel">取消</a>
        <a href="javascript:;" class="submit" @click="submit">确定</a>
      </div>
    </div>
  </div>
</template>
<script>
import { setTimeout } from "timers";
export default {
  name: "demo1",
  data() {
    return {
      src: require("../assets/123.jpeg"),
      width: document.body.clientWidth,
      height: 250,
      autoCropArea: 1,
      show: false,
      cropImg: ""
    };
  },
  methods: {
    submit() {
      this.$refs.cropper.getCropBlob().then(base64 => {
        let formdata = new FormData();
        formdata.append("file", base64);
        console.log(formdata);
        //以下写上传文件接口逻辑
        setTimeout(() => {
          //上传成功，返回裁剪后的图片
          this.cropImg = require("../assets/123.jpeg");
          this.show = false;
        }, 100);
      });
    },
    cancel() {
      this.show = false;
    }
  }
};
</script>
<style lang="less" scoped>
.cropper {
  margin: 130px auto 60px;
  max-width: 679px;
  max-height: 509px;
}
.crop-box {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(44, 44, 44, 1);
}
.crop-btn {
  padding: 41px 44px;
  overflow: hidden;
  > a {
    display: inline-block;
    height: 44px;
    font-size: 34px;
    font-family: "PingFang SC";
    font-weight: 500;
    color: rgba(255, 254, 254, 1);
    line-height: 44px;
    text-decoration: none;
  }
  .submit {
    float: right;
  }
  .cancel {
    float: left;
  }
}
.cropBtn {
  border: 1px solid #ddd;
}
</style>
