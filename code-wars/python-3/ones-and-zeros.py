def binary_array_to_number(arr):
  # your code
    """Given list of 1s and 0s, convert equivalent binary value to an integer."""
  result = []
  for num in arr:
     result.append(str(num))
  result = "".join(result)
  return int(result, 2)
