function generatePassword() {
 const length = parseInt(document.getElementById("length").value);
 const upper = document.getElementById("upper").checked;
 const lower = document.getElementById("lower").checked;
 const nums = document.getElementById("numbers").checked;
 const symbols = document.getElementById("symbols").checked;
 let charset = "";
 if (upper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 if (lower) charset += "abcdefghijklmnopqrstuvwxyz";
 if (nums) charset += "0123456789";
 if (symbols) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";
 if (!charset) { alert("Select at least one character type!"); return; }
 let password = "";
 for (let i = 0; i < length; i++) {
 password += charset[Math.floor(Math.random() * charset.length)];
 }
 document.getElementById("output").value = password;
}