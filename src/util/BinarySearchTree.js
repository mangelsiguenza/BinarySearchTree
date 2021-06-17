const {Node} = require('./Node');

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert( data ) {
        let newNode = new Node(data);
        !this.root ? (this.root = newNode) : (this.insertNode(this.root, newNode));
    }

    insertNode(node, newNode){
        if (newNode.data < node.data){
            !node.left ? (node.left = newNode) : (this.insertNode(node.left, newNode));
        } else {
            !node.right ? (node.right = newNode) : (this.insertNode(node.right, newNode));
        }
    }

    searchNode(node, data){
        if (!node){
            return null;
        } else if (data < node.data) {
            return this.searchNode(node.left, data);
        }else if (data > node.data) {
            return this.searchNode(node.right, data);
        }
        return node;
    }
}

module.exports = {BinarySearchTree};
