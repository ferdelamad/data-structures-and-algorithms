//BST tree
function BST(val) {
  this.val = val;
  this.right = this.left = null;
}

BST.prototype.addNode = function(val) {
  if (!this.right && val > this.val) {
    this.right = new BST(val);
  } else if(!this.left && val < this.val) {
    this.left = new BST(val);
  } else if(val < this.val) {
    this.addNode(this.left);
  } else {
    this.addNode(this.right);
  }
};

//Linked List
function LinkList(val) {
  this.val = val;
  this.next = null;
  this.head = val;
  this.tail = null;
}

function LLnode(val) {
  this.val = val;
  this.next = null;
}

LinkList.prototype.add = function(val) {
  if (!this.head) {
    this.head = val;
    this.tail = val;
  }

  if (!this.next) {
    this.next = new LLnode(val);
  } else {
    let node = this.next;
    let nodeToInsert = this.next;
    while (node.next) {
      nodeToInsert = node.next;
      node = node.next;
    }
    nodeToInsert.next = new LLnode(val);
    this.tail = nodeToInsert.next;
  }
};

var flatten = function(root) {
  const myLL = new LinkList(root.val);

  function traverseTree(root) {
    if (root.left) {
      myLL.add(root.left.val);
      traverseTree(root.left);
    }

    if (root.right) {
      myLL.add(root.right.val);
      traverseTree(root.right);
    }
  }

  return myLL;
};
