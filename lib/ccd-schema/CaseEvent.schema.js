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
      "ID",
      "Name",
      "Description",
      "DisplayOrder",
      "PostConditionState",
      "SecurityClassification",
      "CallBackURLAboutToSubmitEvent",
      "RetriesTimeoutURLAboutToSubmitEvent",
      "CallBackURLSubmittedEvent",
      "RetriesTimeoutURLSubmittedEvent",
      "ShowSummary",
      "ShowEventNotes",
      "EndButtonLabel"
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
      "ID": {
        "$id": "#/items/properties/ID",
        "type": "string",
        "title": "The Id Schema",
        "default": "",
        "examples": [
          "openCase"
        ],
        "pattern": "^(.*)$"
      },
      "Name": {
        "$id": "#/items/properties/Name",
        "type": "string",
        "title": "The Name Schema",
        "default": "",
        "examples": [
          "Open case"
        ],
        "pattern": "^(.*)$"
      },
      "Description": {
        "$id": "#/items/properties/Description",
        "type": "string",
        "title": "The Description Schema",
        "default": "",
        "examples": [
          "Create a new case – add a title"
        ],
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
      },
      "PostConditionState": {
        "$id": "#/items/properties/PostConditionState",
        "type": "string",
        "title": "The Postconditionstate Schema",
        "default": "",
        "examples": [
          "Open"
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
      },
      "CallBackURLAboutToSubmitEvent": {
        "$id": "#/items/properties/CallBackURLAboutToSubmitEvent",
        "type": "string",
        "title": "The Callbackurlabouttosubmitevent Schema",
        "default": "",
        "examples": [
          "${CCD_DEF_CASE_SERVICE_BASE_URL}/callback/case-initiation/about-to-submit"
        ],
        "pattern": "^(.*)$"
      },
      "RetriesTimeoutURLAboutToSubmitEvent": {
        "$id": "#/items/properties/RetriesTimeoutURLAboutToSubmitEvent",
        "type": "string",
        "title": "The Retriestimeouturlabouttosubmitevent Schema",
        "default": "",
        "examples": [
          "1,2,3,4,5"
        ],
        "pattern": "^(.*)$"
      },
      "CallBackURLSubmittedEvent": {
        "$id": "#/items/properties/CallBackURLSubmittedEvent",
        "type": "string",
        "title": "The Callbackurlsubmittedevent Schema",
        "default": "",
        "examples": [
          "${CCD_DEF_CASE_SERVICE_BASE_URL}/callback/case-initiation/submitted"
        ],
        "pattern": "^(.*)$"
      },
      "RetriesTimeoutURLSubmittedEvent": {
        "$id": "#/items/properties/RetriesTimeoutURLSubmittedEvent",
        "type": "string",
        "title": "The Retriestimeouturlsubmittedevent Schema",
        "default": "",
        "examples": [
          "1,2,3,4,5"
        ],
        "pattern": "^(.*)$"
      },
      "ShowSummary": {
        "$id": "#/items/properties/ShowSummary",
        "type": "string",
        "title": "The Showsummary Schema",
        "default": "",
        "examples": [
          "N"
        ],
        "pattern": "^(.*)$"
      },
      "ShowEventNotes": {
        "$id": "#/items/properties/ShowEventNotes",
        "type": "string",
        "title": "The Showeventnotes Schema",
        "default": "",
        "examples": [
          "N"
        ],
        "pattern": "^(.*)$"
      },
      "EndButtonLabel": {
        "$id": "#/items/properties/EndButtonLabel",
        "type": "string",
        "title": "The Endbuttonlabel Schema",
        "default": "",
        "examples": [
          "Save and continue"
        ],
        "pattern": "^(.*)$"
      }
    }
  }
}