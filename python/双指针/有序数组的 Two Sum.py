from typing import List


def twoSum(numbers: List[int], target: int) -> List[int]:
    start = 0
    end = len(numbers) - 1
    while start < end:
        n = numbers[start]
        m = numbers[end]
        if (n + m) == target:
            return [start + 1, end + 1]
        elif (n + m) > target:
            end -= 1
        else:
            start += 1
    return [-1, -1]
