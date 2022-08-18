function metamascaraExample4() {
  const { MetaMascaraFactory, BigNumberUtils } = mmascara;

  window.metamascara = window.metamascara || MetaMascaraFactory.newInstance();  // Create a new metamascara instance 

  const signBtn = $("#sign");

  //  Events
  $("body").on("web3-connected", function () {
    signBtn.removeClass("disabled").removeAttr("disabled");
  });

  $("body").on("web3-disconnected", function () {
    signBtn.addClass("disabled").attr("disabled", true);
  });

  signBtn.on("click", async function (ev) {
    ev.preventDefault();
    if (signBtn.hasClass("disabled")) {
      return;
    }

    const result = await window.metamascara.sign('Hi! You are signing this text.');

    alert("Signature: " + result);

    //  Set the check for the example
    setExampleCheckStatus(4, true);
  });
}

$(function () {
  metamascaraExample4();
});