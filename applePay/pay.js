class paySDK {
  constructor() {
    /** googlePay Start============================================================================================================*/
    // document.write(
    //   '<script async src="https://pay.google.com/gp/p/js/pay.js"  onload="sdk.googlePay.onGooglePayLoaded()"></script>'
    // );
    const googlePayScript = document.createElement("script");
    googlePayScript.setAttribute("type", "text/javascript");
    googlePayScript.setAttribute(
      "src",
      "https://pay.google.com/gp/p/js/pay.js"
    );
    googlePayScript.setAttribute("async", true);
    googlePayScript.setAttribute("onload", "sdk.googlePay.onGooglePayLoaded()");
    document.getElementsByTagName("head")[0].appendChild(googlePayScript);

    this.googlePay = {};
    this.googlePay.onGooglePayLoaded = function () {
      const paymentsClient = this.getGooglePaymentsClient();
      if (!paymentsClient) {
        return;
      }
      return paymentsClient
        .isReadyToPay(this.getGoogleIsReadyToPayRequest())
        .then((response) => {
          if (response.result) {
            // return response.result;
            this.addGooglePayButton();
          }
        })
        .catch((err) => {
          // show error in developer console for debugging
          console.error(err);
        });
    };
    /** 取得使用者googlePay資訊 */
    this.googlePay.getGooglePaymentsClient = function () {
      if (this.paymentsClient === null) {
        this.paymentsClient = new google.payments.api.PaymentsClient({
          environment: this.environment,
          merchantInfo: this.merchantInfo,
          paymentDataCallbacks: {
            onPaymentAuthorized: this.onPaymentAuthorized,
          },
        });
      }
      return this.paymentsClient;
    };
    /** 準備付款請求 */
    this.googlePay.getGoogleIsReadyToPayRequest = function () {
      return Object.assign({}, this.baseRequest, {
        allowedPaymentMethods: [this.baseCardPaymentMethod],
      });
    };
    /** 添加googlePay按鈕 */
    this.googlePay.addGooglePayButton = function () {
      const paymentsClient = this.getGooglePaymentsClient();
      // const button = paymentsClient.createButton({
      //   onClick: this.onGooglePaymentButtonClicked,
      // });
      const button = paymentsClient.createButton({
        ...this.googlePayButtonOptions,
        onClick: this.onGooglePaymentButtonClicked,
      });
      document.getElementById(this.googlePayButtonID).appendChild(button);
    };
    /** 點擊 Google 付款按鈕 */
    this.googlePay.onGooglePaymentButtonClicked = function () {
      const paymentDataRequest = sdk.googlePay.getGooglePaymentDataRequest();
      paymentDataRequest.transactionInfo =
        sdk.googlePay.getGoogleTransactionInfo();

      const paymentsClient = sdk.googlePay.getGooglePaymentsClient();
      paymentsClient.loadPaymentData(paymentDataRequest);
    };
    /** 取得Google交易訊息 */
    this.googlePay.getGoogleTransactionInfo = function () {
      return this.transactionInfo;
    };
    /** 付款授權 */
    this.googlePay.onPaymentAuthorized = (paymentData) => {
      return new Promise((resolve, reject) => {
        // handle the response

        sdk.googlePay
          .processPayment(paymentData)
          .then(() => {
            resolve({ transactionState: "SUCCESS" });
          })
          .catch(() => {
            resolve({
              transactionState: "ERROR",
              error: {
                intent: "PAYMENT_AUTHORIZATION",
                message:
                  "Insufficient funds, try again. Next attempt should work.",
                reason: "PAYMENT_DATA_INVALID",
              },
            });
          });
      });
    };
    /** 付款資料請求 */
    this.googlePay.getGooglePaymentDataRequest = function () {
      const paymentDataRequest = Object.assign({}, this.baseRequest);
      paymentDataRequest.allowedPaymentMethods = [this.cardPaymentMethod];
      paymentDataRequest.transactionInfo = this.getGoogleTransactionInfo();
      paymentDataRequest.merchantInfo = {
        // @todo a merchant ID is available for a production environment after approval by Google
        // See {@link https://developers.google.com/pay/api/web/guides/test-and-deploy/integration-checklist|Integration checklist}
        merchantId: this.merchantInfo.merchantId,
        merchantName: this.merchantInfo.merchantName,
      };

      paymentDataRequest.callbackIntents = ["PAYMENT_AUTHORIZATION"];

      return paymentDataRequest;
    };
    /** 流程付款 */
    this.googlePay.processPayment = (paymentData) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // @todo pass payment token to your gateway to process payment
          const paymentToken =
            paymentData.paymentMethodData.tokenizationData.token;
          // if (this.attempts++ % 2 == 0) {
          //   reject(
          //     new Error("Every other attempt fails, next one should succeed")
          //   );
          // } else {
          //   resolve(this.callback(paymentToken));resolve(this.callback(paymentToken));
          // }
          resolve(sdk.googlePay.callback(paymentToken));
        }, 500);
      });
    };
    /** =========================================googlePay End=================================================================*/
    /** applePay  Start*/
    // document.write(
    //   '<script async  crossorigin src="https://applepay.cdn-apple.com/jsapi/v1.1.0/apple-pay-sdk.js"></script>'
    // );
    const applePayScript = document.createElement("script");
    applePayScript.setAttribute("type", "text/javascript");
    applePayScript.setAttribute(
      "src",
      "https://applepay.cdn-apple.com/jsapi/v1.1.0/apple-pay-sdk.js"
    );
    applePayScript.setAttribute("async", true);
    document.getElementsByTagName("head")[0].appendChild(applePayScript);
    /** 檢查apple pAy 可不可用 */
    if (window.ApplePaySession) {
      if (!ApplePaySession.canMakePayments()) {
        console.warn("User Can Not Use Apple Pay");
      }
    } else {
      console.warn("Please open on a supported applePay browser");
    }
    this.applePay = {};
  }
  /** googlePay Start ================================================================================================================*/
  /** 設定googlePay參數 */
  setGooglePay = function (googlePayParams) {
    const {
      googlePayButtonID = "googlePayButton",
      // 開發環境或者產品環境   TEST || PRODUCTION,
      environment = "TEST",
      // 允許的卡片驗證方法
      allowedCardAuthMethods = ["PAN_ONLY", "CRYPTOGRAM_3DS"],
      // 允許的卡片
      allowedCardNetworks = [
        "AMEX",
        "DISCOVER",
        "INTERAC",
        "JCB",
        "MASTERCARD",
        "VISA",
      ],
      // 通道
      parameters = {
        // gateway: "example",
        // gatewayMerchantId: "exampleGatewayMerchantId",
        gateway: "nccc",
        gatewayMerchantId: "0130800048",
      },
      // 商家
      merchantInfo = {
        merchantName: "測試商家",
        merchantId: "01234567890123456789",
      },
      // 付款資訊
      transactionInfo = {
        countryCode: "TW",
        currencyCode: "TWD",
        totalPriceStatus: "FINAL",
        totalPrice: "12.00",
        totalPriceLabel: "合計",
        /**詳細 */
        displayItems: [
          {
            label: "小計",
            type: "SUBTOTAL",
            price: "11.00",
          },
          {
            label: "稅",
            type: "TAX",
            price: "1.00",
          },
        ],
      },
      googlePayButtonOptions = {
        elementId: "google-pay",
        buttonColor: "default", // default, black, white
        buttonType: "pay", // book, buy, checkout, donate, order, pay, plain, subscribe
        buttonLocale: "en", // en, ar, bg, ca, cs, da, de, el, es, et, fi, fr, hr, id, it, ja, ko, ms, nl, no, pl, pt, ru, sk, sl, sr, sv, th, tr, uk, zh
        buttonSizeMode: "static", // static, fill
      },
    } = googlePayParams;

    const baseRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
    };

    const baseCardPaymentMethod = {
      type: "CARD",
      parameters: {
        allowedAuthMethods: allowedCardAuthMethods,
        allowedCardNetworks: allowedCardNetworks,
      },
    };
    const tokenizationSpecification = {
      type: "PAYMENT_GATEWAY",
      parameters: parameters,
    };

    this.googlePay.googlePayButtonID = googlePayButtonID;
    this.googlePay.environment = environment;
    this.googlePay.baseRequest = baseRequest;
    this.googlePay.allowedCardAuthMethods = allowedCardAuthMethods;
    this.googlePay.allowedCardNetworks = allowedCardNetworks;
    this.googlePay.merchantInfo = merchantInfo;
    this.googlePay.transactionInfo = transactionInfo;
    this.googlePay.googlePayButtonOptions = googlePayButtonOptions;
    this.googlePay.tokenizationSpecification = tokenizationSpecification;
    this.googlePay.baseCardPaymentMethod = baseCardPaymentMethod;

    this.googlePay.cardPaymentMethod = Object.assign(
      {},
      this.googlePay.baseCardPaymentMethod,
      {
        tokenizationSpecification: this.googlePay.tokenizationSpecification,
      }
    );
    this.googlePay.paymentsClient = null;
    this.googlePay.attempts = 0;
    this.googlePay.paymentToken = null;
  };
  /** 設定取得token的function */
  setGoogleCallback = function (callback) {
    this.googlePay.callback = callback;
  };
  /** googlePay End ==============================================================================================================*/
  /** ApplePay  Start*/
  /** 設定付款資訊 */
  setApplePay = function (aoolePayParams) {
    const { applePayPaymentRequest } = aoolePayParams;
    this.applePay.applePayPaymentRequest = applePayPaymentRequest;
  };
  /** 設定驗證商戶的function */
  setAppleValidateMerchant = function (validateMerchant) {
    this.applePay.validateMerchant = validateMerchant;
  };
  /** 設定回傳token的function */
  setApplePayCallback = function (callback) {
    this.applePay.callback = callback;
  };
  /** 設定付款完成的狀態 */
  setApplePayCompletePayment = function (result) {
    this.applePay.completePayment = result;
  };
  /** applePay按鈕 執行的function */
  onApplePayButtonClicked = function () {
    // Ensure browser supports Apple Pay
    if (!ApplePaySession) {
      return;
    }
    // Create ApplePaySession
    const version = 3; // Apple Pay 版本可在 macOS 10.13 和 iOS 11 中使用
    const session = new ApplePaySession(
      version,
      sdk.applePay.applePayPaymentRequest
    );

    /**  驗證商戶 */
    session.onvalidatemerchant = async (event) => {
      console.log(event);
      // Call your own server to request a new merchant session.
      const merchantSession = await sdk.applePay.validateMerchant(
        event.validationURL
      );
      session.completeMerchantValidation(merchantSession);
    };

    /** 授權付款 */
    session.onpaymentauthorized = (event) => {
      // Define ApplePayPaymentAuthorizationResult
      sdk.applePay.callback(event.payment.token.paymentData);

      const result = {
        status: sdk.applePay.completePayment
          ? ApplePaySession.STATUS_SUCCESS
          : ApplePaySession.STATUS_FAILURE,
      };
      session.completePayment(result);
    };
    /** 取消 */
    session.oncancel = (event) => {
      // Payment cancelled by WebKit
      alert("取消付款或付款失敗");
    };
    /** 開始 */
    session.begin();

    // /** 已選擇付款方式 */
    // session.onpaymentmethodselected = (event) => {
    //   // Define ApplePayPaymentMethodUpdate based on the selected payment method.
    //   // No updates or errors are needed, pass an empty object.
    //   console.log("paymentChange", event);
    //   const update = {
    //     newTotal: {
    //       label: "Demo (Card is not charged)",
    //       type: "final",
    //       amount: "100",
    //     },
    //   };
    //   // const update = {};
    //   session.completePaymentMethodSelection(update);
    // };

    // /** 出貨方式已選擇  */
    // session.onshippingmethodselected = (event) => {
    //   console.log("shippingMethodChange", event);
    //   // Define ApplePayShippingMethodUpdate based on the selected shipping method.
    //   // No updates or errors are needed, pass an empty object.
    //   const update = {};
    //   session.completeShippingMethodSelection(update);
    // };

    // /** 出貨聯絡方式已選擇 */
    // session.onshippingcontactselected = (event) => {
    //   console.log("onshippingcontactselected", event);
    //   // Define ApplePayShippingContactUpdate based on the selected shipping contact.
    //   const update = {};
    //   session.completeShippingContactSelection(update);
    // };

    // /** 優惠券代碼更改時 */
    // session.oncouponcodechanged = (event) => {
    //   // Define ApplePayCouponCodeUpdate
    //   const newTotal = calculateNewTotal(event.couponCode);
    //   const newLineItems = calculateNewLineItems(event.couponCode);
    //   const newShippingMethods = calculateNewShippingMethods(event.couponCode);
    //   const errors = calculateErrors(event.couponCode);

    //   /** 完成優惠券代碼更改 */
    //   session.completeCouponCodeChange({
    //     newTotal: newTotal,
    //     newLineItems: newLineItems,
    //     newShippingMethods: newShippingMethods,
    //     errors: errors,
    //   });
    // };
  };
  /** ApplePay  End*/
}
