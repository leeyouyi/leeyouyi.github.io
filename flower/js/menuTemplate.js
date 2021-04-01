// 選單諸類基礎模板

class MenuTemplate {
    constructor(idPrifix) {
        /** id 前綴 */ this.idPrifix = idPrifix || "template"
        /** 是否開啟 */ this.isOpen = false
        /** 判斷手機 */ this.isMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    /**
     * 設置新的 html id 前綴詞（若預設值已被使用）
     * @param {String} idPrifix 前綴
     * @returns {MenuTemplate} 此物件
     */
    setIdPrifix(idPrifix) {
        this.idPrifix = idPrifix
        return this
    }

    /**
     * 創建標題
     * @param {String} title 標題字串
     * @returns {String} html 字串
     */
    _createTitle(title) {
        // let  lan = $("#language").val()
        let lan =$('#language').data("lan")
        let selectTitle =''
        switch (lan) {
            case 'zh-TW':
                selectTitle = title[0]
                break;
            case 'zh-CN':
                selectTitle = title[1]
                break;
            case 'en':
                selectTitle = title[2]
                break;
        }
        return `
        <div id="${this.idPrifix}_title">
            ${selectTitle}
            <div id="${this.idPrifix}_title_close"></div>
        </div>`
    }

    /**
     * 創建內容
     * @param  {...String} htmls 內容的 html 字串
     * @returns {String} html 字串
     */
    _createContent(...htmls) {
        return `
        <div id="${this.idPrifix}_content">
            ${htmls.join("")}
        </div>
        `
    }

    /**
     * 創建並設置 html 標籤集合
     * @returns {MenuTemplate} 此物件
     */
    _createDOM() {
        const html = `
        <div id="${this.idPrifix}_main">
            ${this._createTitle()}
            ${this._createContent()}
        </div>
        `

        $("body").append(html)
        this.isOpen = true

        return this
    }

    /** 
     * 刪除選單 html
     * @returns {MenuTemplate} 此物件
     */
    _deleteDOM() {
        $("#" + this.idPrifix + "_main").remove()
        this.isOpen = false
        return this
    }

    /** 
     * 當點擊時觸發
     * @returns {MenuTemplate} 此物件
     */
    hasClick() {
        return !this.isOpen
            ? this._createDOM()
            : this._deleteDOM()
    }
}