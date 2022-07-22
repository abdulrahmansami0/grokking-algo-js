var lengthOfLastWord = (s) => {
    // let str = s.replace(/^\s+|\s+$/gm,'').split(" ");
    // return str[str.length - 1].length;

    s = s.trim();
    s = s.split(" ");
    
    return s[s.length-1].length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));