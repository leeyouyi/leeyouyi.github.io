class GameplayGuide extends MenuTemplate {
    constructor(gameType) {
        super()

        this.gameType = gameType
        this.idPrifix = "gameplayGuide"
        this.title = ["玩法介紹","玩法介紹",'How to play']
        this.nowPage = 0
        // #region 創建百家樂牌型資料
        this.baccaratTypeData = []
        // #endregion
        this.data = {
            dice: [
                {
                    tagName: ["玩法",'玩法','How to play'],
                    content: [`<ul>
                                <li><p>按下登入按鈕， 登入egbet </p></li>
                                <li><p>設置需要投注量</p></li>
                                <li><p>調整滑條投注骰子號碼上限，改變勝出機率</p></li>
                                <li><p>按下「擲骰子」按鈕進行投注，如果搖到骰子號碼小於投注骰子號碼上限，立即中獎</p></li>
                                <li><p>如有開啟自動投注後，將會按當前投注設定自動投注，直至取消。取消會有一兩秒延遲，敬請留意</p></li>
                                <li><p>** 由於遊戲都在EOS 的智能合約上執行，因此遊戲保證公平，不能作弊。我們透過獨有的加密技術，保證結果不會被更改，請您放心下注。</p></li>
                                <li><p>抽水：贏家所贏金額5%</p></li>
                              </ul>`,
                              `<ul>
                                <li><p>按下登入按钮， 登入egbet </p></li>
                                <li><p>设置需要投注量</p></li>
                                <li><p>调整滑条投注骰子号码上限，改变胜出机率</p></li>
                                <li><p>按下「掷骰子」按钮进行投注，如果摇到骰子号码小于投注骰子号码上限，立即中奖</p></li>
                                <li><p>如有开启自动投注后，将会按当前投注设定自动投注，直至取消。取消会有一两秒延迟，敬请留意</p></li>
                                <li><p>** 由于游戏都在EOS 的智能合约上执行，因此游戏保证公平，不能作弊。我们透过独有的加密技术，保证结果不会被更改，请您放心下注。 </p></li>
                                <li><p>抽水：赢家所赢金额5%</p></li>
                              </ul>`,
                              `<ul>
                                <li> <p> Press the login button to login egbet </ p> </ li>
                                <li> <p> Set the amount of bets required </ p> </ li>
                                <li> <p> Adjust the maximum number of dice for slider betting to change the odds of winning </ p> </ li>
                                <li> <p> Press the "Dice" button to place a bet. If the dice number is less than the upper limit of the bet dice number, win immediately </ p> </ li>
                                <li> <p> If automatic betting is turned on, it will be automatically bet according to the current bet setting until canceled. There will be a delay of one or two seconds, please pay attention </ p> </ li>
                                <li> <p> ** Since the game is executed on EOS smart contracts, the game is guaranteed to be fair and not cheat. We use unique encryption technology to ensure that the results will not be changed, so please rest assured. </ p> </ li>
                                <li> <p> Drawback: 5% of the amount won by the winner </ p> </ li>
                              </ul>`
                            ],
                },
            ],
            baccarat: [
                {
                    tagName: ["玩法",'玩法','How to play'],
                    content:[ `<ul>
                                <li>
                                    <p>本遊戲採用8副牌（不含大小鬼，每副52張），共416張，
                                    莊閒各發2張，閒家先發，如第一輪未分出勝負再按牌例進行補牌
                                    每方最多再發1張（補牌），誰最接近9點為勝方，相同則和局。
                                    </p>
                                </li>
                             </ul>`,
                             `<ul>
                                <li>
                                    <p>本游戏采用8副牌（不含大小鬼，每副52张），共416张，
                                    庄闲各发2张，闲家先发，如第一轮未分出胜负再按牌例进行补牌
                                    每方最多再发1张（补牌），谁最接近9点为胜方，相同则和局。
                                    </p>
                                </li>
                             </ul>`,
                             `<ul>
                                <li>
                                    <p> This game uses 8 decks (excluding ghosts, 52 per deck) for a total of 416 cards.
                                    Zhuang Xian will issue 2 cards each. Players will start first. If the first round is not divided, then the cards will be replaced.
                                    Each side will issue a maximum of 1 (re-card), whoever is closest to 9 points will be the winning side.
                                    </ p>
                                </ li>
                             </ul>`
                            ],
                },
                // {
                //     tagName: "牌型",
                //     content: `<>
                //                 <thead>
                //                     <tr>
                //                         <th></th>
                //                         <th></th>
                //                         <th></th>
                //                     <tr>
                //                 </thead>
                //                 <tbody>
                //                     <tr>
                //                         <th></th>
                //                         <th></th>
                //                         <th></th>
                //                     <tr>
                //                 </tbody>
                //               <>`,
                // },
                {
                    tagName: ["賠率","赔率","Odds"],
                    content:[`<ul>
                                <li><p>抽水：贏家所贏金額5%</p></li>
                                <li><p>下注莊家而莊贏者，贏1賠1.95</p></li>
                                <li><p>下注閒家而閒贏者，贏1賠2</p></li>
                                <li><p>下注和局（即最終點數一樣者），贏1賠9</p></li>
                                <li><p>下注莊對子或閒對子（即莊或閒首兩張牌為同數字或英文字母者），贏1賠12</p></li>
                              </ul>`,
                            `<ul>
                                <li><p>抽水：赢家所赢金额5%</p></li>
                                <li><p>下注庄家而庄赢者，赢1赔1.95</p></li>
                                <li><p>下注闲家而闲赢者，赢1赔2</p></li>
                                <li><p>下注和局（即最终点数一样者），赢1赔9</p></li>
                                <li><p>下注庄对子或闲对子（即庄或闲首两张牌为同数字或英文字母者），赢1赔12</p></li>
                            </ul>`,
                            `<ul>
                                <li> <p> Drawback: 5% of the amount won by the winner </ p> </ li>
                                <li> <p> Bet on the dealer and the winner of the bank, win 1.95. </ p> </ li>
                                <li> <p> Bet on the player and the winner, win 1 and lose 2 </ p> </ li>
                                <li> <p> Bet and tie (that is, those with the same final points), win 1 and lose 9 </ p> </ li>
                                <li> <p> Bet on Zhuang pair or idle pair (that is, if the first two cards of Zhuang or idle are the same number or alphabet), win 1 and lose 12 </ p> </ li>
                            </ul>`
                            ],
                },
            ],
            sicbo: [
                {
                    tagName: ["玩法",'玩法','How to play'],
                    content:[`<ul>
                                <li><p>大：三個骰子點數總合介於11到17。</p></li>
                                <li><p>小：三個骰子點數總合介於4到10。</p></li>
                                <li><p>押數字： 三個骰子骰出結果，押中其中數字。</p></li>
                                <li><p>押數字： 三個骰子骰出結果，押中其中數字。</p></li>
                                <li><p>押一對： 押中兩個相同的數字。</p></li>
                                <li><p>單一豹子：押中的三個骰子均相同的數字。</p></li>
                                <li><p>任一豹子：押中任意三個相同骰子的數字。</p></li>
                                <li><p>押總數（和值）： 三個骰子骰出結果，相加總點數。</p></li>
                              </ul>`,
                              `<ul>
                                <li><p>大：三个骰子点数总合介于11到17。 </p></li>
                                <li><p>小：三个骰子点数总合介于4到10。 </p></li>
                                <li><p>押数字： 三个骰子骰出结果，押中其中数字。 </p></li>
                                <li><p>押数字： 三个骰子骰出结果，押中其中数字。 </p></li>
                                <li><p>押一对： 押中两个相同的数字。 </p></li>
                                <li><p>单一豹子：押中的三个骰子均相同的数字。 </p></li>
                                <li><p>任一豹子：押中任意三个相同骰子的数字。 </p></li>
                                <li><p>押总数（和值）： 三个骰子骰出结果，相加总点数。 </p></li>
                              </ul>`,
                              `<ul>
                                <li> <p> Large: The total of three dice points is between 11 and 17. </ p> </ li>
                                <li> <p> Small: The total of three dice points is between 4 and 10. </ p> </ li>
                                <li> <p> Bet the number: Roll the result with three dice, bet on the number. </ p> </ li>
                                <li> <p> Bet the number: Roll the result with three dice, bet on the number. </ p> </ li>
                                <li> <p> Bet on a pair: Bet on two identical numbers. </ p> </ li>
                                <li> <p> Single Leopard: All three dice in the bet have the same number. </ p> </ li>
                                <li> <p> Any leopard: bet on any three identical dice numbers. </ p> </ li>
                                <li> <p> The total number of bets (sum value): Three dice roll out the result and add up the total points. </ p> </ li>
                              </ul>`
                            ],
                },
                {
                    tagName: ["賠率","赔率","Odds"],
                    content:[`<ul>
                                <li><p>抽水：贏家所贏金額5%</p></li>
                                <li><p>小：三顆骰盅點數，總和由4點~10點 1 ： 1</p></li>
                                <li><p>單：點數總和為單1 ： 1</p></li>
                                <li><p>雙：點數總和為雙1 ： 1</p></li>
                                <li><p>4或17：三顆骰盅點數總和為4點或17點1 ： 50</p></li>
                                <li><p>5或16：三顆骰盅點數總和為5點或16點1 ： 18</p></li>
                                <li><p>6或15：三顆骰盅點數總和為6點或15點1 ： 14</p></li>
                                <li><p>7或14：三顆骰盅點數總和為7點或14點1 ： 12</p></li>
                                <li><p>8或13：三顆骰盅點數總和為8點或13點1 ： 8</p></li>
                                <li><p>9．10．11．12：三顆骰盅點數總和為9．10．11．12點 1 ： 6</p></li>
                                <li><p>圍骰：三顆骰盅與選定點數相同1 ： 150</p></li>
                                <li><p>全骰：1至6點數．任何三顆骰盅．相同點數1 ： 24</p></li>
                                <li><p>短牌：為兩顆相同之點數為中獎，例：開出5．5．6． 投注5．5．為中獎1 ： 8</p></li>
                                <li><p>長牌：為兩顆指定點數為中獎，例：開出5．5．6． 投注5．6．為中獎1 ： 5</p></li>
                                <li><p>單骰：三顆骰開出其中相同一顆為一倍，例：開出1．2．3． 投注1為中獎1 ： 1</p></li>
                              </ul>`,
                              `<ul>
                                <li><p>抽水：赢家所赢金额5%</p></li>
                                <li><p>小：三颗骰盅点数，总和由4点~10点 1 ： 1</p></li>
                                <li><p>单：点数总和为单1 ： 1</p></li>
                                <li><p>双：点数总和为双1 ： 1</p></li>
                                <li><p>4或17：三颗骰盅点数总和为4点或17点1 ： 50</p></li>
                                <li><p>5或16：三颗骰盅点数总和为5点或16点1 ： 18</p></li>
                                <li><p>6或15：三颗骰盅点数总和为6点或15点1 ： 14</p></li>
                                <li><p>7或14：三颗骰盅点数总和为7点或14点1 ： 12</p></li>
                                <li><p>8或13：三颗骰盅点数总和为8点或13点1 ： 8</p></li>
                                <li><p>9．10．11．12：三颗骰盅点数总和为9．10．11．12点 1 ： 6</p></li>
                                <li><p>围骰：三颗骰盅与选定点数相同1 ： 150</p></li>
                                <li><p>全骰：1至6点数．任何三颗骰盅．相同点数1 ： 24</p></li>
                                <li><p>短牌：为两颗相同之点数为中奖，例：开出5．5．6．投注5．5．为中奖1 ： 8</p></li>
                                <li><p>长牌：为两颗指定点数为中奖，例：开出5．5．6．投注5．6．为中奖1 ： 5</p></li>
                                <li><p>单骰：三颗骰开出其中相同一颗为一倍，例：开出1．2．3．投注1为中奖1 ： 1</p></li>
                            </ul>`,
                            `<ul>
                                <li> <p> Drawback: 5% of the amount won by the winner </ p> </ li>
                                <li> <p> Small: three dice cup points, the total of which is from 4 to 10 points 1: 1 </ p> </ li>
                                <li> <p> Single: the sum of points is single 1: 1 </ p> </ li>
                                <li> <p> Double: The sum of points is double 1: 1 </ p> </ li>
                                <li> <p> 4 or 17: the sum of the three dice cup points is 4 or 17 1:50 </ p> </ li>
                                <li> <p> 5 or 16: The sum of the points of the three dice cups is 5 points or 16 points 1: 18 </ p> </ li>
                                <li> <p> 6 or 15: The sum of the points of the three dice cups is 6 points or 15 points 1: 14 </ p> </ li>
                                <li> <p> 7 or 14: The sum of the points of the three dice cups is 7 points or 14 points 1: 12 </ p> </ li>
                                <li> <p> 8 or 13: The sum of the points of the three dice cups is 8 points or 13 points 1: 8 </ p> </ li>
                                <li> <p> 9.10.11.12: The sum of the three dice cup points is 9.10.11.12 points 1: 6 </ p> </ li>
                                <li> <p> Dice: Three dice cups have the same number of points as selected 1: 150 </ p> </ li>
                                <li> <p> Full Dice: 1 to 6 points. Any three dice cups. Same point 1: 24 </ p> </ li>
                                <li> <p> Short card: If two points are the same, the prize will be won. Bet 5.5. To win 1: 8 </ p> </ li>
                                <li> <p> Long card: Win the prize for two designated points, for example: 5.5.6. Bet 5.6. Winning 1: 5 </ p> </ li>
                                <li> <p> Single Dice: Three dice are doubled if the same one is opened. Example: 1.2.3. Bet 1 is the winner 1: 1 </ p> </ li>
                            </ul>`
                            ],
                },
            ],
            niuniu: [
                {
                    tagName: ["玩法",'玩法','How to play'],
                    content: [`<ul>
                                <li><p>進入遊戲時會預存一筆准入條件的10倍金額，輸贏上限則以准入條件的10倍作為輸贏的金額</p></li>
                                <li><p>定莊：開局玩家開始搶莊家，搶莊倍數最高得玩家為本局莊家
                                        ，搶莊倍數相同同時攜帶遊戲幣越多坐莊機率越大。超時不搶莊，系統
                                        自動執行不搶操作。所有人都不搶莊，隨機產生一名玩家坐莊。</p></li>
                                <li><p>閒家：定莊後，所有閒家開始選擇下注倍數。攜帶遊戲幣越多，最大可
                                    下注倍數越大，超時不下住，系統自動下最小倍數。</p></li>
                                <li><p>開始發牌：系統向每名玩家發5張手牌。</p></li>
                                <li><p>比牌：所有玩家亮出手牌。閒家只與莊家互比閒家之間不互比。</p></li>
                                <li><p>結算公式：</p></li>
                                <li><p>A：房間底注</p></li>
                                <li><p>M：莊家牌型對應的倍數</p></li>
                                <li><p>N：閒家牌型對應的倍數</p></li>
                                <li><p>X：莊家搶庄倍數</p></li>
                                <li><p>Y：閒家下注倍數</p></li>
                                <li><p>抽水：贏家所贏金額5%</p></li>
                                <li><p>莊家勝利所有遊戲幣=A*M*X*Y-抽水</p></li>
                                <li><p>莊家失敗所輸遊戲幣=A*N*X*Y</p></li>
                                <li><p>閒家勝利所贏遊戲幣=A*N*X*Y-抽水</p></li>
                                <li><p>閒家失敗所輸遊戲幣=A*M*X*Y</p></li>
                              </ul>`,
                              `<ul>
                                <li><p>进入游戏时会预存一笔准入条件的10倍金额，输赢上限则以准入条件的10倍作为输赢的金额</p></li>
                                <li><p>定庄：开局玩家开始抢庄家，抢庄倍数最高得玩家为本局庄家
                                        ，抢庄倍数相同同时携带游戏币越多坐庄机率越大。超时不抢庄，系统
                                        自动执行不抢操作。所有人都不抢庄，随机产生一名玩家坐庄。 </p></li>
                                <li><p>闲家：定庄后，所有闲家开始选择下注倍数。携带游戏币越多，最大可
                                    下注倍数越大，超时不下住，系统自动下最小倍数。 </p></li>
                                <li><p>开始发牌：系统向每名玩家发5张手牌。 </p></li>
                                <li><p>比牌：所有玩家亮出手牌。闲家只与庄家互比闲家之间不互比。 </p></li>
                                <li><p>结算公式：</p></li>
                                <li><p>A：房间底注</p></li>
                                <li><p>M：庄家牌型对应的倍数</p></li>
                                <li><p>N：闲家牌型对应的倍数</p></li>
                                <li><p>X：庄家抢庄倍数</p></li>
                                <li><p>Y：闲家下注倍数</p></li>
                                <li><p>抽水：赢家所赢金额5%</p></li>
                                <li><p>庄家胜利所有游戏币=A*M*X*Y-抽水</p></li>
                                <li><p>庄家失败所输游戏币=A*N*X*Y</p></li>
                                <li><p>闲家胜利所赢游戏币=A*N*X*Y-抽水</p></li>
                                <li><p>闲家失败所输游戏币=A*M*X*Y</p></li>
                              </ul>`,
                              `<ul>
                                <li> <p> 10 times the entry conditions will be pre-stored when entering the game, and the upper limit of winning and losing will be 10 times the entry conditions as the winning or losing amount.
                                <li> <p> Dingzhuang: The player who starts the game starts to grab the dealer, and the player with the highest multiplier will be the dealer of this bureau.
                                        , The same number of robbing Zhuang, while carrying more game coins, the greater the probability of sitting Zhuang. Do not grab the timeout, the system
                                        Automatically perform non-grabbing operations. No one robbed the village, randomly generated a player to sit in the village. </ p> </ li>
                                <li> <p> Player: After Dingzhuang, all players start to choose bet multiples. The more game coins you carry, the maximum
                                    The greater the bet multiple, the longer the timeout, the system will automatically place the minimum multiple. </ p> </ li>
                                <li> <p> Start dealing: The system deals 5 cards to each player. </ p> </ li>
                                <li> <p> Comparison: All players show their cards. Players only compare with dealers, but not with other players. </ p> </ li>
                                <li> <p> Billing formula: </ p> </ li>
                                <li> <p> A: Room bet </ p> </ li>
                                <li> <p> M: the multiple of the dealer's card type </ p> </ li>
                                <li> <p> N: The multiple of the player's card type </ p> </ li>
                                <li> <p> X: Market rob multiples </ p> </ li>
                                <li> <p> Y: Players bet multiples </ p> </ li>
                                <li> <p> Drawback: 5% of the amount won by the winner </ p> </ li>
                                <li> <p> Banker wins all game coins = A * M * X * Y- pumping </ p> </ li>
                                <li> <p> Game currency lost by the banker's failure = A * N * X * Y </ p> </ li>
                                <li> <p> Game currency won by player victory = A * N * X * Y- pumping </ p> </ li>
                                <li> <p> Game currency lost by player failure = A * M * X * Y </ p> </ li>
                              </ul>`
                            ],
                },
                {
                    tagName: ["牌型","牌型","Card type"],
                    content: [`<ul>
                                <li class="cardType"><p>五小牛 4倍<span></span></p></li>
                                <li class="cardType"><p>四炸 4倍<span></span></p></li>
                                <li class="cardType"><p>五花牛 4倍<span></span></p></li>
                                <li class="cardType"><p>四花牛 4倍<span></span></p></li>
                                <li class="cardType"><p>牛牛 3倍<span></span></p></li>
                                <li class="cardType"><p>牛七 2倍<span></span></p></li>
                                <li class="cardType"><p>牛八 2倍<span></span></p></li>
                                <li class="cardType"><p>牛九 2倍<span></span></p></li>
                                <li class="cardType"><p>牛一 1倍<span></span></p></li>
                                <li class="cardType"><p>牛二 1倍<span></span></p></li>
                                <li class="cardType"><p>牛三 1倍<span></span></p></li>
                                <li class="cardType"><p>牛四 1倍<span></span></p></li>
                                <li class="cardType"><p>牛五 1倍<span></span></p></li>
                                <li class="cardType"><p>牛六 1倍<span></span></p></li>
                                <li class="cardType"><p>沒牛 1倍<span></span></p></li>
                              </ul>`,
                              `<ul>
                                <li class="cardType"><p>五小牛 4倍<span></span></p></li>
                                <li class="cardType"><p>四炸 4倍<span></span></p></li>
                                <li class="cardType"><p>五花牛 4倍<span></span></p></li>
                                <li class="cardType"><p>四花牛 4倍<span></span></p></li>
                                <li class="cardType"><p>牛牛 3倍<span></span></p></li>
                                <li class="cardType"><p>牛七 2倍<span></span></p></li>
                                <li class="cardType"><p>牛八 2倍<span></span></p></li>
                                <li class="cardType"><p>牛九 2倍<span></span></p></li>
                                <li class="cardType"><p>牛一 1倍<span></span></p></li>
                                <li class="cardType"><p>牛二 1倍<span></span></p></li>
                                <li class="cardType"><p>牛三 1倍<span></span></p></li>
                                <li class="cardType"><p>牛四 1倍<span></span></p></li>
                                <li class="cardType"><p>牛五 1倍<span></span></p></li>
                                <li class="cardType"><p>牛六 1倍<span></span></p></li>
                                <li class="cardType"><p>没牛 1倍<span></span></p></li>
                            </ul>`,
                            `<ul>
                                <li class = "cardType"> <p> Five Mavericks 4 times <span> </ span> </ p> </ li>
                                <li class = "cardType"> <p> Four times fried <span> </ span> </ p> </ li>
                                <li class = "cardType"> <p> Five flower cattle 4 times <span> </ span> </ p> </ li>
                                <li class = "cardType"> <p> Four flower cattle 4 times <span> </ span> </ p> </ li>
                                <li class = "cardType"> <p> Niu Niu 3 times <span> </ span> </ p> </ li>
                                <li class = "cardType"> <p> Niu Qi 2 times <span> </ span> </ p> </ li>
                                <li class = "cardType"> <p> Niu Ba 2x <span> </ span> </ p> </ li>
                                <li class = "cardType"> <p> Niu Jiu 2 times <span> </ span> </ p> </ li>
                                <li class = "cardType"> <p> Niu Yi 1x <span> </ span> </ p> </ li>
                                <li class = "cardType"> <p> Niu 2 times <span> </ span> </ p> </ li>
                                <li class = "cardType"> <p> Niuzan 1x <span> </ span> </ p> </ li>
                                <li class = "cardType"> <p> Niu Si 1x <span> </ span> </ p> </ li>
                                <li class = "cardType"> <p> Niu Wu 1x <span> </ span> </ p> </ li>
                                <li class = "cardType"> <p> Niuli 1x <span> </ span> </ p> </ li>
                                <li class = "cardType"> <p> No cow 1x <span> </ span> </ p> </ li>
                            </ul>`
                            ],
                },
                {
                    tagName: ["牌型算法","牌型算法","Card algorithm"],
                    content: [`<ul>
                                <li><p>牌面：10，J，Q，K的點數都算10，其它牌按字面數字計算。</p></li>
                                <li><p>沒牛：5張牌中任意三張牌的點數之和都不為10的整數倍。</p></li>
                                <li><p>有牛：5張牌中有3張牌點數之和為10的整數倍，另外2張牌的牌面值之和不為10的整數倍，則這2張點數之和的個位數即為牛幾。</p></li>
                                <li><p>牛牛：5張牌中有3張牌的點數之和為10的整數倍，且另外2張牌的點數相加也為10的整數倍。</p></li>
                                <li><p>四花牛：5張牌中有4張牌為花牌（J，Q，K）中的任意牌，且第5張牌為10。</p></li>
                                <li><p>五花牛：5張牌為花牌（J，Q，K）中的任意牌。</p></li>
                                <li><p>四炸：5張牌中有4張牌相同，第5張隨意。</p></li>
                                <li><p>五小牛：5張牌的點數都小於5，且點數之和小於等於10。</p></li>
                              </ul>`,
                              `<ul>
                                <li><p>牌面：10，J，Q，K的点数都算10，其它牌按字面数字计算。 </p></li>
                                <li><p>没牛：5张牌中任意三张牌的点数之和都不为10的整数倍。 </p></li>
                                <li><p>有牛：5张牌中有3张牌点数之和为10的整数倍，另外2张牌的牌面值之和不为10的整数倍，则这2张点数之和的个位数即为牛几。 </p></li>
                                <li><p>牛牛：5张牌中有3张牌的点数之和为10的整数倍，且另外2张牌的点数相加也为10的整数倍。 </p></li>
                                <li><p>四花牛：5张牌中有4张牌为花牌（J，Q，K）中的任意牌，且第5张牌为10。 </p></li>
                                <li><p>五花牛：5张牌为花牌（J，Q，K）中的任意牌。 </p></li>
                                <li><p>四炸：5张牌中有4张牌相同，第5张随意。 </p></li>
                                <li><p>五小牛：5张牌的点数都小于5，且点数之和小于等于10。 </p></li>
                              </ul>`,
                              `<ul>
                                <li> <p> Face: 10, J, Q, K points are counted as 10, other cards are counted as literal numbers. </ p> </ li>
                                <li> <p> No Bull: The sum of the points of any three of the five cards is not an integer multiple of 10. </ p> </ li>
                                <li> <p> There are cattle: 3 of 5 cards have a sum of points equal to an integer multiple of 10, and the sum of the face value of the other 2 cards is not an integer multiple of 10. The single digits of the sum are the cattle. </ p> </ li>
                                <li> <p> Niu Niu: The sum of the points of 3 of 5 cards is an integer multiple of 10, and the points of the other 2 cards are also an integer multiple of 10. </ p> </ li>
                                <li> <p> Four flower cattle: 4 of the 5 cards are any of the flower cards (J, Q, K), and the 5th card is 10. </ p> </ li>
                                <li> <p> Five-flowered bull: 5 cards are any of the flower cards (J, Q, K). </ p> </ li>
                                <li> <p> Four-fried: 4 of 5 cards are the same, the 5th card is free. </ p> </ li>
                                <li> <p> Five Mavericks: All 5 cards have less than 5 points, and the sum of the points is less than or equal to 10. </ p> </ li>
                              </ul>`
                            ],
                },
            ],
            flower: [
                {
                    tagName: ["玩法",'玩法','How to play'],
                    content:[ `<ul>
                                <li><p>進入遊戲時會預存一筆准入條件的10倍金額，輸贏上限則以准入條件的10倍作為輸贏的金額</p></li>
                                <li><p>隨機將2到5個玩家分配到同一桌</p></li>
                                <li><p>發牌前每個玩家自動投入與底注相同的籌碼作為鍋底</p></li>
                                <li><p>每個玩家依次發3張牌，默認牌面向下</p></li>
                                <li><p>隨機一家先進行操作，從他下家開始逆時針輪流操作</p></li>
                                <li><p>第二輪才可以比牌，比牌也需投注，金額與所需跟注金額相同</p></li>
                                <li><p>所有玩家依次進行操作叫做一輪每局最多10輪</p></li>
                                <li><p>達到輪數上限，從莊的下家開始，依次與下家強制發起比牌，此時比牌無須進行下注</p></li>
                                <li><p>玩家看牌後進行加注，比牌，跟注操作，消耗籌碼是為看牌的2倍</p></li>
                                <li><p>比牌輸掉或者棄牌的玩家會被淘汰，每局只能有一個獲勝玩家</p></li>
                                <li><p>防超時棄牌:默認勾選。
                                    勾選後，看牌情況下，在不可比牌階段超時未操作且牌型為順子及以上時，會自動跟注;其它情況則執行棄牌。
                                    在可比牌階段，玩家以看牌的情況下超時未操作，若玩家是順子及以上的牌型，系統會自動進行比牌的操作，
                                    若玩家是順子以下的牌行（不包括順子），則會執行棄牌操作，未看牌勾選按鈕超時將自動棄牌。</p></li>
                              </ul>`,
                               `<ul>
                                <li><p>进入游戏时会预存一笔准入条件的10倍金额，输赢上限则以准入条件的10倍作为输赢的金额</p></li>
                                <li><p>随机将2到5个玩家分配到同一桌</p></li>
                                <li><p>发牌前每个玩家自动投入与底注相同的筹码作为锅底</p></li>
                                <li><p>每个玩家依次发3张牌，默认牌面向下</p></li>
                                <li><p>随机一家先进行操作，从他下家开始逆时针轮流操作</p></li>
                                <li><p>第二轮才可以比牌，比牌也需投注，金额与所需跟注金额相同</p></li>
                                <li><p>所有玩家依次进行操作叫做一轮每局最多10轮</p></li>
                                <li><p>达到轮数上限，从庄的下家开始，依次与下家强制发起比牌，此时比牌无须进行下注</p></li>
                                <li><p>玩家看牌后进行加注，比牌，跟注操作，消耗筹码是为看牌的2倍</p></li>
                                <li><p>比牌输掉或者弃牌的玩家会被淘汰，每局只能有一个获胜玩家</p></li>
                                <li><p>勾选后，看牌情况下，在不可比牌阶段超时未操作且牌型为顺子及以上时，会自动跟注;其它情况则执行弃牌。
                                       在可比牌阶段，玩家以看牌的情况下超时未操作，若玩家是顺子及以上的牌型，系统会自动进行比牌的操作，
                                       若玩家是顺子以下的牌行（不包括顺子），则会执行弃牌操作，未看牌勾选按钮超时将自动弃牌。</p></li>
                              </ul>`,
                               `<ul>
                                <li><p>When entering the game, a 10 times the amount of the entry conditions is pre-stored, and the upper limit of the winning and losing is 10 times the entry conditions as the winning or losing amount.</p></li>
                                <li><p>Randomly assign 2 to 5 players to the same table</p></li>
                                <li><p>Before the deal, each player automatically put in the same chips as the bottom of the pot as the pot bottom</p></li>
                                <li><p>Each player deals 3 cards in turn, with the default card facing down</p></li>
                                <li><p>A random family performs the operation first, and starts to operate counterclockwise from his next home.</p></li>
                                <li><p>The second round can be compared, and the betting is also required. The amount is the same as the required call amount.</p></li>
                                <li><p>All players perform operations in turn called a round of up to 10 rounds</p></li>
                                <li><p>Reached the upper limit of the number of rounds, starting from Zhuang's betting house, and initiating a compulsory match with the next house in turn. At this time, there is no need to place bets on the match</p></li>
                                <li><p>The player raises after watching the card, compares the cards, calls the operation, and consumes 2 times as much chips as the card.</p></li>
                                <li><p>Players who lose or fold will be eliminated, and there can only be one winning player per round</p></li>
                                <li><p>Anti-timeout: Checked by default.
                                    After checking, in the case of card viewing, when the time of non-comparable cards is not overtime and the cards are straight or above, it will automatically call; otherwise, it will fold.
                                    In the phase of comparable cards, the player does not operate for a long time in the case of card viewing. If the player is a straight or above card type, the system will automatically perform the card comparison operation.
                                    If the player is in a line below the straight (excluding the straight), the discard operation will be performed. If the unchecked button is checked, the time will be automatically discarded.
                                    </p></li>
                              </ul>`,
                            ]
                },
                {
                    tagName: ["牌型","牌型","Card type"],
                    content: [`<ul>
                                <li><p>大小：豹子>同花順>金花>順子>對子>高牌；特殊>AAA</p></li>
                                <li><p>豹子：三張點相同的牌（AAA最大，222最小）</p></li>
                                <li><p>同花順：花色相同的順子（AKQ最大，A23最小）</p></li>
                                <li><p>金花：花色相同，非順子（AKJ最大，352最小）</p></li>
                                <li><p>順子　花色不同的順子（AKQ最大，A23最小）</p></li>
                                <li><p>對子：兩張點數相同的牌（AAK最大，223最小）</p></li>
                                <li><p>高牌：三張不組成任何類型的牌（AKJ最大，352最小）</p></li>
                                <li><p>特殊：散牌中的352</p></li>
                                <li><p>先比牌型：相同牌型按順序比點，點數相同按順序比花色</p></li>
                                <li><p>點數：2最小，A為最大。從大到小依次為：A，K，Q，J，10，9，8，7，6，5，4，3，2，</p></li>
                                <li><p>花色：黑桃>紅桃>梅花>方塊</p></li>
                                <li><p>順子：AKQ>KQJ．．．．．432>32A。注：KA2不是順子</p></li>
                                <li><p>對子牌型大小比較：先比對子點數，對子點數相同，再比單牌點數。單牌點數也相同，再比對子裡面的最大花色。</p></li>
                              </ul>`,
                              `<ul>
                                <li><p>大小：豹子>同花顺>金花>顺子>对子>高牌；特殊>AAA</p></li>
                                <li><p>豹子：三张点相同的牌（AAA最大，222最小）</p></li>
                                <li><p>同花顺：花色相同的顺子（AKQ最大，A23最小）</p></li>
                                <li><p>金花：花色相同，非顺子（AKJ最大，352最小）</p></li>
                                <li><p>顺子　花色不同的顺子（AKQ最大，A23最小）</p></li>
                                <li><p>对子：两张点数相同的牌（AAK最大，223最小）</p></li>
                                <li><p>高牌：三张不组成任何类型的牌（AKJ最大，352最小）</p></li>
                                <li><p>特殊：散牌中的352</p></li>
                                <li><p>先比牌型：相同牌型按顺序比点，点数相同按顺序比花色</p></li>
                                <li><p>点数：2最小，A为最大。从大到小依次为：A，K，Q，J，10，9，8，7，6，5，4，3，2，</p></li>
                                <li><p>花色：黑桃>红桃>梅花>方块</p></li>
                                <li><p>顺子：AKQ>KQJ． ． ． ． ． 432>32A。注：KA2不是顺子</p></li>
                                <li><p>对子牌型大小比较：先比对子点数，对子点数相同，再比单牌点数。单牌点数也相同，再比对子里面的最大花色。 </p></li>
                              </ul>`,
                              `<ul>
                                <li><p>Size: Leopard> Flush> Jinhua> Shunzi> Pair> High card; Special> AAA</p></li>
                                <li><p>Leopard: Three cards with the same points (AAA maximum, 222 minimum)</p></li>
                                <li><p>Straight Flush: The same suit straight (AKQ is the largest, A23 is the smallest)</p></li>
                                <li><p> Gold flower: same color, non-shun (AKJ max, 352 min) </ p> </ li>
                                <li><p> Straight straights with different suits (AKQ is the largest, A23 is the smallest) </ p> </ li>
                                <li><p> Pair: Two cards with the same points (AAK maximum, 223 minimum) </ p> </ li>
                                <li><p> High cards: three cards that do not make up any type (AKJ maximum, 352 minimum) </ p> </ li>
                                <li><p> Special: 352 in the scatter </ p> </ li>
                                <li><p> First compare cards: the same cards compare points in order, the same number of points compare suits </ p> </ li>
                                <li><p> Points: 2 minimum, A is maximum. From big to small: A, K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2, </ p> </ li>
                                <li><p> Color: Spades> Red peaches> Plum blossoms> Square </ p> </ li>
                                <li><p> Straight: AKQ> KQJ. ． ． ． ． 432> 32A. Note: KA2 is not a straight </ p> </ li>
                                <li><p> Comparison of the size of a pair of cards: first compare the number of points, the number of points is the same, and then compare the points of a single card. Single card points are also the same, and then the maximum suit in the pair. </ p> </ li>
                              </ul>`
                            ],
                },
                {
                    tagName: ["賠率","赔率","Odds"],
                    content: [`<ul>
                                <li><p>系統會從玩家贏的的籌碼中抽水5%</p></li>
                                <li><p>其他玩家多餘的投注籌碼=剩餘玩家本輪投注籌碼*（玩家自己應該投注籌碼-玩家自己實際投注籌碼）/玩家自己應該投注籌碼</p></li>
                             </ul>`,
                             `<ul>
                                <li><p>系统会从玩家赢的的筹码中抽水5%</p></li>
                                <li><p>其他玩家多余的投注筹码=剩余玩家本轮投注筹码*（玩家自己应该投注筹码-玩家自己实际投注筹码）/玩家自己应该投注筹码</p></li>
                             </ul>`,
                             `<ul>
                                <li> <p> The system will draw 5% from the player's winning chips </ p> </ li>
                                <li> <p> Additional betting chips of other players = remaining players' betting chips for the current round * (players should bet on chips-players should actually bet on chips) / players should bet on chips </ p> </ li>
                             </ul>`
                            ]
                }
            ],
            sungun: [
                {
                    tagName: ["玩法",'玩法','How to play'],
                    content:[ `<ul>
                                <li><p>進入遊戲時會預存一筆准入條件的10倍金額，輸贏上限則以准入條件的10倍作為輸贏的金額</p></li>
                                <li><p>開始發牌：遊戲開始後，系統向每位玩家發三張手牌，牌值不可見。</p></li>
                                <li><p>定莊：所有玩家開始搶莊，點過搶庄的玩家均有機會坐莊，如果多個玩家搶莊，
                                    那麼攜帶遊戲幣越多的玩家坐莊機會越大，如果都不搶，隨機產生一名玩家坐莊。
                                </p></li>
                                <li><p>開始下注：定莊後，所有玩家開始選擇下注金額，
                                莊家和閒家攜帶遊戲幣越多，最大可下注金額越大。</p></li>
                                <li><p>開牌：所有玩家下注完成後，玩家可以點擊攤牌按鈕亮出自己的手牌。</p></li>
                                <li><p>比牌：所有玩家攤牌後，莊家和閒家進行比牌，閒家與閒家之間不進行比牌。</p></li>
                                <li><p>結算公式：</p></li>
                                <li><p>A：房間底注</p></li>
                                <li><p>M：莊家牌型對應的倍數</p></li>
                                <li><p>N：閒家牌型對應的倍數</p></li>
                                <li><p>Y：閒家下注倍數</p></li>
                                <li><p>抽水：贏家所贏金額5%</p></li>
                                <li><p>莊家勝利所有遊戲幣=A*M*Y-抽水</p></li>
                                <li><p>莊家失敗所輸遊戲幣=A*N*Y</p></li>
                                <li><p>閒家勝利所贏遊戲幣=A*N*Y-抽水</p></li>
                                <li><p>閒家失敗所輸遊戲幣=A*M*Y</p></li>
                              </ul>`,
                              `<ul>
                                <li><p>进入游戏时会预存一笔准入条件的10倍金额，输赢上限则以准入条件的10倍作为输赢的金额</p></li>
                                <li><p>开始发牌：游戏开始后，系统向每位玩家发三张手牌，牌值不可见。 </p></li>
                                <li><p>定庄：所有玩家开始抢庄，点过抢庄的玩家均有机会坐庄，如果多个玩家抢庄，
                                    那么携带游戏币越多的玩家坐庄机会越大，如果都不抢，随机产生一名玩家坐庄。
                                </p></li>
                                <li><p>开始下注：定庄后，所有玩家开始选择下注金额，
                                庄家和闲家携带游戏币越多，最大可下注金额越大。 </p></li>
                                <li><p>开牌：所有玩家下注完成后，玩家可以点击摊牌按钮亮出自己的手牌。 </p></li>
                                <li><p>比牌：所有玩家摊牌后，庄家和闲家进行比牌，闲家与闲家之间不进行比牌。 </p></li>
                                <li><p>结算公式：</p></li>
                                <li><p>A：房间底注</p></li>
                                <li><p>M：庄家牌型对应的倍数</p></li>
                                <li><p>N：闲家牌型对应的倍数</p></li>
                                <li><p>Y：闲家下注倍数</p></li>
                                <li><p>抽水：赢家所赢金额5%</p></li>
                                <li><p>庄家胜利所有游戏币=A*M*Y-抽水</p></li>
                                <li><p>庄家失败所输游戏币=A*N*Y</p></li>
                                <li><p>闲家胜利所赢游戏币=A*N*Y-抽水</p></li>
                                <li><p>闲家失败所输游戏币=A*M*Y</p></li>
                            </ul>`,
                            `<ul>
                                <li> <p> 10 times the entry conditions will be pre-stored when entering the game, and the upper limit of winning and losing will be 10 times the entry conditions as the winning or losing amount.
                                <li> <p> Start to deal: After the game starts, the system will deal three cards to each player. The value of the cards is not visible. </ p> </ li>
                                <li> <p> Dingzhuang: All players start to grab the market. Players who have clicked to grab the market have the opportunity to sit in the market. If multiple players grab the market,
                                    Then the more players who carry more game coins, the greater the chance of sitting on the bank. If they do not grab, a player will be randomly generated.
                                </ p> </ li>
                                <li> <p> Betting Beginning: After the book is fixed, all players start to choose the bet amount,
                                The more bookmakers and players carry game currency, the greater the maximum bet amount. </ p> </ li>
                                <li> <p> Open: After all players have placed their bets, they can click the showdown button to show their cards. </ p> </ li>
                                <li> <p> Comparison: After all players have a showdown, the dealer and the player compare the cards. The players and the players do not compare cards. </ p> </ li>
                                <li> <p> Billing formula: </ p> </ li>
                                <li> <p> A: Room bet </ p> </ li>
                                <li> <p> M: the multiple of the dealer's card type </ p> </ li>
                                <li> <p> N: The multiple of the player's card type </ p> </ li>
                                <li> <p> Y: Players bet multiples </ p> </ li>
                                <li> <p> Drawback: 5% of the amount won by the winner </ p> </ li>
                                <li> <p> Banker wins all game coins = A * M * Y- pumping </ p> </ li>
                                <li> <p> Game currency lost by the banker's failure = A * N * Y </ p> </ li>
                                <li> <p> Game currency won by player victory = A * N * Y- pumping </ p> </ li>
                                <li> <p> Game currency lost by player failure = A * M * Y </ p> </ li>
                            </ul>`
                            ]
                },
                {
                    tagName: ["牌型","牌型","Card type"],
                    content: [`<ul>
                                <li class="cardType"><p>爆玖  5倍<span></span></p></li>
                                <li class="cardType"><p>炸彈  4倍<span></span></p></li>
                                <li class="cardType"><p>三公  3倍<span></span></p></li>
                                <li class="cardType"><p>九點  2倍<span></span></p></li>
                                <li class="cardType"><p>八點  2倍<span></span></p></li>
                                <li class="cardType"><p>七點  2倍<span></span></p></li>
                                <li class="cardType"><p>零點  1倍<span></span></p></li>
                                <li class="cardType"><p>一點  1倍<span></span></p></li>
                                <li class="cardType"><p>二點  1倍<span></span></p></li>
                                <li class="cardType"><p>三點  1倍<span></span></p></li>
                                <li class="cardType"><p>四點  1倍<span></span></p></li>
                                <li class="cardType"><p>五點  1倍<span></span></p></li>
                                <li class="cardType"><p>六點  1倍<span></span></p></li>
                             </ul>`,
                             `<ul>
                                <li class="cardType"><p>爆玖 5倍<span></span></p></li>
                                <li class="cardType"><p>炸弹 4倍<span></span></p></li>
                                <li class="cardType"><p>三公 3倍<span></span></p></li>
                                <li class="cardType"><p>九点 2倍<span></span></p></li>
                                <li class="cardType"><p>八点 2倍<span></span></p></li>
                                <li class="cardType"><p>七点 2倍<span></span></p></li>
                                <li class="cardType"><p>零点 1倍<span></span></p></li>
                                <li class="cardType"><p>一点 1倍<span></span></p></li>
                                <li class="cardType"><p>二点 1倍<span></span></p></li>
                                <li class="cardType"><p>三点 1倍<span></span></p></li>
                                <li class="cardType"><p>四点 1倍<span></span></p></li>
                                <li class="cardType"><p>五点 1倍<span></span></p></li>
                                <li class="cardType"><p>六点 1倍<span></span></p></li>
                             </ul>`,
                             `<ul>
                                <li class = "cardType"> <p> explode 5 times <span> </ span> </ p> </ li>
                                <li class = "cardType"> <p> Bomb 4x <span> </ span> </ p> </ li>
                                <li class = "cardType"> <p> Three public 3 times <span> </ span> </ p> </ li>
                                <li class = "cardType"> <p> Nine o'clock 2 times <span> </ span> </ p> </ li>
                                <li class = "cardType"> <p> Eight points 2 times <span> </ span> </ p> </ li>
                                <li class = "cardType"> <p> Seven points 2 times <span> </ span> </ p> </ li>
                                <li class = "cardType"> <p> Zero 1 times <span> </ span> </ p> </ li>
                                <li class = "cardType"> <p> One point 1 time <span> </ span> </ p> </ li>
                                <li class = "cardType"> <p> two points 1x <span> </ span> </ p> </ li>
                                <li class = "cardType"> <p> Three points 1x <span> </ span> </ p> </ li>
                                <li class = "cardType"> <p> Four points 1x <span> </ span> </ p> </ li>
                                <li class = "cardType"> <p> Five points 1x <span> </ span> </ p> </ li>
                                <li class = "cardType"> <p> Six points 1x <span> </ span> </ p> </ li>
                            </ul>`
                            ]
                },
                {
                    tagName: ["牌型算法","牌型算法","Card algorithm"],
                    content:[`<ul>
                                <li><p>牌面：J，Q，K，的點數都算0，也稱為公仔牌</p></li>
                                <li><p>爆玖：由任意三張3組成的牌型（333）</p></li>
                                <li><p>炸彈：由點數相同的三張牌組成的牌型（QQQ，222）</p></li>
                                <li><p>三公：由任意三張不相同的公仔牌組成的牌型（KKQ，KQJ）</p></li>
                                <li><p>點數牌：任意三張牌點數相加取個數位，（KQ9=9點，553=3點，235=0點）</p></li>
                             </ul>`,
                            `<ul>
                                <li><p>牌面：J，Q，K，的点数都算0，也称为公仔牌</p></li>
                                <li><p>爆玖：由任意三张3组成的牌型（333）</p></li>
                                <li><p>炸弹：由点数相同的三张牌组成的牌型（QQQ，222）</p></li>
                                <li><p>三公：由任意三张不相同的公仔牌组成的牌型（KKQ，KQJ）</p></li>
                                <li><p>点数牌：任意三张牌点数相加取个数位，（KQ9=9点，553=3点，235=0点）</p></li>
                            </ul>`,
                            `<ul>
                                <li> <p> Face: J, Q, K, all points are counted as 0, also known as doll cards </ p> </ li>
                                <li> <p> Blast: A card type consisting of any three 3s (333) </ p> </ li>
                                <li> <p> Bomb: A card type consisting of three cards with the same points (QQQ, 222) </ p> </ li>
                                <li> <p> San Gong: A card type consisting of any three different figurine cards (KKQ, KQJ) </ p> </ li>
                                <li> <p> Point cards: Add the points of any three cards to get digits, (KQ9 = 9 points, 553 = 3 points, 235 = 0 points) </ p> </ li>
                            </ul>`
                            ],
                },
                {
                    tagName: ["牌型大小","牌型大小","Card size"],
                    content: [`<ul>
                                <li><p>牌型點數大小：K>Q>J>10>9>8>7>6>5>4>3>2>A</p></li>
                                <li><p>花色：黑桃>紅桃>梅花>方塊</p></li>
                                <li><p>基本牌型大小比較：爆玖>炸彈>三公>9點>8點>7點>6點>5點>4點>3點>2點>1點>0點</p></li>
                                <li><p>如果多家牌型都是三公，則先比較玩家最大贏的那張公仔牌的大小（KQJ，QQJ）。</p></li>
                                <li><p>如果還是相同，則比較玩家最大公仔牌的花色。</p></li>
                                <li><p>炸彈大小比較： KKK>QQQ>JJJ>101010>999>888>777>666>555>444>333>222>AAA</p></li>
                                <li><p>點數牌大小比較：如果多個玩家都是相同點數的牌，那麼先比較玩家公仔牌的數量，
                                誰的公仔牌數量多誰大（J Q 9>J 10 9）如果公仔牌數量還是一致則比較最大的那張單的大小（K Q 9>J Q 9），如果大小還相同則比較最大牌的花色。</p></li>
                             </ul>`,
                             `<ul>
                                <li><p>牌型点数大小：K>Q>J>10>9>8>7>6>5>4>3>2>A</p></li>
                                <li><p>花色：黑桃>红桃>梅花>方块</p></li>
                                <li><p>基本牌型大小比较：爆玖>炸弹>三公>9点>8点>7点>6点>5点>4点>3点>2点>1点>0点</ p></li>
                                <li><p>如果多家牌型都是三公，则先比较玩家最大赢的那张公仔牌的大小（KQJ，QQJ）。 </p></li>
                                <li><p>如果还是相同，则比较玩家最大公仔牌的花色。 </p></li>
                                <li><p>炸弹大小比较： KKK>QQQ>JJJ>101010>999>888>777>666>555>444>333>222>AAA</p></li>
                                <li><p>点数牌大小比较：如果多个玩家都是相同点数的牌，那么先比较玩家公仔牌的数量，
                                谁的公仔牌数量多谁大（J Q 9>J 10 9）如果公仔牌数量还是一致则比较最大的那张单的大小（K Q 9>J Q 9），如果大小还相同则比较最大牌的花色。 </p></li>
                             </ul>`,
                             `<ul>
                                <li> <p> Card size: K> Q> J> 10> 9> 8> 7> 6> 5> 4> 3> 2> A </ p> </ li>
                                <li> <p> Color: Spades> Red peaches> Plum blossoms> Square </ p> </ li>
                                <li> <p> Comparison of basic card sizes: Explosion> Bomb> San Gong> 9 points> 8 points> 7 points> 6 points> 5 points> 4 points> 3 points> 2 points> 1 point> 0 points </ p> </ li>
                                <li> <p> If multiple cards are all three, compare the size of the doll card (KQJ, QQJ) that the player won the most. </ p> </ li>
                                <li> <p> If they are still the same, compare the suit of the player's largest doll. </ p> </ li>
                                <li> <p> Compare bomb sizes: KKK> QQQ> JJJ> 101010> 999> 888> 777> 666> 555> 444> 333> 222> AAA </ p> </ li>
                                <li> <p> Comparison of point card sizes: If multiple players are cards with the same points, then compare the number of player doll cards first,
                                Who has the most number of doll cards (J Q 9> J 10 9) If the number of doll cards is still the same, then the size of the largest card (K Q 9> J Q 9), if the size is still the same, compare the suit of the largest card. </ p> </ li>
                             </ul>`
                            ],
                }
            ],
            candy: [
                {
                    tagName: ["玩法",'玩法','How to play'],
                    content: [`<ul>
                                <li><p>進入遊戲後，請從上方糖果列中選擇一顆，再從下方糖果列中選擇下注配對的糖果，可為多選下注組數。</p></li>
                                <li><p>選擇結束後，請輸入下注金額，金額確認後按下「確認下注」即可完成下注。</p></li>
                                <li><p>賠率：下注一組5.00倍、下注二組2.50倍、下注三組1.60倍、下注四組1.25倍、下注五組1.00倍。</p></li>
                              </ul>`,
                              `<ul>
                                <li><p>进入游戏后，请从上方糖果列中选择一颗，再从下方糖果列中选择下注配对的糖果，可为多选下注组数。 </p></li>
                                <li><p>选择结束后，请输入下注金额，金额确认后按下「确认下注」即可完成下注。 </p></li>
                                <li><p>赔率：下注一组5.00倍、下注二组2.50倍、下注三组1.60倍、下注四组1.25倍、下注五组1.00倍。 </p></li>
                              </ul>`,
                              `<ul>
                                <li> <p> After entering the game, please select one from the candy column above, and then select the matching candy from the candy column below. You can select multiple betting groups. </ p> </ li>
                                <li> <p> After the selection is completed, please enter the bet amount. After confirming the amount, press "Confirm bet" to complete the bet. </ p> </ li>
                                <li> <p> Odds: 5.00 times for one group, 2.50 times for two groups, 1.60 times for three groups, 1.25 times for four groups, and 1.00 times for five groups. </ p> </ li>
                              </ul>`,
                            ],
                },
            ],
            slot: [
                {
                    tagName: ["玩法",'玩法','How to play'],
                    content: [`<ul>
                                <li><p></p>123</li>
                              </ul>`,
                              `<ul>
                                <li><p></p>123</li>
                              </ul>`,
                              `<ul>
                                <li><p></p>123</li>
                              </ul>`
                            ],
                }
            ],
            lottery: [
                {
                    tagName: ["玩法",'玩法','How to play'],
                    content:[ `<ul>
                                <li><p>每一個車號為一投注組合，投注車號對應所投名次視為中獎，其餘情況視為不中獎。</p></li>
                                <li><p>例：投注車號1為冠軍，開獎結果車號1為冠軍，即為中獎。</p></li>
                                <li><p>單、雙：號碼為單數叫單，如：1、3、5、7、9，號碼為雙數叫雙，如：2、4、6、8、10。投注車號對應所投單雙視為中獎，反之視為不中獎。</p></li>
                                <li><p>例：投注冠軍位為雙，開獎結果冠軍位為車號2即為中獎。</p></li>
                                <li><p>大、小：開出之號碼大於等於6為大，小於等於5為小。投注車號對應所投大小視為中獎，反之視為不中獎。</p></li>
                                <li><p>例：投注冠軍位為大，開獎結果冠軍位為車號6即為中獎。</p></li>
                                <li><p>冠軍龍/虎：“第一名”車號大於“第十名”車號視為【龍】中獎、反之小於視為【虎】中獎。</li></p>
                                <li><p>亞軍龍/虎：“第二名”車號大於“第九名”車號視為【龍】中獎、反之小於視為【虎】中獎。</li></p>
                                <li><p>第三名龍/虎：“第三名”車號大於“第八名”車號視為【龍】中獎、反之小於視為【虎】中獎。</li></p>
                                <li><p>第四名龍/虎：“第四名”車號大於“第七名”車號視為【龍】中獎、反之小於視為【虎】中獎。</li></p>
                                <li><p>第五名龍/虎：“第五名”車號大於“第六名”車號視為【龍】中獎、反之小於視為【虎】中獎。</li></p>
                                <li><p>冠亞和單雙：“冠亞和值”為單視為投注“單”的注單視為中獎，為雙視為投注“雙”的注單視為中獎，其餘視為不中獎。</p></li>
                                <li><p>冠亞和大小：“冠亞和值”大於11時投注“大”的注單視為中獎，小於或等於11時投注“小”的注單視為中獎，其餘視為不中獎。</p></li>
                                <li><p>冠亞和指定：“冠亞和值”可能出現的結果為3～19， 投中對應“冠亞和值”數字的視為中獎，其餘視為不中獎。</p></li>
                              </ul>`,
                              `<ul>
                                <li><p>每一个车号为一投注组合，投注车号对应所投名次视为中奖，其余情况视为不中奖。 </p></li>
                                <li><p>例：投注车号1为冠军，开奖结果车号1为冠军，即为中奖。 </p></li>
                                <li><p>单、双：号码为单数叫单，如：1、3、5、7、9，号码为双数叫双，如：2、4、6、8、10。投注车号对应所投单双视为中奖，反之视为不中奖。 </p></li>
                                <li><p>例：投注冠军位为双，开奖结果冠军位为车号2即为中奖。 </p></li>
                                <li><p>大、小：开出之号码大于等于6为大，小于等于5为小。投注车号对应所投大小视为中奖，反之视为不中奖。 </p></li>
                                <li><p>例：投注冠军位为大，开奖结果冠军位为车号6即为中奖。 </p></li>
                                <li><p>冠军龙/虎：“第一名”车号大于“第十名”车号视为【龙】中奖、反之小于视为【虎】中奖。 </li></p>
                                <li><p>亚军龙/虎：“第二名”车号大于“第九名”车号视为【龙】中奖、反之小于视为【虎】中奖。 </li></p>
                                <li><p>第三名龙/虎：“第三名”车号大于“第八名”车号视为【龙】中奖、反之小于视为【虎】中奖。 </li></p>
                                <li><p>第四名龙/虎：“第四名”车号大于“第七名”车号视为【龙】中奖、反之小于视为【虎】中奖。 </li></p>
                                <li><p>第五名龙/虎：“第五名”车号大于“第六名”车号视为【龙】中奖、反之小于视为【虎】中奖。 </li></p>
                                <li><p>冠亚和单双：“冠亚和值”为单视为投注“单”的注单视为中奖，为双视为投注“双”的注单视为中奖，其余视为不中奖。 </p></li>
                                <li><p>冠亚和大小：“冠亚和值”大于11时投注“大”的注单视为中奖，小于或等于11时投注“小”的注单视为中奖，其余视为不中奖。 </p></li>
                                <li><p>冠亚和指定：“冠亚和值”可能出现的结果为3～19， 投中对应“冠亚和值”数字的视为中奖，其余视为不中奖。 </p></li>
                            </ul>`,
                            `<ul>
                                <li> <p> Each car number is a betting combination. The betting car number corresponding to the voted position is regarded as winning, and the other cases are regarded as not winning. </ p> </ li>
                                <li> <p> For example: betting on car number 1 is the champion, and the result of the draw is that car number 1 is the winner, that is, winning. </ p> </ li>
                                <li> <p> Single and double: If the number is singular, it is called single, such as: 1, 3, 5, 7, 9, and when the number is double, it is called double, such as: 2, 4, 6, 8, 10. Bets on the car number corresponding to the single or double vote will be regarded as winning, otherwise it will be regarded as not winning. </ p> </ li>
                                <li> <p> For example: If the bet on the winner is double, the winner of the draw is car number 2 for winning. </ p> </ li>
                                <li> <p> Large and small: Numbers greater than or equal to 6 are large, and numbers less than or equal to 5 are small. Bets on the car number corresponding to the size of the vote will be considered as winning, otherwise it will be deemed as not winning. </ p> </ li>
                                <li> <p> For example: betting on the winner is the big one, and the winner of the draw is car number 6 to win. </ p> </ li>
                                <li> <p> Championship Dragon / Tiger: "First" car number is greater than "Tenth" car number is regarded as [Dragon] winning, otherwise less than [Tiger] winning. </ li> </ p>
                                <li> <p> The runner-up Dragon / Tiger: "No. 2" car number is greater than "Ninth" car number is regarded as [Dragon] winning, otherwise less than [Tiger] winning. </ li> </ p>
                                <li> <p> Third place Dragon / Tiger: The car number of the "third place" is greater than the "eighth place". </ li> </ p>
                                <li> <p> Fourth place Dragon / Tiger: The car number of the "fourth place" is greater than the "seventh place". The car number is regarded as the [Dragon] winning, otherwise it is regarded as the [Tiger] winning. </ li> </ p>
                                <li> <p> Fifth place Dragon / Tiger: The car number of the "Fifth place" is greater than the "Sixth place". </ li> </ p>
                                <li> <p> Guanya and singles and doubles: "Guanya and value" is regarded as a single bet "single" bet is considered as a win, doubles are regarded as a "double" bet is regarded as a win, the rest are considered No win. </ p> </ li>
                                <li> <p> Guanya and size: bets placed on "big" when "Guanya sum value" is greater than 11 will be considered as winning, bets on "small" if it is less than or equal to 11 will be considered as winning, and the rest as No winning. </ p> </ li>
                                <li> <p> Guanyahe Designation: The possible results of "Guanyahe Value" are 3 to 19. Those who vote for the corresponding number of "Guanyahe Value" will be regarded as winning, and the rest will be regarded as not winning. </ p> </ li>
                            </ul>`
                            ]
                }
            ]
        }
    }

    static init(gameType) {
        const guide = new GameplayGuide(gameType)

        return guide
    }

    _createMenuListElement(value, index) {
        return `
        <div id="${this.idPrifix}_tag_${index}" class="${this.idPrifix}_tag ${value === '玩法' ? 'active' : ''}">
            ${value}
        </div>
        `
    }

    _createMenuList() {
        let lan =$('#language').data("lan")
        // console.log(lan)
        let index = null
        switch (lan) {
            case 'zh-TW':
                index = 0
                break;
            case 'zh-CN':
                index = 1
                break;
            case 'en':
                index = 2
                break;
        }
        return `
        <div id="${this.idPrifix}_menuList" class="${this.gameType}">
            ${this.data[this.gameType].map((val, idx) => this._createMenuListElement(val.tagName[index], idx)).join("")}
        </div>
        `
    }

    _createDetail(index = this.nowPage) {
        let lan =$('#language').data("lan")
        let i = null
        switch (lan) {
            case 'zh-TW':
                i = 0
                break;
            case 'zh-CN':
                i = 1
                break;
            case 'en':
                i = 2
                break;
        }
        return `
        <div id="${this.idPrifix}_detail" class="${this.gameType}">
            ${this.data[this.gameType][index].content[i]}
        </div>
        `
    }

    _changeDetail(index) {
        if (this.nowPage === index) return this
        $("#" + this.idPrifix + "_detail").remove()
        $("#" + this.idPrifix + "_content").append(this._createDetail(index))
        this.nowPage = index

        return this
    }

    /** 
     * 創建選單
     * @returns {GameplayGuide} 此物件
     */
    _createDOM() {
        if (this.gameType === 'baccarat') {
            for (let index = 0; index < 10; index++) {
                this.baccaratTypeData.push(index)
            }
            console.log("test", this.baccaratTypeData)
        }
        let md = this
        const html = `
        <div id="${this.idPrifix}_main">
            ${this._createTitle(this.title)}
            ${this._createContent(this._createMenuList(), this._createDetail())}
        </div>`

        $("body").append(html)
        $("." + this.idPrifix + "_tag").each(function (index) {
            $(this).click(function () {
                md._changeDetail(index)
                $('.gameplayGuide_tag.active').removeClass('active')
                $('#gameplayGuide_tag_' + index).addClass('active')
            })
        })
        $("#" + this.idPrifix + "_title_close").on("click", () => this._deleteDOM())

        this.isOpen = true

        return this
    }
}