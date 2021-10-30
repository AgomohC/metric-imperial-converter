# Metric Imperial Converter

[femto-metric-imperial-converter](#) is a simple Full-Stack app that converts metric units to imperial units and vice versa. This project idea was gotten from [freeCodeCamp](#).

---

### Resources

There is only one resource in this app

- Convert <#/convert>

### Convert

A post request is made with the request body containing the number and unit to be converted when the form is submitted. Accepted units are mi (miles), km (kilometers), lbs (pounds), kg (kilograms), gal (gallons) & l (litres) which are converted to metric or imperial forms as required. Numbers must be whole numbers, fractions or decimals. Any other format returns a 400 error with text "invalid number". Invalid units also return a 400 error with text "invalid unit". If no number is inputted, a default of 1 is used in the conversion.

### Sample Return

- When the input is valid

```js
{
    "initNum": 3.1,
    "initUnit": "km",
    "returnNum": "1.9263",
    "returnUnit": "mi",
    "string": "3.1 kilometers converts to 1.9263 miles"
}

{
    "initNum": 3.1,
    "initUnit": "mi",
    "returnNum": "4.9890",
    "returnUnit": "km",
    "string": "3.1 miles converts to 4.9890 kilometers"
}

{
    "initNum": 1.3333333333333333,
    "initUnit": "gal",
    "returnNum": "5.0472",
    "returnUnit": "L",
    "string": "1.3333333333333333 gallons converts to 5.0472 litres"
}

{
    "initNum": 1.6666666666666667,
    "initUnit": "L",
    "returnNum": "0.4403",
    "returnUnit": "gal",
    "string": "1.6666666666666667 litres converts to 0.4403 gallons"
}

{
    "initNum": 8,
    "initUnit": "lbs",
    "returnNum": "3.6287",
    "returnUnit": "kg",
    "string": "8 pounds converts to 3.6287 kilograms"
}

{
    "initNum": 5,
    "initUnit": "kg",
    "returnNum": "11.0231",
    "returnUnit": "lbs",
    "string": "5 kilograms converts to 11.0231 pounds"
}

```

- When the input is missing

```js
{
    "msg": "required input is missing"
}
```

- When the number is invalid

```js
{
    "msg": "invalid number"
}
```

- When the unit is invalid or absent

```js
{
    "msg": "invalid unit"
}
```

### Feedback!!

I'd love your feedback on the API. You can reach me via [email](mailto:chinaemerema@gmail.com) or give me a shout out on [twitter](https://twitter.com/femto_ace?t=nk6ylNm1Zp2l0yiJkCKFeA&s=09)
