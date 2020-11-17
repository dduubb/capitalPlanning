let hash = window.location.hash.substr(1),
defaultImg = '1.jpg',
possibleExtensions = [".jpg",".gif",".svg",".png"],
targetFile = ""

console.log(hash);

function doesFileExist(urlToFile) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', urlToFile, false);
    xhr.send();
     
    if (xhr.status == "404") {
        return false;
    } else {
        return true;
    }
}
// ///////////
// function testImageExtension(hash) {
//     if (doesFileExist(hash+".jpg")){
//         return hash + ".jpg"
//     } else if (doesFileExist(hash+".png")){
//         return hash + ".png"
//     } else {
//         return false
//     }
// }

function testImageExtension(hash) {
    
    possibleExtensions.forEach(ext => {
        console.log(hash+ext);
        if (doesFileExist(hash+ext)) {

            targetFile = hash+ext
        } 
        return true
    });
    console.log(false);
    if (targetFile){
        return true
    }
}


if (testImageExtension(hash)) {
    console.log(targetFile,"targetfile");
document.body.style.background = `url('${targetFile}') no-repeat left top`;
} else {
    document.body.style.background = `url('${defaultImg}') no-repeat left top`;
}