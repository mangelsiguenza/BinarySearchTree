const {BinarySearchTree} = require('./util/BinarySearchTree');
const BST = new BinarySearchTree();


const nodes = [8,3, 10, 1, 6, 14, 4, 7, 13];
// const nodes = [1,2,3,4,5,6,7,8];

nodes.map( node => {BST.insert(node)});

console.log('tree', JSON.stringify(BST.root, null, 4));

console.log('searh', JSON.stringify(BST.searchNode(BST.root, 6), null,4))

