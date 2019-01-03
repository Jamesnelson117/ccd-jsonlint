module.exports = {
  "definitions": {},
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "array",
  "title": "Case Event Schema",
  "uniqueItems": true,
  "items": {
    "$id": "#/items",
    "type": "object",
    "required": [
      "LiveFrom",
      "CaseTypeID",
      "ID",
      "Name",
      "Description",
      "DisplayOrder",
      "SecurityClassification",
    ],
    "properties": {
      "LiveFrom": {
        "$id": "#/items/properties/LiveFrom",
        "type": "string",
        "title": "Live From",
        "default": "",
        "examples": [
          "01/01/2017"
        ],
      },
      "LiveTo": {
        "$id": "#/items/properties/LiveTo",
        "type": "string",
        "title": "Live To",
        "default": "",
        "examples": [
          "01/01/2017"
        ],
        "pattern": "^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$"
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
          "openCase"
        ],
        "maxLength": 70,
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
        "maxLength": 30,
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
        "maxLength": 100,
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
      "PreConditionState": {
        "$id": "#/items/properties/PreConditionState",
        "type": "string",
        "title": "The Postconditionstate Schema",
        "default": "",
        "examples": [
          "Open"
        ],
        "pattern": "^(.*)$"
      },
      "PostConditionState": {
        "$id": "#/items/properties/PostConditionState",
        "type": "string",
        "title": "The Postconditionstate Schema",
        "default": "",
        "examples": [
          "Open"
        ],
        "maxLength": 70,
        "pattern": "^(.*)$"
      },
      "CallBackURLAboutToStartEvent": {
        "$id": "#/items/properties/CallBackURLAboutToStartEvent",
        "type": "string",
        "title": "The CallBackURLAboutToStartEvent Schema",
        "default": "",
        "examples": [
          "${CCD_DEF_CASE_SERVICE_BASE_URL}/callback/case-initiation/about-to-submit"
        ],
        "pattern": "^(.*)$"
      },
      "RetriesTimeoutAboutToStartEvent": {
        "$id": "#/items/properties/RetriesTimeoutAboutToStartEvent",
        "type": "string",
        "title": "The Retriestimeouturlabouttosubmitevent Schema",
        "default": "",
        "examples": [
          "1,2,3,4,5"
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
      "ShowSummary": {
        "$id": "#/items/properties/ShowSummary",
        "type": "string",
        "title": "The Showsummary Schema",
        "default": "",
        "examples": [
          "N"
        ],
        "pattern": "^(?:Y|N)$"
      },
      "ShowEventNotes": {
        "$id": "#/items/properties/ShowEventNotes",
        "type": "string",
        "title": "The Showeventnotes Schema",
        "default": "",
        "examples": [
          "N"
        ],
        "pattern": "^(?:Y|N)$"
      },
      "CanSaveDraft": {
        "$id": "#/items/properties/CanSaveDraft",
        "type": "string",
        "title": "The Showeventnotes Schema",
        "default": "",
        "examples": [
          "N"
        ],
        "pattern": "^(?:Y|N)$"
      },
      "EndButtonLabel": {
        "$id": "#/items/properties/EndButtonLabel",
        "type": "string",
        "title": "The Endbuttonlabel Schema",
        "default": "",
        "examples": [
          "Save and continue"
        ],
        "maxLength": 200,
        "pattern": "^(.*)$"
      }
    }
  }
}