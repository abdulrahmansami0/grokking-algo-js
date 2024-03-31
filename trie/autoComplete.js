class TrieNode {
  //Constructor, Time O(1), Space O(1)
  constructor(c) {
    this.data = c;
    this.children = {}; //array
    this.isEnd = false;
  }
}

class Trie {
  //Constructor, Time O(1), Space O(1)
  constructor() {
    this.root = new TrieNode("");
  }

  //insert a word into the trie, iteration
  //Time O(s), Space O(s), s is word length
  insert(word) {
    let node = this.root;
    for (let ch of word) {
      if (node.children[ch] == null) node.children[ch] = new TrieNode(ch);
      node = node.children[ch];
    }
    node.isEnd = true;
  }

  //returns all words with given prefix, call recursion function
  //Time O(n), Space O(n), n is number of nodes included(prefix and branches)
  autocomplete(prefix) {
    var node = this.root;
    var res = [];
    for (let ch of prefix) {
      node = node.children[ch];
      if (node == null) return res;
    }
    this.helper(node, res, prefix.substring(0, prefix.length - 1));
    return res;
  }

  //recursive function called by autocomplete
  //Time O(n), Space O(n), n is number of nodes in branches
  helper(node, res, prefix) {
    if (node.isEnd) res.push(prefix + node.data);
    for (let child in node.children) //array
      this.helper(node.children[child], res, prefix + node.data);
  }
}

const t = new Trie();
t.insert("amazon");
t.insert("amazon prime");
t.insert("amazing");
t.insert("amazing spider man");
t.insert("amazed");
t.insert("ebay");

a = t.autocomplete("amaz");
console.log(a);
