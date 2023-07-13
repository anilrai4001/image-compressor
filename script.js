const fs = require('fs');
const jimp = require('jimp')

// fs.readFile(
//     'profile.jpg',
//     {
//         encoding: 'base64'
//     },
//     (err,data)=>{
//         if(err){
//             return console.log(err);
//         }
//         str=data;
//     }
// )

// //Reading Image from file
// let file = fs.readFileSync('inage.jpg');
// // console.log(file, '\n');

// let str = file.toString('base64');
// // console.log(str,'\n');

// //storing str in file
// fs.writeFileSync('image.txt',str);

// let newStr = fs.readFileSync('image.txt',{encoding: 'utf-8'});
// // console.log(newStr,'\n');

// let buffer = Buffer.from(newStr,'base64');
// // console.log(buffer,'\n');

// fs.writeFileSync('compressed-image.jpg',buffer);


// image compressor

jimp.read('image.jpg',(err,image)=>{
    if(err)
        console.log(err);
    image
    .resize(600,400) 
    .quality(50)
    .write('compressed-image.jpg') //save
});