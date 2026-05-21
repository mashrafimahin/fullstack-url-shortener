const express = require("express");
const mongoose = require("mongoose");
const dataModel = require("../model/urlSchema");

// ROUTE
const routes = express.Router();

// GET - for all
routes.get("/history", async (req, res) => {
  try {
    const data = await dataModel.find().select({
      _id: 0,
      __v: 0,
    });
    res.json(data);
  } catch (err) {
    res.json({
      error: err.message,
    });
  }
});

// GET
routes.get("/:shortURL", async (req, res) => {
  try {
    const data = await dataModel.findOneAndUpdate(
      { shortURL: req.params.shortURL },
      { $inc: { clicks: 1 } },
    );
    res.redirect(data.fullURL);
  } catch (err) {
    res.json({
      error: err.message,
    });
  }
});

// POST
routes.post("/", async (req, res) => {
  try {
    const data = await dataModel.create({
      fullURL: req.body.fullURL,
    });
    res.json(data);
  } catch (err) {
    res.json({
      error: err.message,
    });
  }
});

// exports
module.exports = routes;
