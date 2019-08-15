// https://www.codewars.com/kata/decode-the-morse-code/train/javascript

var decodeMorse = (input) => {
	var MORSE_CODE = {  
		"-----":"0",
		".----":"1",
		"..---":"2",
		"...--":"3",
		"....-":"4",
		".....":"5",
		"-....":"6",
		"--...":"7",
		"---..":"8",
		"----.":"9",
		".-":"a",
		"-...":"b",
		"-.-.":"c",
		"-..":"d",
		".":"e",
		"..-.":"f",
		"--.":"g",
		"....":"h",
		"..":"i",
		".---":"j",
		"-.-":"k",
		".-..":"l",
		"--":"m",
		"-.":"n",
		"---":"o",
		".--.":"p",
		"--.-":"q",
		".-.":"r",
		"...":"s",
		"-":"t",
		"..-":"u",
		"...-":"v",
		".--":"w",
		"-..-":"x",
		"-.--":"y",
		"--..":"z",
		"/":" ",
		"-·-·--":"!",
		"·-·-·-":".",
		"--··--":","
 };

	let a = input.trim().split("  ").map(function(word){
		x = word.split(" ").map(function(letter){
			return MORSE_CODE[letter]
		}).join("")
		return x
	}).join(" ")
};
console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));

module.exports = decodeMorse;