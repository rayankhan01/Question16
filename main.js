var guests = ["Abdullah", "Abdul Rehman", "Usman", "Aqsa Appi", "Rida"];
console.log("Great news! I found a bigger dinner table!");
// Ading more guests
guests.unshift("Amina Api");
guests.splice(guests.length / 2, 0, "Uzair Bhai");
guests.push("Umair Bhai");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
