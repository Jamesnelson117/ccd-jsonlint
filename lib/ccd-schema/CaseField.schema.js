module.exports = {
  "definitions": {},
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "array",
  "title": "Case field schema",
  "uniqueItems": true,
  "items": {
    "$id": "#/items",
    "type": "object",
    "title": "The Items Schema",
    "required": [
      "LiveFrom",
      "CaseTypeID",
      "ID",
      "Label",
      "FieldType",
      "SecurityClassification"
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
        "maxLength": 70,
        "pattern": "^(.*)$"
      },
      "ID": {
        "$id": "#/items/properties/ID",
        "type": "string",
        "title": "The Id Schema",
        "default": "",
        "examples": [
          "caseName"
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
          "Case Name"
        ],
        "pattern": "^(.*)$"
      },
      "HintText": {
        "$id": "#/items/properties/HintText",
        "type": "string",
        "title": "The Hinttext Schema",
        "default": "",
        "examples": [
          "Include the Local Authority name and respondent’s last name. For example, Endley Council v Smith/Tate/Jones"
        ],
        "pattern": "^(.*)$"
      },
      "FieldType": {
        "$id": "#/items/properties/FieldType",
        "type": "string",
        "title": "The Fieldtype Schema",
        "default": "",
        "examples": [
          "Text"
        ],
        "maxLength": 70,
        "pattern": "^(.*)$"
      },
      "FieldTypeParmeter": {
        "$id": "#/items/properties/FieldTypeParmeter",
        "type": "string",
        "title": "The FieldTypeParmeter Schema",
        "default": "",
        "examples": [
          "Text"
        ],
        "maxLength": 40,
        "pattern": "^(.*)$"
      },
      "RegularExpression": {
        "$id": "#/items/properties/RegularExpression",
        "type": "string",
        "title": "The RegularExpression Schema",
        "default": "",
        "examples": [
          "Text"
        ],
        "pattern": "^(.*)$"
      },
      "SecurityClassification": {
        "$id": "#/items/properties/SecurityClassification",
        "type": "string",
        "title": "The Securityclassification Schema",
        "default": "",
        "examples": [
          "Public"
        ],
        "pattern": "^(?:Public|Private|Restricted)$"
      }
    }
  }
}