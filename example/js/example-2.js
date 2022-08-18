function metamascaraExample2() {
  const { blockchainConnections, MetaMascaraFactory } = mmascara;

  window.metamascara = window.metamascara || MetaMascaraFactory.newInstance();  // Create a new metamascara instance 

  const select = $("#network-select");
  const addNetworkBtn = $("#add-network");

  //  Fill the network select with the some blockchains
  Object.keys(blockchainConnections).forEach(chainId => {
    const chain = blockchainConnections[chainId];
    const option = $("<option>").data("chain", chain).val(chainId).text(chain.chainId + " - " + chain.chainName);
    select.append(option);
  });

  //  Events
  $("body").on("web3-connected", function () {
    addNetworkBtn.removeClass("disabled").removeAttr("disabled");
  });

  $("body").on("web3-disconnected", function () {
    addNetworkBtn.addClass("disabled").attr("disabled", true);
  });

  addNetworkBtn.on("click", async function (ev) {
    ev.preventDefault();
    if (addNetworkBtn.hasClass("disabled")) {
      return;
    }

    const chain = select.find("option:selected").data("chain");
    if (!chain) {
      return;
    }

    const result = await window.metamascara.addNetwork(chain);

    if (!result) {
      alert("Network already selected. Please select another blockchain.");
    }
    else {
      //  Set the check for the example
      setExampleCheckStatus(2, true);
    }
  });
}

$(function () {
  metamascaraExample2();
});