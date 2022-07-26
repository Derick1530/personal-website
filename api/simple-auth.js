module.exports = (req, res) => {
  if (req.query.pass === process.env.SIMPLE_PASS) {
    return res.send(true)
  }

  res.send(false)
}
