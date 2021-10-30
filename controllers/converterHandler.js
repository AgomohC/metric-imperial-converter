const converterHandler = (req, res) => {
  let { input } = req.body;
  if (!input) {
    return res.status(400).json({ msg: "required input is missing" });
  }
  input = input.toLowerCase();

  //  result object
  let result = {
    initNum: 0,
    initUnit: "",
    returnNum: 0,
    returnUnit: "",
    string: "",
  };

  /////////////////////////
  //  INPUT VALIDATION  //
  ///////////////////////

  let isNumberValid = true;

  // check if  input starts or ends with "/"
  if (input.startsWith("/") || input.endsWith("/")) {
    isNumberValid = false;
  }
  const dividerRegex = /\//g;

  // check if input contains more than 1 "/"
  const dividerMatch = input.match(dividerRegex);
  if (dividerMatch && dividerMatch.length > 1) {
    isNumberValid = false;
  }

  // check if input contains more than 1 "."
  const pointRegex = /\./g;
  const pointMatch = input.match(pointRegex);
  if (pointMatch && pointMatch.length > 1) {
    isNumberValid = false;
  }

  // separate the number from the input
  let numberMatch = 0;
  if (isNumberValid) {
    const numberRegex = /([\d.\/])+/gi;
    numberMatch = input.match(numberRegex) || "1";
  }

  // get the unit from the input
  const unitRegex = /km$|mi$|kg$|lbs$|gal$|l$/gi;
  let unitMatch = input.match(unitRegex);

  // json return if both unit and number in invalid
  if (!unitMatch && !isNumberValid) {
    return res.status(400).json({ msg: "invalid number and unit" });
  }

  // json return if only the unit is invalid
  if (!unitMatch) {
    return res.status(400).json({ msg: "invalid unit" });
  }

  // json return if only the numbers is invalid
  if (!isNumberValid) {
    return res.status(400).json({ msg: "invalid number" });
  }

  unitMatch = unitMatch.join("");
  let integer = 0;

  // simplify fractions
  if (dividerMatch) {
    integer = numberMatch
      .join("")
      .split("/")
      .map((item) => Number(item));
    integer = integer[0] / integer[1];
  } else {
    integer = Number(numberMatch.join(""));
  }
  result.initNum = integer;

  // conversion logic
  if (unitMatch === "gal") {
    result.initUnit = "gal";
    result.returnUnit = "L";
    result.returnNum = (integer * 3.78541).toFixed(4);
    result.string = `${result.initNum} gallons converts to ${result.returnNum} litres`;
  } else if (unitMatch === "l") {
    result.initUnit = "L";
    result.returnUnit = "gal";
    result.returnNum = (integer * 0.26417).toFixed(4);
    result.string = `${result.initNum} litres converts to ${result.returnNum} gallons`;
  } else if (unitMatch === "mi") {
    result.initUnit = "mi";
    result.returnUnit = "km";
    result.returnNum = (integer * 1.60934).toFixed(4);
    result.string = `${result.initNum} miles converts to ${result.returnNum} kilometers`;
  } else if (unitMatch === "km") {
    result.initUnit = "km";
    result.returnUnit = "mi";
    result.returnNum = (integer * 0.621371).toFixed(4);
    result.string = `${result.initNum} kilometers converts to ${result.returnNum} miles`;
  } else if (unitMatch === "kg") {
    result.initUnit = "kg";
    result.returnUnit = "lbs";
    result.returnNum = (integer * 2.20462).toFixed(4);
    result.string = `${result.initNum} kilograms converts to ${result.returnNum} pounds`;
  } else if (unitMatch === "lbs") {
    result.initUnit = "lbs";
    result.returnUnit = "kg";
    result.returnNum = (integer * 0.453592).toFixed(4);
    result.string = `${result.initNum} pounds converts to ${result.returnNum} kilograms`;
  }
  console.log(result);
  //json return
  return res.status(200).json(result);
};
module.exports = converterHandler;
