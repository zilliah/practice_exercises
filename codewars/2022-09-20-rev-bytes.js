function dataReverse(data) {
    let bytes = [];
    for (let i = 0; i < data.length; i++) {
        bytes.unshift(...data.slice(i, i + 8));
    }
    return bytes;
}