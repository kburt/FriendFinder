module.exports = function(app){
    app.get("/home", req, res) => {
        res.end("Survey");
    })
}