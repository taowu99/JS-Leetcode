'use strict'

class Solution {
    Constructor() {}

    static permuteUnique(nums) {
        let numCount = new Map();
        nums.forEach((num) => numCount.set(num, typeof numCount.get(num) == 'undefined' ? 1 : (numCount.get(num)+1)));
        return Solution._permuteUniqueHelper(numCount);
    }

    static _permuteUniqueHelper(numCount) {
        let res = new Array();
        numCount.forEach((value, key) => {
            if (value>0) {
                numCount.set(key, value-1);
                let subres = Solution._permuteUniqueHelper(numCount);
                if (subres.length>0) {
                    subres.forEach((rs) => {
                        let tmp = rs.slice();
                        tmp.unshift(key);
                        res.push(tmp);
                    });
                }
                else
                    res.push([key]);
                numCount.set(key, value);
            }
        });
        return res;
    }
}