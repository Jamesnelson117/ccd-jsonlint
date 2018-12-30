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
      "Name",
      "Description",
      "JurisdictionID",
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
          "CARE_SUPERVISION_EPO"
        ],
        "pattern": "^(.*)$"
      },
      "Name": {
        "$id": "#/items/properties/Name",
        "type": "string",
        "title": "The Name Schema",
        "default": "",
        "examples": [
          "Care, supervision and EPOs"
        ],
        "pattern": "^(.*)$"
      },
      "Description": {
        "$id": "#/items/properties/Description",
        "type": "string",
        "title": "The Description Schema",
        "default": "",
        "examples": [
          "Care, supervision and emergency protection orders"
        ],
        "pattern": "^(.*)$"
      },
      "JurisdictionID": {
        "$id": "#/items/properties/JurisdictionID",
        "type": "string",
        "title": "The Jurisdictionid Schema",
        "default": "",
        "examples": [
          "PUBLICLAW"
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