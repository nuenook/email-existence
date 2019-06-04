const emailExistence = require('./index')
console.log(emailExistence)

const test  = () => {
emailExistence.check('ittipon@mycostech.com', function(error, response){
    console.log('err: ' + error)
    console.log('res: '+response);
});
}

test()