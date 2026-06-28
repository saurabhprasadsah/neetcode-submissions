class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }

        let count = {}
           for (let i = 0; i < s.length; i++) {
            let ch = s[i];

            if (count[ch]) {
                count[ch]++;
            } else {
                count[ch] = 1;
            }
        }

        // Remove characters using t
        for (let i = 0; i < t.length; i++) {
            let ch = t[i];

            if (!count[ch]) {
                return false;
            }

            count[ch]--;
        }

        return true;

    }
}
