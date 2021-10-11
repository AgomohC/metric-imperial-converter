const converterHandler = (req, res) => {
  let { input } = req.query;
  input = input.toLowerCase();

  /////////////////////////
  //  INPUT VALIDATION  //
  ///////////////////////

  let isNumberValid = true;
  if (input.startsWith("/") || input.endsWith("/")) {
    // return res.status(400).json({ msg: "invalid number" });
    isNumberValid = false;
  }
  const dividerRegex = /\//g;
  const dividerMatch = input.match(dividerRegex);
  if (dividerMatch && dividerMatch.length > 1) {
    // return res.status(400).json({ msg: "invalid number" });
    isNumberValid = false;
  }
  const pointRegex = /\./g;
  const pointMatch = input.match(pointRegex);
  if (pointMatch && pointMatch.length > 1) {
    // return res.status(400).json({ msg: "invalid number" });
    isNumberValid = false;
  }
  let numberMatch = 0;
  if (isNumberValid) {
    const numberRegex = /([\d.\/])+/gi;
    numberMatch = input.match(numberRegex) || "1";
    console.log(numberMatch);
  }

  const unitRegex = /km$|mi$|kg$|lbs$|gal$|l$/gi;
  const unitMatch = input.match(unitRegex);
  if (!unitMatch && !isNumberValid) {
    return res.status(400).json({ msg: "invalid number and unit" });
  }
  if (!unitMatch) {
    return res.status(400).json({ msg: "invalid unit" });
  }
  if (!isNumberValid) {
    return res.status(400).json({ msg: "invalid number" });
  }
  console.log(unitMatch);
  let integer = 0;
  if (dividerMatch) {
    integer = numberMatch
      .join("")
      .split("/")
      .map((item) => Number(item));
    integer = integer[0] / integer[1];
    console.log(integer);
  } else {
    integer = Number(numberMatch.join(""));
    console.log(integer);
  }
  res.send("eeee");
};
module.exports = converterHandler;
