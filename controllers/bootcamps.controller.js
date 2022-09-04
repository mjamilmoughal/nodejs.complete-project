const ErrorResponse = require("../utilities/errorResponse");
const Bootcamp = require("../models/Bootcamp");
const bootcamp = require("../models/Bootcamp");

exports.getAllBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();

    res
      .status(200)
      .json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      return next(
        new ErrorResponse(404, `Bootcamp with id ${req.params.id} not found`)
      );
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    // res.status(400).json({
    //   success: false,
    // });
    next(err);
  }
};

exports.createBootcamp = async (req, res, next) => {
  try {
    // console.log(req.body);
    // res.status(200).json({ success: true, msg: "Bootcamp created!" });
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch {
    res.status(400).json({
      success: false,
    });
  }
};

exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!bootcamp) {
      res.status(200).json({ success: false });
    }

    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    res.status(200).json({ success: false });
  }
};

exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!bootcamp) {
      res.status(200).json({ success: false });
    }

    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    res.status(200).json({ success: false });
  }
};
