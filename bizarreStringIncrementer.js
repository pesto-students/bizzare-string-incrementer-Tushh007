// Start your implementation here
const bizarreStringIncrementer = (str) => {
  //   Parsing string backwards and brearking out of the loop at/with the index of the fist detected Non Number Char
  let i;
  for (i = str.length - 1; i > 0; i--) {
    if (isNaN(str[i]) || str[i] === "0") break;
  }

  //   Slicing and casting the interger in the string
  let prefix = str.slice(0, i + 1);
  const integer_string = str.slice(i + 1);
  const incremented_string = (parseInt(integer_string) + 1).toString();

  //   Incrementing the numbers for the result string
  if (isNaN(parseInt(integer_string))) return str + 1;
  else if (
    incremented_string.length > integer_string.length &&
    prefix[i] === "0"
  )
    prefix = str.slice(0, i);

  return prefix + incremented_string;
};

export { bizarreStringIncrementer };
