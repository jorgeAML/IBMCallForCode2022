exports.respondWithIndex = (req, res) => {
    res.render("index", {title:"Asovenal App"});
};
exports.respondWithConocenos = (req, res) => {
    res.render("conocenos", {title:"About us"});
};
exports.respondWithServicios = (req, res) => {
    res.render("servicios", {title:"Services"});
};
exports.respondWithContact = (req, res) => {
    res.render("contacto", {title:"contact"});
};
exports.respondWithCurses = (req, res) => {
    res.render("cursos", {title: "Recycle curse"});
};
exports.respondWithLogin = (req, res) => {
    res.render("users/login", {title: "login"});
};
