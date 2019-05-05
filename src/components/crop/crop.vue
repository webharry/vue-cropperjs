<style lang="css" scoped>
.cropper > img {
    max-width: 100%;
}
</style>

<template>
  <div class="cropper">
    <img ref="img" :src="src" alt="" />
  </div>
</template>

<script>
import "../../utils/canvas-toBlob.js";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";

export default {
  name: "Crop",
  props: {
    src: String,
    preview: [NodeList, HTMLElement, String],
    aspectRatio: {
      type: Number,
      default: 4 / 3
    },
    guides: {
      type: Boolean,
      default: true
    },
    viewMode: {
      type: Number,
      default: 3
    },
    responsive: {
      type: Boolean,
      default: true
    },
    restore: {
      type: Boolean,
      default: true
    },
    checkCrossOrigin: {
      type: Boolean,
      default: true
    },
    checkOrientation: {
      type: Boolean,
      default: true
    },
    modal: {
      type: Boolean,
      default: true
    },
    center: {
      type: Boolean,
      default: true
    },
    highlight: {
      type: Boolean,
      default: true
    },
    background: {
      type: Boolean,
      default: true
    },
    autoCrop: {
      type: Boolean,
      default: true
    },
    autoCropArea: Number,
    movable: {
      type: Boolean,
      default: true
    },
    rotatable: {
      type: Boolean,
      default: true
    },
    scalable: {
      type: Boolean,
      default: true
    },
    zoomable: {
      type: Boolean,
      default: true
    },
    zoomOnTouch: {
      type: Boolean,
      default: true
    },
    zoomOnWheel: {
      type: Boolean,
      default: true
    },
    wheelZoomRatio: Number,
    cropBoxMovable: {
      type: Boolean,
      default: true
    },
    cropBoxResizable: {
      type: Boolean,
      default: true
    },
    toggleDragModeOnDblclick: {
      type: Boolean,
      default: true
    },
    dragMode: {
      type: String,
      default: "move"
    },

    // Size limitation
    minCanvasWidth: Number,
    minCanvasHeight: Number,
    minCropBoxWidth: Number,
    minCropBoxHeight: Number,
    minContainerWidth: Number,
    minContainerHeight: Number,

    // callbacks
    ready: Function,
    cropstart: Function,
    cropmove: Function,
    cropend: Function,
    crop: Function,
    zoom: Function
  },
  mounted() {
    const { src, ...data } = this.$options.props;
    let props = {};

    for (let key in data) {
      if (this[key] !== undefined) {
        props[key] = this[key];
      }
    }

    this.cropper = new Cropper(this.$refs.img, props);
  },
  methods: {
    getCropBlob(isCompress) {
      var u = navigator.appVersion;
      var uc = u.split("UCBrowser/").length > 1 ? 1 : 0;
      //   console.log("uc=", uc);
      var qualityArgument = 0.92;
      if (uc && isCompress) {
        qualityArgument = 0.4;
      } else {
        qualityArgument = 0.92;
      }
      return new Promise((resolve, reject) => {
        this.cropper.getCroppedCanvas().toBlob(
          blob => {
            resolve(blob);
          },
          "image/jpeg",
          qualityArgument
        );
      });
    },
    getCropBase64() {
      return new Promise((resolve, reject) => {
        resolve(this.cropper.getCroppedCanvas().toDataURL());
      });
      // return this.cropper.getCroppedCanvas().toDataURL()
    },
    replace(url, onlyColorChanged = false) {
      return this.cropper.replace(url, onlyColorChanged);
    },
    download() {
      this.getCropBlob().then(blob => {
        let a = document.createElement("a");
        a.setAttribute("href", window.URL.createObjectURL(blob));
        a.setAttribute(
          "download",
          Math.random()
            .toSting(36)
            .slice(2)
        );
        a.click();
      });
    },
    initCrop() {
      return this.cropper.crop();
    },
    getCanvasData() {
      return this.cropper.getCanvasData();
    },
    setCanvasData(data) {
      return this.cropper.setCanvasData(data);
    },
    move(offsetX, offsetY) {
      return this.cropper.move(offsetX, offsetY);
    }
  }
};
</script>
