const worker = new Worker('worker.js');
worker.postMessage('start');
worker.onmessage = (e) => console.log(e.data);


let elapsedMs = performance.now();




function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



async function gameLoopTick(num7, num6, anyClients) {
    let num10 = performance.now() + num7;

    if (num10 < num6) {
        let num11 = Math.floor(num6 - num10) - 1;

        if (num11 > 1) {
            await sleep(num11 - 1);

            if (!anyClients) {
                num7 = 0.0;
                await sleep(10);
            }
        }
    }

    return num7; // if you need to update num7 outside
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


