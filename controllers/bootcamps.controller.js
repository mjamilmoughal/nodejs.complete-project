exports.getAllBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "All Bootcamps" });
};
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Bootcamp" });
};

exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Bootcamp created!" });
};

exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Bootcamp updated!" });
};

exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Bootcamp deleted!" });
};
