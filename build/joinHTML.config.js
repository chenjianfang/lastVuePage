/*
* 拼接html
* 
*/
let fs = require('fs');
let path = require('path');
let chokidar = require('chokidar');
//layout文件路径
let layoutPath = path.resolve()+"/html/layout/head.html";
// return console.log(layoutPath);
let layoutRes = fs.readFileSync(layoutPath,"utf8");

//需要拼接目录
let srcHtmlPath = path.resolve()+"/html/src/";
//生成拼接目录
let distHtmlPath = path.resolve()+"/html/dist/";

let srcPath = findSync(srcHtmlPath);

handle(srcPath);

//arg:数组path
function handle (argPath) {
    //待拼接内容的容器
    let contentWrap = {};
    argPath.forEach(function(value,index){
        contentWrap[value] = pathHtmldes(value);
    });
    for(let i in contentWrap){
        let buf = new Buffer(contentWrap[i]);
        //生成html的目录
        let distHtml = i.replace("src","dist");
        try{
            fs.statSync(path.dirname(distHtml));
        }catch(err){
            fs.mkdirSync(path.dirname(distHtml));
        }
        fs.writeFile(distHtml,buf,{encoding:"utf8",flag:"w"},function(err){
            if(err) return console.error(err);
            console.log(distHtml+"写入成功");
        });
          
    }
}
//拼接模板
function pathHtmldes (w_path) {
    let res = fs.readFileSync(w_path,"utf8");
    let temp = layoutRes;
    //content中内容
    let sContent;
    let matchContent = res.match(/<content>((?!<\/content>)[\s\S])*/);
    if(matchContent !== null){
        sContent = matchContent[0].replace(/<content>/,"");
        
    }

    // console.log(sContent);
    // return;
    let sFoot = res.match(/<foot>((?!<\/foot>)[\s\S])*/)[0].replace("<foot>","");
    temp = temp.replace(/<content><\/content>/,sContent+sFoot);
    //head中内容
    let sHead = res.match(/<headCont>((?!<\/headCont>)[\s\S])*/)[0].replace("<headCont>","");
    temp = temp.replace(/<headCont><\/headCont>/,sHead);
    return temp;
}




//监听文件改动拼接html
var watcher = chokidar.watch(srcHtmlPath,{
    // ignored:/images/,
    persistent:true,
    interval:1000,
    awaitWriteFinish:{
        pollInterval:500
    }
});
watcher.on("change",function(w_path){
    handle([].concat(w_path));
});
watcher.on("add",function(w_path){
    handle([].concat(w_path));
});
watcher.on("unlink",function(w_path){
    let temp = w_path.replace("src","dist");
    removeFile(temp);
});


//删除文件
function removeFile(filePath){
    console.log(filePath);
    fs.unlinkSync(filePath);
}




//递归寻找目录所有文件
function findSync (filesDir) {
    let result = [];
    function finder (pathDir) {
        let files = fs.readdirSync(pathDir);
        files.forEach( (val, index) => {
            let fPath = path.join(pathDir,val);
            let stats = fs.statSync(fPath);
            if(stats.isDirectory()) finder(fPath);
            if(stats.isFile()) {
                let jsName = path.dirname(fPath) + "/" + val;
                jsName = path.normalize(jsName);
                result.push(jsName);
            }
        });
    }

    finder(filesDir);
    return result;
}







