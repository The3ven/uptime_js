const fetch = require("node-fetch");

const Devexcuses = async () => {
  const response = await fetch("http://www.developerexcuses.com");
  const body = await response.text();
  let data = JSON.stringify(body);
  let start_idx = data.indexOf('">', 793);
  let last_idx = data.indexOf("</a>", 794);
  let quote = data.substring(start_idx + 2, last_idx);
  return quote;
};



module.exports = {
  Devexcuses,
};