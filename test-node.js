const json2csv = require('./json2csv.js');
const obj = [
  {
    "album": "The White Stripes",
    "year": 1999,
    "US_peak_chart_post": "-"
  },
  {
    "album": "De Stijl",
    "year": 2000,
    "US_peak_chart_post": "-"
  },
  {
    "album": "White Blood Cells",
    "year": 2001,
    "US_peak_chart_post": 61
  },
  {
    "album": "Elephant",
    "year": 2003,
    "US_peak_chart_post": 6
  },
  {
    "album": "Get Behind Me Satan",
    "year": 2005,
    "US_peak_chart_post": 3
  },
  {
    "album": "Icky Thump",
    "year": 2007,
    "US_peak_chart_post": 2
  },
  {
    "album": "Under Great White Northern Lights",
    "year": 2010,
    "US_peak_chart_post": 11
  },
  {
    "album": "Live in Mississippi",
    "year": 2011,
    "US_peak_chart_post": "-"
  },
  {
    "album": "Live at the Gold Dollar",
    "year": 2012,
    "US_peak_chart_post": "-"
  },
  {
    "album": "Nine Miles from the White City",
    "year": 2013,
    "US_peak_chart_post": "-"
  }
];
const csv = json2csv(obj);
const expected = `"album","year","US_peak_chart_post"
"The White Stripes",1999,"-"
"De Stijl",2000,"-"
"White Blood Cells",2001,61
"Elephant",2003,6
"Get Behind Me Satan",2005,3
"Icky Thump",2007,2
"Under Great White Northern Lights",2010,11
"Live in Mississippi",2011,"-"
"Live at the Gold Dollar",2012,"-"
"Nine Miles from the White City",2013,"-"`;
console.log('==Expected==');
console.log(expected);
console.log('==Execution==');
console.log(csv);
console.log('==Result==');
if (csv === expected) {
	console.log('Success!');
} else {
	console.log('Failed.');
}
