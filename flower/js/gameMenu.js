class GameInfoMenu {
    constructor() {
        /** 按鈕編號 */ this.buttonId = 0
        /** id 前綴 */ this.idPrifix = "icon"

        /** 選單按鈕列表 */

        this.menuData = new Map([
            ["logs", { imgTag: "logs", text: "投注紀錄", index: 0 }],
            ["sound", { imgTag: "sound", text: localStorage.voice == 'true' ? "開" : "關", index: 1 }],
            ["help", { imgTag: "help", text: "遊戲幫助", index: 2 }],
            ["exit", { imgTag: "exit", text: "退　　出", index: 3 }],
        ])

        /** 要顯示的按鈕 */ this.showPart = ["logs", "sound", "help", "exit"]
        this.eventList = []

        /** 選單開啟與否 */ this.isOpen = false
    }

    /**
     * 資訊選單初始化
     * @param {Object} JqueryDOM Jquery 查詢元素，點擊事件會綁在上面，同時選單 html 將會放在其父元素內
     * @param  {...String} showPart 要顯示的按鈕（如果留空，則使用預設值：全部），輸入錯誤的標籤將被忽略
     * @returns {GameInfoMenu} 此物件
     */
    static init(JqueryDOM, ...showPart) {
        const gameMenu = new GameInfoMenu()
        // console.log("載入遊戲選單", JqueryDOM)
        JqueryDOM.on("click", (e) => { gameMenu.hasClick(); e.stopPropagation() })

        if (showPart.length > 0) gameMenu.showPart = showPart

        return gameMenu
    }

    changeText(type, text) {
        const data = this.menuData.get(type)
        if (!data || data.text === text) return false

        data.text = text
        $("#" + this.idPrifix + "_" + type + "_text").text(text)

        return true
    }

    /**
     * 設置新的 html id 前綴詞（若預設值 icon 已被使用）
     * @param {String} idPrifix 前綴
     * @returns {GameInfoMenu} 此物件
     */
    setIdPrifix(idPrifix) {
        this.idPrifix = idPrifix
        return this
    }

    /**
     * 創建按鈕
     * @param {String} key 這個按鈕的類型
     * @param {Object} param0
     * @param {String} param0.imgTag 圖片元素標籤後綴
     * @param {String} param0.text 文字內容
     * @returns {GameInfoMenu} 按鈕 html 字串
     */
    _createButton(key, { imgTag, text, index }) {
        // let  lan = $("#language").val()
        let lan = $('#language').data("lan")
        let sound = ''
        switch (lan) {
            case 'zh-TW':
                sound = '聲音 ：'
                if (index === 0) text = '投注紀錄'
                if (index === 1) text = localStorage.voice == 'true' ? "開" : "關"
                if (index === 2) text = '遊戲幫助'
                if (index === 3) text = '退　　出'
                break;
            case 'zh-CN':
                sound = '声音 ：'
                if (index === 0) text = '投注纪录'
                if (index === 1) text = localStorage.voice == 'true' ? "开" : "关"
                if (index === 2) text = '游戏帮助'
                if (index === 3) text = '退　　出'
                break;
            case 'en':
                sound = 'sound'
                if (index === 0) text = 'Bet history'
                if (index === 1) text = localStorage.voice == 'true' ? "open" : "close"
                if (index === 2) text = 'Game tips'
                if (index === 3) text = 'drop out'
                break;
        }
        const html = `
        <div id="${this.idPrifix}_${key}" class="${this.idPrifix}">
            <div id="${this.idPrifix}_${key}_img" class="${this.idPrifix}_img_${imgTag}"></div>
            <div class="mx-auto">
                <span data-icon="sound">${key === 'sound' ? sound : ""}</span>
                <span id="${this.idPrifix}_${key}_text">${text}</span>
            </div>
        </div>`
        return html
    }

    /** 
     * 按照輸入的類型要求，創建對應按鈕 html 字串
     * @returns {String} 所有按鈕的 html 字串
     */
    _contentLoop() {
        return this.showPart.map(key => {
            const data = this.menuData.get(key)
            return data
                ? this._createButton(key, data)
                : console.log(`[GameMenu]: 不存在此按鈕標籤：${key}`)
        }).filter(val => val)
    }

    /** 
     * 創建選單
     * @returns {GameInfoMenu} 此物件
     */
    _createMenu() {
        const menuContent = this._contentLoop()
        const html = `
        <div id="${this.idPrifix}_shadow">
            <div id="${this.idPrifix}_menu" class="btn${menuContent.length}">
                ${menuContent.join("")}
            </div>
        </div>`

        $("body").append(html)
        this._bindEvent()

        this.isOpen = true

        return this
    }

    /**
     * 刪除選單 
     * @returns {GameInfoMenu} 此物件
     */
    _deleteMenu() {
        $("#" + this.idPrifix + "_shadow").remove()
        this.isOpen = false
        this.buttonId = 0
        return this
    }

    /** 
     * 按照儲存的選單狀態決定創建或刪除 
     * @returns {GameInfoMenu} 此物件
     */
    hasClick() {
        return !this.isOpen
            ? this._createMenu()
            : this._deleteMenu()
    }

    /**
     * 設置要綁上 DOM 的 click 事件
     * @param {String} type 類型
     * @param {Function} func 函數
     * @returns {GameInfoMenu} 此物件
     */
    setEvent(type, func) {
        if (!type) return this

        this.eventList.push({ tagName: `#${this.idPrifix}_${type}`, func: func })

        return this
    }

    /**
     * 綁定預存的事件
     * @returns {GameInfoMenu} 此物件
     */
    _bindEvent() {
        this.eventList.map(event => $(event.tagName).on("click", (e) => { event.func(e, this); e.stopPropagation() }))
        return this
    }
}

// 客製化 alert
class EgAlert {
    constructor() {
        this.open = false
        this.conversation = ""
    }

    static init() { return new EgAlert() }
    static normalDistribution(min, max, skew = 0.5) {
        var u = 0, v = 0
        while (u === 0) u = Math.random() //Converting [0,1) to (0,1)
        while (v === 0) v = Math.random()
        let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
        num = num / 10.0 + 0.5 // Translate to 0 -> 1
        if (num > 1 || num < 0) num = randn_bm(min, max, skew) // resample between 0 and 1 if out of range
        num = Math.pow(num, skew) // Skew
        num *= max - min // Stretch to fill range
        num += min // offset to min
        return num
    }

    _show(str) {
        if ($("#egAlert").length > 0) $("#egAlert").remove()
        this._setStr(str)._createDOM()
    }

    _setStr(str) {
        this.conversation = str
        return this
    }
    _createDOM() {
        let lan = $('#language').data("lan") || "zh-TW"
        let str = ''
        switch (lan) {
            case 'zh-TW':
                str = '確定'
                break;
            case 'zh-CN':
                str = '确定'
                break;
            case 'en':
                str = 'determine'
                break;
            case 'th-TH':
                str = 'กำหนด'
        }
        const html = `<div id="egAlert">
                        <p>${this.conversation}</p>
                        <div>
                            <span id="alert_close">${str}</span>
                        </div>
                      </div>`
        $("body").append(html)
        $("#app").addClass("disable")
        setTimeout(() => {
            $("#egAlert").addClass("show")
        }, 10);
        this.open = true
        $("#alert_close").on("click", () => (this._deleteDOM()))
        // setTimeout(() => {
        //     if (this.open){
        //         $("#egAlert").removeClass("show")
        //         this.open = false
        //     }
        // }, 5000);
        return this
    }
    _deleteDOM() {
        $("#egAlert").remove()
        if ($("#app.disable").length > 0) $("#app.disable").removeClass("disable")
        this.open = false
        return this
    }
}
// 引入 alert
var egAlert = EgAlert.init();