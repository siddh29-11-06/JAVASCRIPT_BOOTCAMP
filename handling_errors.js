try
{
    const jsonData = {"name":"Alice","age":25};
    const user = JSON.parse(jsonData)
    console.log("User data:", user.name);

    const badJson = `{"name": "Bob"}`;
    const badUser = JSON.parse(badJson);
    console.log(badUser.name);
}
catch(error)
{
    console.error("An error occured! Details:", error.message);
}
console.log("Program continues to run here")