# Constants
This is a list of constants that FCP uses. It is ~~probably~~ not exhaustive.

## Command types
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

## Return codes
| name | number |
| ---- | ------ |
| NoError | 0 |
| eDiskLimit | 1093 |


## Object IDs
| name | number |
| ---- | ------ |
| NULLOBJID | -1 |
| SESSIONDATAOBJID | -3 |
| NOTIFYCHANGEOBJID | -5 |
| AUTHENTICATEOBJID | -6 |
| ENCRYPTIONOBJID | -9 |
| MEMFORMOBJID | -7 |
| MAILBOXOBJID | 2 |
| RESUMEOBJID | 3 |
| PREFSOBJID | 6 |
| CHATOBJID | 7 |
| SYSINFOOBJID | 8 |
| SEARCHOBJID | 9 |
