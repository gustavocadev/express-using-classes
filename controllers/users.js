const { response, request } = require("express");

const usersGet = (req, res = response) => {
    res.json({
        msg: "get API - controller",
    });
};

const usersPut = (req = request, res = response) => {
    const { id } = req.params;
    // const params = req.query;
    req.console.log(id);
    res.json({
        msg: "put hi - controller",
    });
};

const usersPost = (req, res) => {
    const data = req.body;
    res.json({
        msg: "post hi - controller",
        data,
    });
};

const usersDelete = (req, res) => {
    res.json({
        msg: "delete hi - controller",
    });
};

module.exports = {
    usersGet,
    usersDelete,
    usersPut,
    usersPost,
};
