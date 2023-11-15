
// sto definendo la funzione e la chiamo index
// che tramie il controller mi stamperà nella pagina
// il mio titolo
module.exports.index = function(req, res) {
    /*
    PROVA CON IF ELS IF
    if(req.accepts("html")) {
        const acceptType = req.accepts();
        console.log(acceptType);
        res.type("html").send(`<h1>Benvenuto nel mio blog! da home.js</h1>`);

    } else if (req.accepts("text")) {
        console.log(req.accepts());
        res.type("text").send(`hello wolrd`);

    }else if (req.accepts("json")) {

        console.log(req.accepts());

        res.type("application/json").send({
            message: "ciao mondo"
        })
    } */

console.log(req.accepts());
 res.format({
    // text/html
    html: () => {
        res.type("html").send("<h1>Ciao Mondo</h1>")},
    // application/hson
    json: () => {
        res.type("json").send({
            message : "ciao"
        })},
    // text/plain
    text: () => {
        res.type("text").send("ciao io sono solo un testo")},
 }
)}


