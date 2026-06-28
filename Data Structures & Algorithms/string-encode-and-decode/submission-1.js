class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encode = "";
        for(let i = 0; i < strs.length; i++){
            encode = encode + strs[i].length + "#" + strs[i];
        }

        return encode
    }
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;
        while(i < str.length){
            let j = i;
            while(str[j] !== "#"){
                j++;
            } 
            let length = Number(str.slice(i,j));
            let word = str.slice(j+1, j+1+length);
            result.push(word);
            
            i = j+1+length;
        }
        return result
        
    }
}
