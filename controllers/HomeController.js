exports.respondWithIndex = (req, res) => {
    res.render("index", {title:"IBM PROYECT 2022"});
};
exports.respondWithConocenos = (req, res) => {
    res.render("conocenos", {title:"Acerca de nosotros"});
};
exports.respondWithServicios = (req, res) => {
    res.render("servicios", {title:"Servicios"});
};
exports.respondWithContact = (req, res) => {
    res.render("contacto", {title:"contactanos"});
};
exports.respondWithCurses = (req, res) => {
    res.render("cursos", {title: "Cursos de reciclaje"});
};