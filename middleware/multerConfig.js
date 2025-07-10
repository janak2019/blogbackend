const multer = require('multer')


const storage = multer.diskStorage({
    destination : function (req,file,cb){
        cb(null,'./storage') //cb(error,sucess)

    },
    filename : function(req,file,cb){
        cb(null,Date.now() + file.originalname) // upload hune file ko kasto rakhne bhanera decide garne code

    }

})

module.exports = {
    multer,
    storage
}