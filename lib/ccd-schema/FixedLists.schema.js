module.exports = {
  "definitions": {},
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "array",
  "title": "Fixed lists schema",
  "uniqueItems": true,
  "items": {
    "$id": "#/items",
    "type": "object",
    "title": "The Items Schema",
    "required": [
      "LiveFrom",
      "ID",
      "ListElementCode",
      "ListElement"
    ],
    "properties": {
      "LiveFrom": {
        "$id": "#/items/properties/LiveFrom",
        "type": "string",
        "title": "The Livefrom Schema",
        "default": "",
        "examples": [
          "01/01/2017"
        ],
        "pattern": "^(.*)$"
      },
      "LiveTo": {
        "$id": "#/items/properties/LiveTo",
        "type": "string",
        "title": "The LiveTo Schema",
        "default": "",
        "examples": [
          "01/01/2017"
        ],
        "pattern": "^(.*)$"
      },
      "ID": {
        "$id": "#/items/properties/ID",
        "type": "string",
        "title": "The Id Schema",
        "default": "",
        "examples": [
          "TimeFrameList"
        ],
        "maxLength": 40,
        "pattern": "^(.*)$"
      },
      "ListElementCode": {
        "$id": "#/items/properties/ListElementCode",
        "type": "string",
        "title": "The Listelementcode Schema",
        "default": "",
        "examples": [
          "Same day"
        ],
        "maxLength": 40,
        "pattern": "^(.*)$"
      },
      "ListElement": {
        "$id": "#/items/properties/ListElement",
        "type": "string",
        "title": "The Listelement Schema",
        "default": "",
        "examples": [
          "Same day"
        ],
        "maxLength": 250,
        "pattern": "^(.*)$"
      }
    }
  }
}