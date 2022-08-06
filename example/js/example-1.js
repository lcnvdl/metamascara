function metamascaraExample1() {
  const { MetaMascaraFactory } = mmascara;

  window.metamascara = MetaMascaraFactory.newInstance();  // Create a new metamascara instance 

  const connectBtn = $("#connect-wallet");
  const networkTitle = $("#current-network");

  connectBtn.on("click", async (ev) => {
    ev.preventDefault();

    connectBtn.attr("disabled", true);

    try {
      const result = await window.metamascara.connect();  // Connect to the wallet
      if (result) {
        networkTitle.text(`Connected to: ${window.metamascara.networkName}.`);

        $("body").trigger("web3-connected");
      }
      else {
        connectBtn.attr("disabled", false);
      }
    }
    catch (err) {
      connectBtn.attr("disabled", false);
    }
  });
}

metamascaraExample1();