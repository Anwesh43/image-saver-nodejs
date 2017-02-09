#image-saver-nodejs

##An nodejs library to save base64 string to image file in your local file system.

##Usage

```
    var ImageSaver = require('image-saver-nodejs')
    var imageSaver = new ImageSaver()
    imageSaver.saveFile('test.png','base64stringhere').then((data)=>{
    console.log(data.status)
    console.log(data.msg)
    }).catch((err)=>{
        console.log(err)
    })
```
