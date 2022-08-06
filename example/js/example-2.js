function metamascaraExample2() {
  const { blockchainConnections, MetaMascaraFactory } = meta;

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

  addNetworkBtn.on("click", function (ev) {
    ev.preventDefault();
    if (addNetworkBtn.hasClass("disabled")) {
      return;
    }

    const chain = select.find("option:selected").data("chain");
    if (!chain) {
      return;
    }

    window.metamascara.addNetwork(chain);
  });
}

$(function () {
  metamascaraExample2();
});