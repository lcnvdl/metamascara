function metamascaraExample3() {
  const { MetaMascaraFactory, BigNumberUtils } = mmascara;

  window.metamascara = window.metamascara || MetaMascaraFactory.newInstance();  // Create a new metamascara instance 

  const getBalanceBtn = $("#get-balance");

  //  Events
  $("body").on("web3-connected", function () {
    getBalanceBtn.removeClass("disabled").removeAttr("disabled");
  });

  $("body").on("web3-disconnected", function () {
    getBalanceBtn.addClass("disabled").attr("disabled", true);
  });

  getBalanceBtn.on("click", async function (ev) {
    ev.preventDefault();
    if (getBalanceBtn.hasClass("disabled")) {
      return;
    }

    const result = await window.metamascara.getBalance();

    const balance = BigNumberUtils.byDecimals(result.toString(), 18);

    alert("ETH Balance: " + balance);
    
    //  Set the check for the example
    setExampleCheckStatus(3, true);
  });
}

$(function () {
  metamascaraExample3();
});