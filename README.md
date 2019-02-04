CSVJSON json2csv() function
===========================

Single function `json2csv` to convert JSON to CSV. Self contained without dependencies. Used to power CSVJSON the online tool found at [www.csvjson.com/json2csv](https://www.csvjson.com/json2csv). Used by thousands everyday.

[npm package here](https://www.npmjs.com/package/csvjson-json2csv)

# Usage

Simply call `json2csv(json, options)` passing a JavaScript object. Use the `options` hash to pass on some switches:
- `separator`: Character which acts as separator. For semi-colon pass `;`. For TSV pass a tab `\t`. Default is `,`.
- `flatten`: Boolean indicating whether to flatten nested arrays or not. Default is `false`.
- `output_csvjson_variant`: Boolean indicating whether to output objects and arrays as is as per the [CSVJSON format variant](http://csvjson.org/). Default is `false`.

## Node example

```
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

var csv = json2csv(obj);
console.log(csv);

```

## Browser example

Note: In the browser, global namespace `CSVJSON` is created. It contains the `json2csv` function.

```
<script type="text/javascript" src="csv2json.js"></script>
<script>
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

  var csv = CSVJSON.json2csv(obj);
  console.log(csv);
</script>
```

In both cases, you would get this in the console:
```
"album","year","US_peak_chart_post"
"The White Stripes",1999,"-"
"De Stijl",2000,"-"
"White Blood Cells",2001,61
"Elephant",2003,6
"Get Behind Me Satan",2005,3
"Icky Thump",2007,2
"Under Great White Northern Lights",2010,11
"Live in Mississippi",2011,"-"
"Live at the Gold Dollar",2012,"-"
"Nine Miles from the White City",2013,"-"
```

You can of course test all options online on [www.csvjson.com/json2csv](https://www.csvjson.com/json2csv).

## Flattening

By default `json2csv` assumes you have an array of objects. If your array containes nested objects, use the `flatten` option. For example:

```
const json2csv = require('./json2csv.js');
const obj = {
  "trees": [
    {
      "id": 1,
      "name": "tree1",
      "branches": [
        {
          "id": 1,
          "name": "branch1",
          "leaves": [
            {
              "id": 1,
              "name": "leave1"
            },
            {
              "id": 2,
              "name": "leave2"
            }
          ]
        },
        {
          "id": 2,
          "name": "branch2",
          "leaves": [
            {
              "id": 1,
              "name": "leave1"
            },
            {
              "id": 2,
              "name": "leave2"
            }
          ]
        }
      ]
    }
  ]
};

var csv = json2csv(obj, {flatten: true});
console.log(csv);
```

Will produce this:

```
"trees.id","trees.name","trees.branches.id","trees.branches.name","trees.branches.leaves.id","trees.branches.leaves.name"
1,"tree1",1,"branch1",1,"leave1"
1,"tree1",1,"branch1",2,"leave2"
1,"tree1",2,"branch2",1,"leave1"
1,"tree1",2,"branch2",2,"leave2"
```

## Tests
Run the tests in your browser by opening `test-browser.html`.

Run the tests through node:
```
node test-node.js
```

# Companion functions

[csv2json](https://github.com/martindrapeau/csvjson-csv2json) to convert CSV to JSON. [npm package here](https://www.npmjs.com/package/csvjson-csv2json).

[json_beautifier](https://github.com/martindrapeau/csvjson-json_beautifier) to beautify and format your JSON. [npm package here](https://www.npmjs.com/package/csvjson-json_beautifier).

[JSON2_mod](https://github.com/martindrapeau/json2-mod) a replacement of `JSON` with more options to format your JSON. [npm package here](https://www.npmjs.com/package/json2-mod).