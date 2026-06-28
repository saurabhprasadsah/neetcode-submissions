class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {}
        for(let i = 0; i<nums.length; i++){
            let currentelement = nums[i];

            if(count[currentelement]){
                count[currentelement]++;
            }else{
                count[currentelement]=1;
            }

        }
            //convert object to array 
        let objtoarray = Object.entries(count);
            //sort the objecttoarray m jo bhi entry hua hai...
        objtoarray.sort((a,b) => b[1]- a[1]);

        let result = [];

        for(let i = 0; i < k; i++){
                result.push(Number(objtoarray[i][0]))
            }
            return result;
        }

    }
