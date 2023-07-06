let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}



let newData = {
    ...data,
    name: "Rangga Dwiputra",
    email: "ranggaardokit@gmail.com",
    hobby: "gaming,ngoding,swimming",
};
console.log(newData);



let { address: { street, city } } = data;

console.log(street); // Output: Kulas Light
console.log(city);