class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }
    return node.isEndOfWord;
  }

  //   startsWith(prefix) {
  //     let node = this.root;
  //     for (let char of prefix) {
  //       if (!node.children.has(char)) {
  //         return false;
  //       }
  //       node = node.children.get(char);
  //     }
  //     return true;
  //   }
  startsWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children.has(char)) {
        return [];
      }
      node = node.children.get(char);
    }
    return this._getAllWordsFromNode(node, prefix);
  }

  _getAllWordsFromNode(node, prefix) {
    let words = [];
    if (node.isEndOfWord) {
      words.push(prefix);
    }
    for (let [char, childNode] of node.children) {
      words = words.concat(this._getAllWordsFromNode(childNode, prefix + char));
    }
    return words;
  }
}

// Example usage:
let trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // Output: true
console.log(trie.search("app")); // Output: false
console.log(trie.startsWith("app")); // Output: true
trie.insert("app");
console.log(trie.search("app")); // Output: true
console.log(trie.startsWith("app")); // Output: true
