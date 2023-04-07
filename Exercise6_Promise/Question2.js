function asnycPromise1() {
    let asnycPromise1 = new Promise((resovle, reject) => {
        let result = true;
        if (result) {
            resovle("Đi tới bước asnycPromise2 ");
        }
        else {
            reject("Stop!!!!!, Tới bước asnycRecovery1");
        }
    });
    return asnycPromise1;
}
function asnycPromise2() {
    let asnycPromise2 = new Promise((resovle, reject) => {
        let result = true;
        if (result) {
            resovle("Đi tới bước asnycPromise3 ");
        }
        else {
            reject("Stop!!!!!, Tới bước asnycRecovery1");
        }
    });
    return asnycPromise2;
}
function asnycPromise3() {
    let asnycPromise3 = new Promise((resovle, reject) => {
        let result = true;
        if (result) {
            resovle("Đi tới bước asnycPromise4 ");
        }
        else {
            reject("Stop!!!!!, Tới bước asnycRecovery1");
        }
    });
    return asnycPromise3;
}
function asnycPromise4() {
    let asnycPromise4 = new Promise((resovle, reject) => {
        let result = true;
        if (result) {
            resovle("Đi tới log Xong!!!  ");
        }
        else {
            reject("Đi tới log Đừng lo lắng gì cả!!!!!");
        }
    });
    return asnycPromise4;
}
function log() {
    let log = new Promise((resovle, reject) => {
        let result = true;
        if (result) {
            resovle("Xong!!");
        }
        else {
            reject("Đừng lo lắng gì cả :)");
        }
    });
    return log;
}
function asnycRecovery1() {
    let asnycRecovery1 = new Promise((resovle, reject) => {
        let result = true;
        if (result) {
            resovle("Đi tới asnycPromise4 ");
        }
        else {
            reject("Stop!!!! , Đi tới asnycRecovery2");
        }
    });
    return asnycRecovery1;
}
function asnycRecovery2() {
    let asnycRecovery2 = new Promise((resovle, reject) => {
        let result = true;
        if (result) {
            resovle("Xong!! ");
        }
        else {
            reject("Đừng lo lắng gì cả!!!!!");
        }
    });
    return asnycRecovery2;
}
asnycPromise1()
    .then((msgresovle) => {
    console.log(msgresovle);
    return asnycPromise2();
})
    .then((msgresovle) => {
    console.log(msgresovle);
    return asnycPromise3();
})
    .then((msgresovle) => {
    console.log(msgresovle);
    return asnycPromise4();
})
    .then((msgresovle) => {
    console.log(log);
    return log;
})
    .then((msgresovle) => {
    console.log(msgresovle);
})
    .catch((msg) => {
    console.log(msg);
});
