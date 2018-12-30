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
      "ID": {
        "$id": "#/items/properties/ID",
        "type": "string",
        "title": "The Id Schema",
        "default": "",
        "examples": [
          "UploadDocument"
        ],
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
        "pattern": "^(.*)$"
      }
    }
  }
}