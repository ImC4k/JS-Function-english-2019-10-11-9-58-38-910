function palindrome(message){
    var reversed = message.split('').reverse().join('');
    return message === reversed;
  }
palindrome('hello'); // should return false
palindrome('abcba'); // should return true