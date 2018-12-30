module.exports = {
  "definitions": {},
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "array",
  "title": "The Root Schema",
  "items": {
    "$id": "#/items",
    "type": "object",
    "title": "The Items Schema",
    "required": [
      "LiveFrom",
      "CaseTypeID",
      "ID",
      "Name",
      "Description",
      "DisplayOrder"
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
      "CaseTypeID": {
        "$id": "#/items/properties/CaseTypeID",
        "type": "string",
        "title": "The Casetypeid Schema",
        "default": "",
        "examples": [
          "CARE_SUPERVISION_EPO"
        ],
        "pattern": "^(.*)$"
      },
      "ID": {
        "$id": "#/items/properties/ID",
        "type": "string",
        "title": "The Id Schema",
        "default": "",
        "examples": [
          "Open"
        ],
        "pattern": "^(.*)$"
      },
      "Name": {
        "$id": "#/items/properties/Name",
        "type": "string",
        "title": "The Name Schema",
        "default": "",
        "examples": [
          "Open"
        ],
        "pattern": "^(.*)$"
      },
      "Description": {
        "$id": "#/items/properties/Description",
        "type": "string",
        "title": "The Description Schema",
        "default": "",
        "examples": [
          "Initial case state – create title as a minimum; add documents, etc."
        ],
        "pattern": "^(.*)$"
      },
      "DisplayOrder": {
        "$id": "#/items/properties/DisplayOrder",
        "type": "integer",
        "title": "The Displayorder Schema",
        "default": 0,
        "examples": [
          1
        ]
      }
    }
  }
}