module.exports = {
  "definitions": {},
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "array",
  "title": "Search input fields schema",
  "uniqueItems": true,
  "items": {
    "$id": "#/items",
    "type": "object",
    "title": "The Items Schema",
    "required": [
      "LiveFrom",
      "CaseTypeID",
      "CaseFieldID",
      "Label",
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
      "CaseTypeID": {
        "$id": "#/items/properties/CaseTypeID",
        "type": "string",
        "title": "The Casetypeid Schema",
        "default": "",
        "examples": [
          "CARE_SUPERVISION_EPO"
        ],
        "maxLength": 70,
        "pattern": "^(.*)$"
      },
      "CaseFieldID": {
        "$id": "#/items/properties/CaseFieldID",
        "type": "string",
        "title": "The Casefieldid Schema",
        "default": "",
        "examples": [
          "caseLocalAuthority"
        ],
        "maxLength": 70,
        "pattern": "^(.*)$"
      },
      "Label": {
        "$id": "#/items/properties/Label",
        "type": "string",
        "title": "The Label Schema",
        "default": "",
        "examples": [
          "Local authority"
        ],
        "maxLength": 200,
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