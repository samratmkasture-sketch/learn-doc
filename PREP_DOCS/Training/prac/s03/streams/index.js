const express = require("express");
const app = express();
var formidable = require('formidable');
const fs = require("fs");
// var bodyParser = require('body-parser')

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/1", function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
});
app.post("/fileupload", function (req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var oldpath = files.filetoupload[0].filepath;
        var newpath = './uploads/' + new Date().toISOString() +files.filetoupload[0].originalFilename; // C:/Users/Your Name/
        // fs.rename(oldpath, newpath, function (err) {
        //   if (err) throw err;
        //   res.write('File uploaded and moved!');
        //   res.end();
        // });
        fs.copyFile(oldpath, newpath, function (err) {
            if (err) throw err;
            res.write('File uploaded and moved!');
            res.end();
        });
        // fs.readFile(oldpath, function (err, data) {
        //     if (err) throw err;
        //     console.log('File read!');

        //     // Write the file
        //     fs.writeFile(newpath, data, function (err) {
        //         if (err) throw err;
        //         res.write('File uploaded and moved!');
        //         res.end();
        //         console.log('File written!');
        //     });

        //     // Delete the file
        //     fs.unlink(oldpath, function (err) {
        //         if (err) throw err;
        //         console.log('File deleted!');
        //     });
        // });
        // await fs.promises.cp(appPath, targetDir, {
        //     recursive: true,
        // })
        // await fs.promises.rm(appPath, {
        //     recursive: true,
        // })
    
    });
});



// more code will go in here just befor the listening function
 app.get("/video", function (req, res) {
    const range = req.headers.range;
    if (!range) {
        res.status(400).send("Requires Range header");
    }
    const videoPath = "Silky_Blue_720P_Motion_Background_Loop.mp4";
    const videoSize = fs.statSync("Silky_Blue_720P_Motion_Background_Loop.mp4").size;
    const CHUNK_SIZE = 10 ** 6;
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    };
    res.writeHead(206, headers);
    const videoStream = fs.createReadStream(videoPath, { start, end });
    videoStream.pipe(res);
});


app.listen(8000, function () {
    console.log("Listening on port 8000!");
});