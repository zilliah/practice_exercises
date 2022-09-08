function minValue(values){
    const set =  new Set(values);
    return Number([...set].sort((a,b) => a - b).join(""));
}