module.exports = {
  "definitions": {},
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "array",
  "title": "Case event to fields schema",
  "uniqueItems": true,
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
      "CaseEventID": {
        "$id": "#/items/properties/CaseEventID",
        "type": "string",
        "title": "The Caseeventid Schema",
        "default": "",
        "examples": [
          "openCase"
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
        "pattern": "^(?:MANDATORY|READONLY|OPTIONAL)$"
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
      "PageLabel": {
        "$id": "#/items/properties/PageLabel",
        "type": "string",
        "title": "The PageLabel Schema",
        "default": "",
        "pattern": "^(.*)$",
        "maxLength": 40,
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
        "pattern": "^(.*)$",
        "maxLength": 100,
      },
      "PageShowCondition": {
        "$id": "#/items/properties/PageShowCondition",
        "type": "boolean",
        "title": "The PageShowCondition Schema",
      },
      "ShowSummaryChangeOption": {
        "$id": "#/items/properties/ShowSummaryChangeOption",
        "type": "string",
        "title": "The ShowSummaryChangeOption Schema",
        "pattern": "^(?:Y|N)$"
      },
      "ShowSummaryContentOption": {
        "$id": "#/items/properties/ShowSummaryContentOption",
        "type": "string",
        "title": "The ShowSummaryContentOption Schema",
        "pattern": "^(?:Y|N)$"
      }
    }
  }
}