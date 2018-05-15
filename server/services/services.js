module.exports.addUser = ( (newUser) => {
    console.log("adding user");
    return newUser.save()
    .then((result) => {
        return {
            success: true,
            msg: 'User registered'
          };
    }).catch((err)=> {
        return {
            success: false,
            msg: 'Failed to register the user'
          };
    });
});