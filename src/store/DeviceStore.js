import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor(props) {
        this._types = [
            {id: 1, name: 'title'}
        ]
        this._brands = [
            {id: 1, name: 'lenovo'}
        ]
        this._devices = [
            {id: 1, name: 'iphone', price: 2000, rating: 4, img: '/'}
        ]
        makeAutoObservable(this)

    }
    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}
