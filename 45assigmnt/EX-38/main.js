function describe_city(city, country) {
    if (country === void 0) { country = 'pakistan'; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city('karachi');
describe_city('france', 'Europe');
describe_city('lahore', ' punjab');
