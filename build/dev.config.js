/*
*   __dirname是build目录
*   
*/
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var chokidar = require('chokidar');

var webpack = require('webpack');

var fse = require('fs-extra');

var merge = require('webpack-merge');

var WebpackDevServer = require("webpack-dev-server");

var path = require('path');

var opn = require('opn');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var baseConf = require('./base.config.js');

//获取webpack模块

var app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'/')));
app.use(express.static(path.join(__dirname,'../')));
app.use(express.static(path.join(__dirname,'../html')));

var watcher = chokidar.watch(path.resolve(__dirname+"/../static/src"),{
    ignored:/images/,
    persistent:true,
});
watcher.on("ready",function(){
    webpack(merge(baseConf,{

        plugins:[
            new webpack.HotModuleReplacementPlugin() //热加载插件
        ]

    }),function(err, stats){
        if(err) return console.log(err);
        //copy css中的图片
        let files,
            createImgPath = __dirname+"/../static/images/";
        console.log(createImgPath);
        try{
            files = fs.readdirSync(__dirname+"/../static/images/");
        }catch(err){
            fs.mkdirSync(path.dirname(createImgPath));
        }
        if(files.length > 0){
            try{
                fse.copySync(__dirname+"/../static/images",__dirname+"/../static/dist/images");
                console.log("success"+(new Date().getMinutes()));
            }catch(err){
                console.error(err);
            }
            
        }
        
    });
});
watcher.on("change",function(event,path){
    webpack(merge(baseConf,{

        plugins:[
            // new webpack.BannerPlugin("17.04.17 @config by jef"),
            new webpack.HotModuleReplacementPlugin() //热加载插件
        ]

    }),function(err, stats){
        if(err) return console.log(err);

        let files = fs.readdirSync(__dirname+"/../static/images/");

        if(files.length > 0){
            try{
                fse.copySync(__dirname+"/../static/images",__dirname+"/../static/dist/images");
                console.log("success"+(new Date().getMinutes()));
            }catch(err){
                console.error(err);
            }
            
        }
        
    });
});

app.listen(2000);
console.log(2000);

opn('http://localhost:2000/index.html');


