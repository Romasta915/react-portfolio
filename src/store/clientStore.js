import { makeAutoObservable } from "mobx"

class ClientStore {
    constructor() {
        makeAutoObservable(this)
    }

    currentLang = localStorage.getItem("i18nextLng") || "en"


}
export default  new ClientStore()