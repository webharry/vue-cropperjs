import Crop from "./crop"

export default {
    install: Vue => {
        Vue.component(Crop.name, Crop)
    }
}