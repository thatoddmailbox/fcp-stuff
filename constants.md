# Constants
This is a list of constants that FCP uses. It is ~~probably~~ not exhaustive.

## Commands
### Command numbers
| name | number |
| ---- | ------ |
| cLogin | 4 |
| cLogout | 5 |
| cObjOpen | 7 |
| cObjData | 8 |
| cObjUpdate | 9 |
| cObjInsert | 10 |
| cObjDelete | 11 |
| cObjClose | 12 |
| cObjCreate | 13 |
| cObjMove | 15 |
| cObjCopy | 16 |
| cObjPrio | 18 |
| cGetObjInfo | 19 |
| cPutObjInfo | 20 |
| cUpload | 21 |
| cDownload | 22 |
| cForward | 24 |
| cReply | 25 |
| cSend | 26 |
| cAttach | 27 |
| cDetach | 28 |
| cSubscribe | 29 |
| cNameValidate | 30 |
| cChgPassword | 33 |
| cSelect | 34 |
| cWarnLogoff | 38 |
| cBroadcast | 39 |
| cSanity | 48 |
| cConnReq | 51 |
| cResume | 52 |
| cNotify | 54 |
| cOpenACL | 55 |
| cOpenHistory | 57 |
| cChat | 58 |
| cWhoIsLoggedOn | 59 |
| cObjOpenUnsolicited | 60 |
| cObjOpenDup | 62 |
| cObjOpenSpecial | 63 |
| cObjRetrieval | 66 |
| cObjOpenQuery | 68 |

### Return codes
| name | number |
| ---- | ------ |
| NoError | 0 |
| eDiskLimit | 1093 |

### Initial seed
Used for cConnReq and sConnReq messages.
Always equal to `2171034441`.

## Objects
### Object IDs
| name | number |
| ---- | ------ |
| NULLOBJID | -1 |
| SESSIONDATAOBJID | -3 |
| NOTIFYCHANGEOBJID | -5 |
| AUTHENTICATEOBJID | -6 |
| MEMFORMOBJID | -7 |
| ENCRYPTIONOBJID | -9 |
| TYPEDFOLDEROBJID | 1 |
| MAILBOXOBJID | 2 |
| RESUMEOBJID | 3 |
| PREFSOBJID | 6 |
| CHATOBJID | 7 |
| SYSINFOOBJID | 8 |
| SEARCHOBJID | 9 |

### Object types
| name | number |
| ---- | ------ |
| lFileInfo    | 1 |
| lShortInfo   | 2 |
| dEnvInfo     | 3 |
| dToName      | 4 |
| dCopyName    | 5 |
| dBody        | 6 |
| dAttach      | 7 |
| dFromName    | 8 |
| dSubject     | 9 |
| dODName      | 10 |
| fDataFork    | 12 |
| fResFork     | 13 |
| dBCCNames    | 14 |
| lURFlag      | 15 |
| lAppFlag     | 16 |
| aConfGroup   | 19 |
| dFormData    | 20 |
| dHistory     | 21 |
| dChatMsg     | 22 |
| dChatName    | 23 |
| dEOF         | 24 |
| dInviteChat  | 25 |
| dFileInfo    | 27 |
| aAccess      | 29 |
| aMembers     | 30 |
| dFwdNames    | 34 |
| dMsgOptions  | 37 |
| dThreadID    | 38 |
| dMessageID   | 39 |
| dSysID       | 40 |
| dDocEditData | 42 |
| fFileHdr     | 43 |
| lFormData    | 44 |
| lDelFlag     | 48 |
| dIndex       | 50 |
| dEStatus     | 51 |
| odFCName     | 55 |
| dAltBody     | 70 |
| lWatch       | 72 |
| lThreadInfo  | 74 |
| dbProgress   | 1900 |

### Typed folders
| name | number |
| ---- | ------ |
| Mailbox          | 1 |
| Contacts         | 7 |
| Bookmarks        | 16 |
| VoiceGreetings   | 20 |
| Calendar         | 21 |
| ResourceCalendar | 22 |
| LocationCalendar | 23 |
| GroupCalendar    | 28 |
| MyDocuments      | 32 |
| SharedDocuments  | 33 |
| Files            | 40 |
| Community        | 66 |
| Pulse            | 67 |
| FCXIM            | 71 |
| FCXIMCollection  | 72 |
| Apps             | 74 |
| PersonalAppsData | 75 |

## Form fields
### Form field IDs
| name | number |
| ---- | ------ |
| lShortInfo | 2 |
| dSubject | 9 |
| dMessageID | 39 |

| name | number |
| ---- | ------ |
| ENCRYPTION_METHOD_FIELD_ID | 1000 |
| ENCRYPTION_SERVER_PUB_KEY_E_FIELD_ID | 1100 |
| ENCRYPTION_SERVER_PUB_KEY_N_FIELD_ID | 1104 |
| ENCRYPTION_SERVER_SYM_KEY_FIELD_ID | 1200 |
| ENCRYPTION_CLIENT_SYM_KEY_FIELD_ID | 1201 |

| name | number |
| ---- | ------ |
| fcpLoginDigest | 1002 |
| fcpLoginUserid | 1003 |
| fcpLoginPassword | 1004 |
| fcpMD5Challenge | 1006 |
| fcpLoginConnAddress | 1008 |
| fcpLoginTicket | 1009 |
| fcpLoginOptions | 1010 | 
| fcpLoginClusterId  | 1018 |

| name | number |
| ---- | ------ |
| fcpFirstName          | 7001 |
| fcpInitials           | 7002 |
| fcpLastName           | 7003 |
| fcpPrimaryDomainName  | 7004 |
| fcpLogoffTimer        | 7005 |
| fcpSessionCID         | 7006 |
| userTimeZone          | 7007 |
| serverTimeZone        | 7008 |
| fcpUserID             | 7012 |
| fcpSessionOptions     | 7016 |
| fcpPersonalMessage    | 7020 |
| fcpMobileDeviceID     | 7025 |
| fcpMobileAppID        | 7035 |
| fcpNotifyCapabilities | 7036 |
| fcpPWSeed             | 7038 |
| fcpUIExclusions       | 7039 |

### Field data types
| name | number |
| ---- | ------ |
| fdString         | 0 |
| fdCheckBox       | 6 |
| fdShort          | 7 |
| fdLong           | 14 |
| fdPopupList      | 80 |
| fdMacText        | 100 |
| fdMacPicture     | 101 |
| fdMacSound       | 102 |
| fdGIF            | 103 |
| fdWinBMP         | 104 |
| fdWinWAV         | 105 |
| fdByte           | 106 |
| fdText           | 107 |
| fdSound          | 108 |
| fdImage          | 109 |
| fdButton         | 110 |
| fdStyleData      | 111 |
| fdClearField     | 112 |
| fdSetListCount   | 113 |
| fdAttributes     | 114 |
| fdSetFocus       | 115 |
| fdSelect         | 116 |
| fdFormAction     | 117 |
| fdPropertyStream | 118 |
| fdFloat          | 119 |
| fdDouble         | 120 |
| fdShortInfo      | 121 |
| fdBinary         | 122 |
| fdRequestData    | 123 |
| fdSetSelection   | 124 |
| fdFCName         | 125 |
| fdHistory        | 126 |
| fdRemove         | 127 |
| fdMediaStream    | 128 |
| fdJPEG           | 129 |
| fdHTML           | 130 |
| fdINT64          | 131 |
| fdResult         | 132 |
| fdObjID          | 133 |

## Client options
| name | number |
| ---- | ------ |
| coLoginOptions       | 2048 |
| coNewEncryption      | 4096 |
| coNewHeader          | 16384 |
| coStandardEncryption | 32768 |