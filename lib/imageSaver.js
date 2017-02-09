var fs = require('fs')
var q = require('q')
class ImageSaver {
    saveFile(filename,base64str) {
        var defer = q.defer()
        fs.writeFile(filename,this.convertBase64ToBuf(base64str),(err)=>{
            if(err == null) {
                defer.resolve({status:"sucess",msg:"the image is successfully written in your file system"})
            }
            else {
                defer.reject({err:err})
            }
        })
        return defer.promise
    }
    convertBase64ToBuf(base64Str) {
        return new Buffer(base64Str,"base64")
    }
}
module.exports = ImageSaver
