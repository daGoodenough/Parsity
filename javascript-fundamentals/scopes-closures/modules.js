console.log("------------")

var UsersModule = function () { //creates a list of users that is append only
  var users = [];

  var addUser = function (user) {
    users.push(user);
  };

  var listUsers = function () {
    for (var i = 0; i < users.length; i += 1) {
      console.log(users[i].get("name"));
    }
  };

  return { //these are the only functions that can be used.
    addUser: addUser,
    listUsers: listUsers,
  };
};

var UserModule = function (name, email) {//returns a users object containg strings of name and email
  var attributes = {
    name: name,
    email: email || null,
  };

  var getAttribute = function (attribute) {//only if attribute is name or email can you get it
    if (attributes.hasOwnProperty(attribute)) {
      return attributes[attribute];
    }
  };

  var setAttribute = function (attribute, value) {//only if attribute is name or email can you set it
    if (attributes.hasOwnProperty(attribute)) {
      attributes[attribute] = value;
    }
  };

  return {//these are the only functions that can be used. Because of closure they still have access to the attributes object, but only through the function
    get: getAttribute,
    set: setAttribute,
  };
};

var learnToCodeRDU = UsersModule();

var aaron = UserModule("Aaron", "aaron@projectshift.com");
var sean = UserModule("Sean", "sean@projectshift.io");

learnToCodeRDU.addUser(aaron);
learnToCodeRDU.listUsers();

var triangleJavaScript = UsersModule();

var stacey = UserModule("Stacey", "stace@codeforfun.com");
var jimbo = UserModule("Jimbo", "jimbo@gmail.com");

triangleJavaScript.addUser(stacey);
triangleJavaScript.addUser(jimbo);