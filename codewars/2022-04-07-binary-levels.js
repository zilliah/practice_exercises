function treeByLevels (rootNode) {
  if (rootNode === null || rootNode.value === null) return []
  
  let res = [];
  res.push(rootNode.value);

  let currNodes = [rootNode];
  while(currNodes) {
    let next = getNextLevel(currNodes);
    if (next) {
      res.push(next.vals);
      currNodes = next.children;
    } 
    else break;
  }
	return res.flat();
}

function getNextLevel(nodes) {
  let children = [];
  for (let n of nodes) {
    if (n.left) children.push(n.left);
    if (n.right) children.push(n.right);
  }
  if (children.length === 0) return null;

  let vals = [];
  for (let child of children) if (child !== null) vals.push(child.value);
  return {vals, children}
}
