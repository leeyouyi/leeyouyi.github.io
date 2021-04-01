var gameName = "flower"; 
var MAIN_URL = "http://127.0.0.1:5556/"
class BetsLogs extends MenuTemplate {
    constructor() {
        super()
        this.gameName = gameName
        this.apiUrl = MAIN_URL
        this.title = ["投注記錄", '投注记录', 'betting record']
        this.idPrifix = "betsLogs"
        this.language = "tzh"
        this.lang = localStorage.getItem("language") || "tc"
        this.footer_text = {
            'en': {
                showBet: 'Show the last twenty'
            },
            'tc': {
                showBet: '顯示最近二十筆.投注紀錄'
            },
            'cn': {
                showBet: '显示最近二十笔.投注纪录'
            },
        }
        this.logsTitle = this.isMobile
            ? [
                { tzh: { 'en': "room", 'tc': "房間", 'cn': "房间" }, en: "room", data: "roomType" },
                { tzh: { 'en': "Period", 'tc': "期數", 'cn': "期数" }, en: "periods", data: "periods" },
                { tzh: { 'en': "profit", 'tc': "盈利", 'cn': "盈利" }, en: "profit", data: "profit" }
            ]
            : [
                { tzh: { 'en': "Numbering", 'tc': "編號", 'cn': "编号" }, en: "No.", data: "id" },
                { tzh: { 'en': "room", 'tc': "房間", 'cn': "房间" }, en: "room", data: "roomType" },
                { tzh: { 'en': "Period", 'tc': "期數", 'cn': "期数" }, en: "periods", data: "periods" },
                { tzh: { 'en': "profit", 'tc': "盈利", 'cn': "盈利" }, en: "profit", data: "profit" },
                { tzh: { 'en': "time", 'tc': "時間", 'cn': "时间" }, en: "time", data: "time" }]
        this.logs = []

        this.tool = {
            post: (data, func, errorFunc = error => console.log(error)) => {
                axios.post(this.apiUrl, data)
                    .then(function (res) {
                        func(res)
                    })
                    .catch(function (error) {
                        errorFunc(error)
                    })
            },
        }
    }

    static init() { return new BetsLogs() }
    static returnDate(timestamp) {
        const date = new Date(timestamp)
        return `${date.getFullYear()}-${(date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)}-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()} ${date.toString().split(" ")[4]}`
    }

    setLogs(roomType, periods, profit, time) {
        this.logs.push({ roomType: roomType, periods: periods, profit: profit, time: time })
        if (this.logs.length > 20)
            this.logs.splice(0, this.logs.length - 20)

        return this
    }

    setProfit(str, type) {
        str = str.split(" ")
        if (type === 'icon') return str[1]
        else return Number(str[0])
    }

    _createThead() {
        this.lang = localStorage.getItem("language") || "tc"
        return `
        <thead>
            <tr class="col-12">
                ${this.logsTitle.map(val => `<th scope="col">${val[this.language][this.lang]}</th>`).join("")}
            </tr>
        </thead>
        `
    }

    _createTbodyData(log, idx) {
        const td = this.logsTitle.map(val =>
            val.data === "profit"
                ? `<td class="profit">
                <span class="${this.setProfit(log[val.data], 'icon')}"></span>
                <span class="${this.setProfit(log[val.data]) >= 0 ? 'win' : 'lose'}">
                    ${this.setProfit(log[val.data]) >= 0
                    ? "+ " + this.setProfit(log[val.data])
                    : "- " + Math.abs(this.setProfit(log[val.data]))}.00
                </span>
              </td>`
                : `<td>${
                val.data === "id" ?
                    idx + 1 : log[val.data]}</td>`).join("")

        return `<tr>
                    ${td}
                </tr>
                `
    }

    _createTbody() {
        return `
        <tbody>
            ${[...this.logs].reverse().map((log, idx) => this._createTbodyData(log, idx)).join("")}
        </tbody>
        `
    }

    _createTable() {
        return `
        <table class="table">
            ${this._createThead()}
            ${this._createTbody()}
        </table>
        `
    }

    _clearLogs() {
        this.logs = []
        return this
    }

    /** 
     * 創建選單
     * @returns {GameplayGuide} 此物件
     */
    _createDOM() {
        let lang = localStorage.getItem("language") || "tc"
        let str = ''
        switch (lang) {
            case 'tc':
                str = '您尚未登入'
                break;
            case 'cn':
                str = "您尚未登入"
                break;
            case 'en':
                str = "You are not logged in"
                break;
        }
        if (!roomApiLogin && login.userName == null) return egAlert._show(str)
        else if (roomApiLogin && currentRoom[gameIndex].userName == null) return egAlert._show(str)
        this.tool.post({
            type: "getUserBetsList",
            game: gameName,
            name: roomApiLogin ? currentRoom[gameIndex].userName : login.userName,
            limit: 20
        }, (({ data }) => {
            if (!data.type) return console.log("資料錯誤")
            let record = data.data
            // console.log(record)
            record.reverse().map((item, index) => {
                this.setLogs(item.gameLevel[lang], item.gameId.toString().substring(4), item.res, BetsLogs.returnDate(item.resTime))
            })
            // console.log(this.logs)
            const html = `
            <div id="${this.idPrifix}_main">
                <div class="logo"></div>
                ${this._createTitle(this.title)}
                ${this._createContent(this._createTable())}
                <div id="${this.idPrifix}_footer">${this.footer_text[this.lang].showBet}</div>
            </div>`

            $("body").append(html)
            $("#" + this.idPrifix + "_title_close").on("click", () => (this._deleteDOM()._clearLogs()))

            this.isOpen = true

            return this
        }))
    }
}