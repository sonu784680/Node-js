const requestHandler = (req, res) => {
  console.log(req.url, req.meth);
};

module.exports = requestHandler;
