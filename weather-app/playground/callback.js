var getUser = (id, callback) => {
  var user = {
    id: id,
    name:'ricky'
  };
  callback(user);
};

getUser(29, (user) => {
  console.log(user);
});
