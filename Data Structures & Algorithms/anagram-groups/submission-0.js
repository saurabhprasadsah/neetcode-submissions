class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let result = {}
        for(let i = 0; i < strs.length; i++){
            let word = strs[i];
            let key = word.split("").sort().join("");

            if(!result[key]){
                result[key] = []
            }
            result[key].push(word)
        }
        return Object.values(result)
    }
}
