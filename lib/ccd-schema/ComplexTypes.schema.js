module.exports = {
  "definitions": {},
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "array",
  "title": "Complex types schema",
  "uniqueItems": true,
  "items": {
    "$id": "#/items",
    "type": "object",
    "title": "The Items Schema",
    "required": [
      "LiveFrom",
      "ID",
      "ListElementCode",
      "FieldType",
      "ElementLabel",
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
          "UploadDocument"
        ],
        "maxLength": 70,
        "pattern": "^(.*)$"
      },
      "ListElementCode": {
        "$id": "#/items/properties/ListElementCode",
        "type": "string",
        "title": "The Listelementcode Schema",
        "default": "",
        "examples": [
          "typeOfDocument"
        ],
        "maxLength": 70,
        "pattern": "^(.*)$"
      },
      "FieldType": {
        "$id": "#/items/properties/FieldType",
        "type": "string",
        "title": "The Fieldtype Schema",
        "default": "",
        "examples": [
          "Document"
        ],
        "maxLength": 70,
        "pattern": "^(.*)$"
      },
      "FieldTypeParameter": {
        "$id": "#/items/properties/FieldTypeParameter",
        "type": "string",
        "title": "The FieldTypeParameter Schema",
        "default": "",
        "examples": [
          "Document"
        ],
        "maxLength": 40,
        "pattern": "^(.*)$"
      },
      "ElementLabel": {
        "$id": "#/items/properties/ElementLabel",
        "type": "string",
        "title": "The Elementlabel Schema",
        "default": "",
        "examples": [
          "Upload a file"
        ],
        "maxLength": 200,
        "pattern": "^(.*)$"
      },
      "FieldShowCondition": {
        "$id": "#/items/properties/FieldShowCondition",
        "type": "string",
        "title": "The FieldShowCondition Schema",
        "default": "",
        "examples": [
          "Document"
        ],
        "maxLength": 100,
        "pattern": "^(.*)$"
      },
      "RegularExpression": {
        "$id": "#/items/properties/RegularExpression",
        "type": "string",
        "title": "The RegularExpression Schema",
        "default": "",
        "examples": [
          "Document"
        ],
        "pattern": "^(.*)$"
      },
      "HintText": {
        "$id": "#/items/properties/HintText",
        "type": "string",
        "title": "The HintText Schema",
        "default": "",
        "examples": [
          "Document"
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