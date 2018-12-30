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
      "CaseEventID",
      "CaseFieldID",
      "PageFieldDisplayOrder",
      "DisplayContext",
      "PageID",
      "PageDisplayOrder",
      "PageColumnNumber",
      "FieldShowCondition"
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
      "CaseEventID": {
        "$id": "#/items/properties/CaseEventID",
        "type": "string",
        "title": "The Caseeventid Schema",
        "default": "",
        "examples": [
          "openCase"
        ],
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
        "pattern": "^(.*)$"
      },
      "PageFieldDisplayOrder": {
        "$id": "#/items/properties/PageFieldDisplayOrder",
        "type": "integer",
        "title": "The Pagefielddisplayorder Schema",
        "default": 0,
        "examples": [
          1
        ]
      },
      "DisplayContext": {
        "$id": "#/items/properties/DisplayContext",
        "type": "string",
        "title": "The Displaycontext Schema",
        "default": "",
        "examples": [
          "READONLY"
        ],
        "pattern": "^(.*)$"
      },
      "PageID": {
        "$id": "#/items/properties/PageID",
        "type": "integer",
        "title": "The Pageid Schema",
        "default": 0,
        "examples": [
          1
        ]
      },
      "PageDisplayOrder": {
        "$id": "#/items/properties/PageDisplayOrder",
        "type": "integer",
        "title": "The Pagedisplayorder Schema",
        "default": 0,
        "examples": [
          1
        ]
      },
      "PageColumnNumber": {
        "$id": "#/items/properties/PageColumnNumber",
        "type": "integer",
        "title": "The Pagecolumnnumber Schema",
        "default": 0,
        "examples": [
          1
        ]
      },
      "FieldShowCondition": {
        "$id": "#/items/properties/FieldShowCondition",
        "type": "string",
        "title": "The Fieldshowcondition Schema",
        "default": "",
        "examples": [
          "caseName=\"null\""
        ],
        "pattern": "^(.*)$"
      }
    }
  }
}