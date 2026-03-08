let num7 = 0.0;
let num6 = 100; // target time in ms
let anyClients = false;

(async () => {
    num7 = await gameLoopTick(num7, num6, anyClients);
})();
