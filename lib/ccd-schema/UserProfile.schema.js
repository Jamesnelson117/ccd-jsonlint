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
      "UserIDAMId",
      "WorkBasketDefaultJurisdiction",
      "WorkBasketDefaultCaseType",
      "WorkBasketDefaultState"
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
      "UserIDAMId": {
        "$id": "#/items/properties/UserIDAMId",
        "type": "string",
        "title": "The Useridamid Schema",
        "default": "",
        "examples": [
          "damian@swansea.gov.uk"
        ],
        "pattern": "^(.*)$"
      },
      "WorkBasketDefaultJurisdiction": {
        "$id": "#/items/properties/WorkBasketDefaultJurisdiction",
        "type": "string",
        "title": "The Workbasketdefaultjurisdiction Schema",
        "default": "",
        "examples": [
          "PUBLICLAW"
        ],
        "pattern": "^(.*)$"
      },
      "WorkBasketDefaultCaseType": {
        "$id": "#/items/properties/WorkBasketDefaultCaseType",
        "type": "string",
        "title": "The Workbasketdefaultcasetype Schema",
        "default": "",
        "examples": [
          "CARE_SUPERVISION_EPO"
        ],
        "pattern": "^(.*)$"
      },
      "WorkBasketDefaultState": {
        "$id": "#/items/properties/WorkBasketDefaultState",
        "type": "string",
        "title": "The Workbasketdefaultstate Schema",
        "default": "",
        "examples": [
          "Open"
        ],
        "pattern": "^(.*)$"
      }
    }
  }
}