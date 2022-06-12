function queueTime(customers, n) {
    if (customers.length === 0) return 0;
    if (n === 1) return customers.reduce((a,b) => a + b);
    if (n >= customers.length) return Math.max(...customers);
    
    let queues = {};
    for (let i = 1; i <= n; i++) {
      queues[i] = customers.shift();
    }
    
    let time = 0;
    while (customers.length > 0) {
      let min = Math.min(...Object.values(queues));
      time += min;
      for (let q in queues) {
        queues[q] -= min;
        if (queues[q] === 0) queues[q] = customers.shift();
        if (queues[q] === undefined) queues[q] = 0;
      }
    }
  
    return time + (Math.max(...Object.values(queues)));
  }  