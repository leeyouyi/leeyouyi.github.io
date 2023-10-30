if (window.ApplePaySession) {
  var merchantIdentifier = "example.com.store";
  var promise =
    ApplePaySession.canMakePaymentsWithActiveCard(merchantIdentifier);
  promise.then(function (canMakePayments) {
    if (canMakePayments) {
      // Display Apple Pay button here.
      console.log("Display Apple Pay button here.");
    }
  });
}

function handleClick() {
  // Define ApplePayPaymentRequest
  /** Apple Pay付款請求 */
  const request = {
    countryCode: "US",
    currencyCode: "USD",
    merchantCapabilities: ["supports3DS"],
    supportedNetworks: ["visa", "masterCard", "amex", "discover"],
    total: {
      label: "Demo (Card is not charged)",
      type: "final",
      amount: "1.99",
    },
  };

  // Create ApplePaySession
  const session = new ApplePaySession(3, request);

  /**  驗證商戶 */
  session.onvalidatemerchant = async (event) => {
    // Call your own server to request a new merchant session.
    const merchantSession = await validateMerchant();
    session.completeMerchantValidation(merchantSession);
  };

  /** 已選擇付款方式 */
  session.onpaymentmethodselected = (event) => {
    // Define ApplePayPaymentMethodUpdate based on the selected payment method.
    // No updates or errors are needed, pass an empty object.
    const update = {};
    session.completePaymentMethodSelection(update);
  };

  /** 出貨方式已選擇  */
  session.onshippingmethodselected = (event) => {
    // Define ApplePayShippingMethodUpdate based on the selected shipping method.
    // No updates or errors are needed, pass an empty object.
    const update = {};
    session.completeShippingMethodSelection(update);
  };

  /** 出貨聯絡方式已選擇 */
  session.onshippingcontactselected = (event) => {
    // Define ApplePayShippingContactUpdate based on the selected shipping contact.
    const update = {};
    session.completeShippingContactSelection(update);
  };

  /** 授權付款 */
  session.onpaymentauthorized = (event) => {
    // Define ApplePayPaymentAuthorizationResult
    const result = {
      status: ApplePaySession.STATUS_SUCCESS,
    };
    session.completePayment(result);
  };

  /** 優惠券代碼更改時 */
  session.oncouponcodechanged = (event) => {
    // Define ApplePayCouponCodeUpdate
    const newTotal = calculateNewTotal(event.couponCode);
    const newLineItems = calculateNewLineItems(event.couponCode);
    const newShippingMethods = calculateNewShippingMethods(event.couponCode);
    const errors = calculateErrors(event.couponCode);

    /** 完成優惠券代碼更改 */
    session.completeCouponCodeChange({
      newTotal: newTotal,
      newLineItems: newLineItems,
      newShippingMethods: newShippingMethods,
      errors: errors,
    });
  };
  /** 取消 */
  session.oncancel = (event) => {
    // Payment cancelled by WebKit
  };
  /** 開始 */
  session.begin();
}

console.log("load js");
