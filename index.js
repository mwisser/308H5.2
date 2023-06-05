// Every Number

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const allNumbers = nums.every(num => num >= 0);

console.log(allNumbers);

// Every Word

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

const everyWord = panagram.every(word => word.length < 8);

console.log(everyWord);

// Filter Number

const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const filterNums = nums2.filter(num2 => num2 < 4);

console.log(filterNums);

// Filter Word

const panagram2 = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

const filterWords = panagram2.filter(word => word.length % 2 === 0);

console.log(filterWords);

// Find Number

const nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const firstValue = nums3.find(num => num % 5 === 0);

console.log(firstValue);

// Find Word

const panagram3 = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

const firstWord = panagram3.find(word => word.length > 5);

console.log(firstWord);

// Find Index Number

const nums4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const index = nums4.findIndex(num => num % 3 === 0);

console.log(index);

// Find Index Word

const panagram4 = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

const indexWord = panagram4.findIndex(word => word.length < 2);

console.log(indexWord);

// For Each Number

const nums5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

nums.forEach(num => {
  const multipliedValue = num * 3;
  console.log(multipliedValue);
});

// For Each Word

const panagram5 = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

panagram.forEach(word => {
  console.log(word + '!');
});

// Map Number

const nums6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const multipliedNums = nums.map(num => num * 100);

console.log(multipliedNums);

// Map Word

const panagram6 = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

const uppercaseArray = panagram.map(word => word.toUpperCase());

console.log(uppercaseArray);

// Some Number

const nums7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const isDivisibleBy7 = nums.some(num => num % 7 === 0);

console.log(isDivisibleBy7);

// Some Word

const panagram7 = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

const containsLetterA = panagram.some(word => word.toLowerCase().includes('a'));

console.log(containsLetterA);