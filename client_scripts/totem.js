NetworkEvents.dataReceived("totemAnimation", (event) => {
    Client.gameRenderer.displayItemActivation(event.data.item);
});