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
      "CaseStateID",
      "UserRole",
      "CRUD"
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
      "CaseStateID": {
        "$id": "#/items/properties/CaseStateID",
        "type": "string",
        "title": "The Casestateid Schema",
        "default": "",
        "examples": [
          "Open"
        ],
        "pattern": "^(.*)$"
      },
      "UserRole": {
        "$id": "#/items/properties/UserRole",
        "type": "string",
        "title": "The Userrole Schema",
        "default": "",
        "examples": [
          "caseworker-publiclaw-solicitor"
        ],
        "pattern": "^(.*)$"
      },
      "CRUD": {
        "$id": "#/items/properties/CRUD",
        "type": "string",
        "title": "The Crud Schema",
        "default": "",
        "examples": [
          "CRU"
        ],
        "pattern": "^(.*)$"
      }
    }
  }
}