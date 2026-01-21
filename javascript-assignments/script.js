let takeInput = prompt("please enter something:");
let vowelCount = 0;
let vowels = "aeiouAEIOU";
for (let i = 0; i < takeInput.length; i++) {
    if (vowels.includes(takeInput[i])) {
        vowelCount++;
    }
}
alert("Number of vowels: " + vowelCount);

