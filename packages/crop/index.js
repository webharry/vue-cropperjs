import Crop from "./crop.vue"

// export default {
//     install: Vue => {
//         Vue.component(Crop.name, Crop)
//     }
// }
// 为组件添加 install 方法，用于按需引入
Crop.install = function (Vue) {
    Vue.component(Crop.name, Crop)
}

export default Crop