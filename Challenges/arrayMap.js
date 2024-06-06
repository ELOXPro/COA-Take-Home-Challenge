function hasSubarrayWithTargetSum(arr, target) {
    let left = 0;
    let sum = 0;

    for (let right = 0; right < arr.length; right++) {
        sum += arr[right];

        while (sum > target && left <= right) {
            sum -= arr[left]; // Subtract the element at the left pointer
            left++; // Move the left pointer to the right
        }

        // Check if the current sum matches the target
        if (sum === target) {
            return true; // If found, return true
        }
    }

    // If we complete the loop without finding a matching subarray, return false
    return false;
}

// Given Example to test:
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasSubarrayWithTargetSum(arr, target)); // Output: true
