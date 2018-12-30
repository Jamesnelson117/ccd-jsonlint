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
      "Channel",
      "TabID",
      "TabLabel",
      "TabDisplayOrder",
      "CaseFieldID",
      "TabFieldDisplayOrder"
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
      "Channel": {
        "$id": "#/items/properties/Channel",
        "type": "string",
        "title": "The Channel Schema",
        "default": "",
        "examples": [
          "CaseWorker"
        ],
        "pattern": "^(.*)$"
      },
      "TabID": {
        "$id": "#/items/properties/TabID",
        "type": "string",
        "title": "The Tabid Schema",
        "default": "",
        "examples": [
          "OrdersHearingTab"
        ],
        "pattern": "^(.*)$"
      },
      "TabLabel": {
        "$id": "#/items/properties/TabLabel",
        "type": "string",
        "title": "The Tablabel Schema",
        "default": "",
        "examples": [
          "Orders and hearing"
        ],
        "pattern": "^(.*)$"
      },
      "TabDisplayOrder": {
        "$id": "#/items/properties/TabDisplayOrder",
        "type": "integer",
        "title": "The Tabdisplayorder Schema",
        "default": 0,
        "examples": [
          1
        ]
      },
      "CaseFieldID": {
        "$id": "#/items/properties/CaseFieldID",
        "type": "string",
        "title": "The Casefieldid Schema",
        "default": "",
        "examples": [
          "orders"
        ],
        "pattern": "^(.*)$"
      },
      "TabFieldDisplayOrder": {
        "$id": "#/items/properties/TabFieldDisplayOrder",
        "type": "integer",
        "title": "The Tabfielddisplayorder Schema",
        "default": 0,
        "examples": [
          1
        ]
      }
    }
  }
}