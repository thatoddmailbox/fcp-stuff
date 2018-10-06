# Constants
This is a list of constants that FCP uses. It is ~~probably~~ not exhaustive.

## Commands
### Command numbers
| name | number | note |
| ---- | ------ | ---- |
| cACK | 1 | doesn't seem to really be used? |
| cNACK | 2 | see above |
| cSYNC | 3 | see above |
| cLogin | 4 |  |
| cLogout | 5 |  |
| cChgUserID | 6 |  |
| cObjOpen | 7 |  |
| cObjData | 8 |  |
| cObjUpdate | 9 |  |
| cObjInsert | 10 |  |
| cObjDelete | 11 |  |
| cObjClose | 12 |  |
| cObjCreate | 13 |  |
| cObjRemove | 14 | doesn't seem to really be used? try cObjDelete instead |
| cObjMove | 15 |  |
| cObjCopy | 16 |  |
| cObjLink | 17 |  |
| cObjPrio | 18 |  |
| cGetObjInfo | 19 |  |
| cPutObjInfo | 20 |  |
| cUpload | 21 |  |
| cDownload | 22 |  |
| cAbortLoad | 23 |  |
| cForward | 24 |  |
| cReply | 25 |  |
| cSend | 26 |  |
| cAttach | 27 |  |
| cDetach | 28 |  |
| cSubscribe | 29 |  |
| cNameValidate | 30 |  |
| cGroupAccess | 31 |  |
| cUserAccess | 32 |  |
| cChgPassword | 33 |  |
| cSelect | 34 |  |
| cAddUser | 35 |  |
| cDelUser | 36 |  |
| cChgUser | 37 |  |
| cWarnLogoff | 38 |  |
| cBroadcast | 39 |  |
| cConnectStatus | 40 |  |
| cListUsers | 41 |  |
| cPathDownload | 42 |  |
| cPathUpload | 43 |  |
| cPathLink | 44 |  |
| cGetUser | 45 |  |
| cGetSysProfile | 46 |  |
| cPutSysProfile | 47 |  |
| cSanity | 48 |  |
| cSocket | 49 |  |
| cAutoReg | 50 |  |
| cConnReq | 51 |  |
| cResume | 52 |  |
| cControl | 53 |  |
| cNotify / cNewNotify | 54 | fcc calls it "cNotify", fcws calles it "cNewNotify" |
| cOpenACL | 55 |  |
| cNotifyReq | 56 |  |
| cOpenHistory | 57 |  |
| cChat | 58 |  |
| cWhoIsLoggedOn | 59 |  |
| cObjOpenUnsolicited | 60 |  |
| cOpenUser | 61 |  |
| cObjOpenDup | 62 |  |
| cObjOpenSpecial | 63 |  |
| cObjOpenBySpec | 64 |  |
| cObjDelBySpec | 65 |  |
| cObjRetrieval | 66 |  |
| cClearNotify | 67 |  |
| cObjOpenQuery | 68 |  |
| cObjOpenSpecialUnsolicited | 69 |  |
| cEndReq | 70 |  |

### Error codes
Note: A lot of these are unused/irrelevant to modern-day FirstClass

| name | number |
| ---- | ------ |
| NoError | 0 |
| eVersMismatch | 1001 |
| eMemory | 1002 |
| eNoSuchUser | 1003 |
| eBadPacket | 1004 |
| eBadObjID | 1005 |
| eBadDocHdr | 1006 |
| eBadData | 1007 |
| eObjNotWritable | 1008 |
| eBadWrite | 1009 |
| eNotLoggedIn | 1010 |
| eBadRequest | 1011 |
| eNoBuffers | 1012 |
| eLoggedIn | 1013 |
| eBadObjType | 1014 |
| eNoCurrObj | 1015 |
| eSMParms | 1016 |
| eNotImplemented | 1017 |
| eServerLimit | 1018 |
| eServerFouled | 1019 |
| eOutBoundary | 1020 |
| eAccessConflict | 1021 |
| eObjNotEmpty | 1022 |
| eBadNameSpec | 1023 |
| eMTAQFull | 1024 |
| eMaxConfs | 1025 |
| eSentAlready | 1026 |
| eLinkDown | 1027 |
| eODBadName | 1028 |
| eNotAdmin | 1029 |
| eAccessDenied | 1030 |
| eAlreadyReg | 1031 |
| eCantSubscribe | 1032 |
| eConfNotUnique | 1033 |
| eNoModem | 1034 |
| eBadPassword | 1035 |
| eCantReply | 1036 |
| eMaxConfItems | 1037 |
| eODLockTimeout | 1038 |
| eFileSysErr | 1039 |
| eCantForward | 1040 |
| eNotAddressed | 1041 |
| eWriteProtect | 1042 |
| eNoResume | 1043 |
| eNoServer | 1044 |
| eDupServer | 1045 |
| eTelecomUser | 1046 |
| eBadUserClass | 1047 |
| eDanglingRef | 1048 |
| eDailyLimit | 1049 |
| eOrgDirDamaged | 1050 |
| eUserLoggedOff | 1051 |
| eOldGUI | 1052 |
| eLogonsDisabled | 1053 |
| eModemError | 1054 |
| eNoCTB | 1055 |
| eCTBConfig | 1056 |
| ePortInUse | 1057 |
| ePortMissing | 1058 |
| eWontChat | 1059 |
| eNoSuchConf | 1060 |
| eNoCarrier | 1061 |
| eEndOfThread | 1062 |
| eDupSerial | 1063 |
| eNoGateOption | 1064 |
| eNotPartialFile | 1065 |
| ePartialFile | 1066 |
| eNotAllIn | 1067 |
| eOpenNOP | 1068 |
| eNoDBExtension | 1069 |
| eVolNotAvail | 1070 |
| eCrossVolume | 1071 |
| eFCPConfig | 1072 |
| eNoIFOption | 1073 |
| eNoIPX | 1074 |
| eNoSocket | 1075 |
| eNoWinOption | 1076 |
| eNoPartSend | 1077 |
| eCantUnsend | 1078 |
| eDupForward | 1079 |
| eNameNotUnique | 1080 |
| eNotFound | 1081 |
| eNotSetupYet | 1082 |
| eScriptError | 1083 |
| eObjInUse | 1084 |
| eMacTCPDriver | 1085 |
| eOTTCPDriver | 1086 |
| eATDriver | 1087 |
| eOTATDriver | 1088 |
| eNoWorkOffline | 1089 |
| eNoLogins | 1090 |
| eDemoExpired | 1091 |
| eSessionMemory | 1092 |
| eDiskLimit | 1093 |
| eDiskWarn | 1094 |
| eAliasNotUnique | 1095 |
| eMustRead | 1096 |
| eNoCalendar | 1097 |
| eNoGoldOption | 1098 |
| ePasswordUsed | 1099 |
| eDontUse1100 | 1100 |
| ePasswordPoor | 1101 |
| ePasswordShort | 1102 |
| ePasswordExp | 1103 |
| eServerMemory | 1104 |
| eRetryDatagram | 1105 |
| eLicenseLimit | 1106 |
| eFileBlocked | 1107 |
| eRulesBlocked | 1108 |
| eBadEncrypt | 1109 |
| eRulesError | 1110 |
| eNeedTypedPW | 1111 |
| eBlockedApp | 1112 |
| eBlockedAppActn | 1113 |
| eNoFeature | 1114 |
| eNoArchiveServer | 1115 |
| eFCConObjBase | 1200 |
| eCOMem | 1201 |
| eCOnoFCPFiles | 1202 |
| eCOnoModemFiles | 1203 |
| eCOBadFCPConfig | 1204 |
| eCOTimeoutError | 1205 |
| eCOCantConnect | 1206 |
| eCOnoLoginReply | 1207 |
| eCObadSRQueue | 1208 |
| eCOFileCantOpen | 1209 |
| eCOFileXfrFail | 1210 |
| eCOPartialResum | 1211 |
| eCOBadReqMatch | 1212 |
| eCOBadFieldSize | 1213 |
| eCTBError | 1600 |
| eFCPSwitch | 1500 |
| eFCP2Switch | 1501 |
| eCLUISwitch | 1502 |
| eCLUISwitch2 | 1503 |
| eLinkDropped | 1504 |
| eODPageReset | 1505 |
| eDupObject | 1702 |
| eLastErr | 1999 |

### Initial seed
Used for cConnReq and sConnReq messages.
Always equal to `2171034441`.

## Objects
### Object IDs
| name | number |
| ---- | ------ |
| NULLOBJID | -1 |
| SESSIONDATAOBJID | -3 |
| REMADMINOBJID | -4 |
| NOTIFYCHANGEDOBJID | -5 |
| AUTHENTICATEOBJID | -6 |
| MEMFORMOBJID | -7 |
| INTERNETIMPORTOBJID | -8 |
| ENCRYPTIONOBJID | -9 |
| BACKLISTOBJID | -10 |
| TYPEDFOLDEROBJID | 1 |
| MAILBOXOBJID | 2 |
| RESUMEOBJID | 3 |
| CONFINFOOBJID | 4 |
| CLUIOBJID | 5 |
| PREFSOBJID | 6 |
| CHATOBJID | 7 |
| SYSINFOOBJID | 8 |
| SEARCHOBJID | 9 |

### Object types
| name | number |
| ---- | ------ |
| oDeskTop | 0 |
| oConference | 1 |
| oFolder | 2 |
| oConfItem | 3 |
| oMessage | 4 |
| oText | 5 |
| oFile | 6 |
| oDirList | 7 |
| oProfile | 8 |
| oUserList | 9 |
| oEFolder | 10 |
| oACL | 11 |
| oForm | 12 |
| oHistory | 13 |
| oChat | 14 |
| oInviteChat | 15 |
| oSysInfo | 16 |
| oFormDoc | 17 |
| oBackLink | 18 |
| oHitList | 19 |
| oMemForm | 20 |
| oUser | 21 |
| oDocument | 22 |
| oWorkForm | 23 |
| oMailBox | 24 |
| oPGFolder | 25 |
| oGWFolder | 26 |
| oMailListFolder | 27 |
| oDeskTopFolder | 28 |
| oArchive | 29 |
| oModelFolder | 30 |
| oPermStationery | 31 |
| oTempStationery | 32 |
| oGenDirSync | 33 |
| oGenSiteSync | 34 |
| oFCFile | 35 |
| oRemoteAdmin | 36 |

### Object data types
These are confusing, because they can be used as an object data type (such as when getting updates with cObjData) BUT ALSO ARE FIELD IDS.
| name | number |
| ---- | ------ |
| lFileInfo | 1 |
| lShortInfo | 2 |
| dEnvInfo | 3 |
| dToNames | 4 |
| dCopyNames | 5 |
| dBody | 6 |
| dAttach | 7 |
| dFromName | 8 |
| dSubject | 9 |
| odName | 10 |
| odClient | 11 |
| fDataFork | 12 |
| fResFork | 13 |
| dBCCNames | 14 |
| lURFlag | 15 |
| lAppFlag | 16 |
| lPlace | 17 |
| aHeader | 18 |
| aConfGroup | 19 |
| dFormData | 20 |
| dHistory | 21 |
| dChatMsg | 22 |
| dChatName | 23 |
| dEOF | 24 |
| dbEndOfHit | 24 |
| dInviteChat | 25 |
| spSessInfo | 26 |
| dFileInfo | 27 |
| dExtNames | 28 |
| aAccess | 29 |
| aMembers | 30 |
| hHitSummary | 31 |
| dStyleData | 32 |
| odClientUpdate | 33 |
| dFwdNames | 34 |
| dThreadData | 35 |
| dIntServData | 36 |
| dMsgOptions | 37 |
| dThreadID | 38 |
| dMessageID | 39 |
| dSysID | 40 |
| dLateFormData | 41 |
| dDocEditData | 42 |
| fFileHdr | 43 |
| lFormData | 44 |
| dSetSize | 45 |
| lExpiry | 46 |
| dAliasUpdate | 47 |
| lDelFlag | 48 |
| dFileCRC | 49 |
| dIndex | 50 |
| dEStatus | 51 |
| dGroupData | 52 |
| dViewData | 53 |
| dODNameFld | 54 |
| odFCNames | 55 |
| odFCNamesUpdate | 56 |
| dNameVal1 | 57 |
| dNameVal2 | 58 |
| dNameVal3 | 59 |
| dNameVal4 | 60 |
| dNameVal5 | 61 |
| dNameVal6 | 62 |
| dNameVal7 | 63 |
| dNameVal8 | 64 |
| dNameVal9 | 65 |
| dNameVal10 | 66 |
| dMediaFormData | 67 |
| dPersonLink | 68 |
| lReplyCRC | 69 |
| dAltBody | 70 |
| lWatchList | 71 |
| lWatch | 72 |
| lContHistory | 73 |
| dbFSSpec | 801 |
| dbUID | 802 |
| dbItem | 811 |
| dbTarget | 812 |
| dbTargName | 813 |
| FormIDBase | 1000 |
| fcpGUIOption | 1276 |
| dbProgress | 1900 |
| dObjName | 8010 |
| dURL | 8012 |
| dInFolder | 8018 |
| dAuthData | 8019 |
| lSyncID | 8020 |
| lLastSyncTime | 8040 |
| dbChatStyles | 8046 |
| dbChatText | 8047 |
| dbChatTimeStamp | 8048 |
| dbChatClientID | 8049 |
| dbChatCatchUp | 8050 |
| dbChatTranscript | 8051 |
| dbChatOpCode | 8052 |
| dbChatClientName | 8053 |
| dbChatModerated | 8054 |
| dbChatTimeStamps | 8055 |
| lItemView | 8056 |
| lModelAs | 8057 |
| dRADRelay | 8058 |
| dSMIMEMessageType | 8059 |
| dSMIMEPassword | 8060 |
| dSMIMECertificate | 8061 |
| dPresenceCounter | 8062 |
| dBodyItemField | 8063 |
| dItemFilter | 8064 |
| dThumbnail | 8065 |
| dAppID | 8066 |
| dAppItemType | 8067 |
| dWorkFlowState | 8068 |
| dBodyLockState | 8069 |
| dAttachPreview | 8070 |
| dExplorerFlag2 | 8071 |
| lReadOnly | 8073 |
| lAttachSummary | 8074 |
| dAliasPick | 8075 |
| lSyncID2 | 8076 |
| lSyncID3 | 8077 |
| lSyncID4 | 8078 |
| lSyncID5 | 8079 |
| dbSaveObject | 8080 |
| lItemFID | 8081 |
| lAuthor | 8082 |
| lItemOptionStr | 8083 |
| dSitePublishingURL | 8084 |
| dServerLoginTicket | 8085 |
| lQuickContact | 8086 |
| dAttachName | 8087 |
| lWebDAVProperties | 8088 |
| lWebDAVLockData | 8089 |
| lDocumentVersion | 8090 |
| lReplyObjType | 8091 |
| lLinkType | 8092 |
| lUploadDate | 8093 |
| lCreateDate | 8094 |
| lDataForkByteSize | 8095 |
| lResForkByteSize | 8096 |
| lUserRating | 8097 |
| lCreatorCID | 8098 |
| dBodyReadOnly | 8099 |
| lTag | 8100 |
| dVersionComment | 8101 |
| lWikiPageOptions | 8102 |
| lSearchResultReason | 8103 |
| dOpenAttrs | 8104 |
| dSearchHitCID | 8105 |
| dSearchPathRoot | 8106 |
| dSearchHitName | 8107 |
| dSearchHitCIDUC | 8108 |
| lLinkParentSubType | 8109 |
| lConfCID | 8110 |
| lXUID | 8113 |
| lParentXUID | 8114 |
| lRepository | 8115 |
| lRepositoryLocation | 8116 |
| lRepositorySignature | 8117 |
| lModDate | 8119 |
| dToolbarButtonBase | 13300 |
| dToolbarButtonIcon | 13300 |
| dToolbarButtonName | 13301 |
| dToolbarButtonURL | 13302 |
| dToolbarButtonCmd | 13303 |
| dToolbarButtonTip | 13304 |
| dToolbarButtonClass | 13305 |
| dToolbarButtonEnum | 13306 |
| dToolbarButtonAttr | 13307 |
| dToolbarNumParam | 13308 |
| dToolbarButtonWhere | 13309 |
| dToolbarButtonOptions | 13310 |
| dToolbarButtonHelpText | 13311 |
| dToolbarButtonMenuResID | 13312 |
| dToolbarButtonReserved6 | 13313 |
| dToolbarButtonReserved7 | 13314 |
| dToolbarAttributes | 13315 |
| dToolbarMAX_ATTRS | 13315 |
| dExplorerPropertiesFieldID | 13900 |
| dExplorerMainSplitFieldID | 13901 |
| dExplorerContentPaneSplitFieldID | 13902 |
| dExplorerNavPaneSplitFieldID | 13903 |
| dFLSummaryIconFieldID | 13904 |
| dFLSummaryStringFieldID | 13905 |
| dExplorerNavBarFieldID | 13906 |
| dExplorerDefaultSelectedItemFieldID | 13907 |
| dToolbarRezID | 13908 |
| dReadingPanePropertiesFieldID | 13909 |
| dbObjName | 8010 |
| dbISHeaders | 8014 |
| dbWindowTitle | 8000 |
| dbLastPart | 8001 |
| dbFillGauge | 8002 |
| dbClearForm | 8003 |
| dbPlaySound | 8004 |
| dbNameID | 8007 |
| dbFormTemplate | 8008 |
| dbFormAction | 8009 |
| dbFormOptions | 8011 |
| dbMessageBox | 8012 |
| dbBringToFront | 8013 |
| dbStatsEvent | 8015 |
| dbOpenURL | 8016 |
| dbRefresh | 8017 |
| dbIconID | 8018 |
| dbLoginResult | 8019 |
| dblSyncID | 8020 |
| dbCategories | 8021 |
| dbKeywords | 8022 |
| dbNextTopic | 8023 |
| dbPrevTopic | 8024 |
| dbContextObjType | 8025 |
| dbContextOffset | 8026 |
| dbFileType | 8027 |
| dbFileCreator | 8028 |
| dbAccRights | 8029 |
| dbFormTimeZone | 8030 |
| dbCalcdTimeZone | 8031 |
| dbEndTime | 8032 |
| dblLastSyncTime | 8040 |
| dbPalmShowInList | 8041 |
| dbPalmBusCard | 8042 |
| dbPalmPrivate | 8043 |
| dbForeColour | 8044 |
| dbBackColour | 8045 |
| dbParamStr | 8372 |
| dbParentStr | 8373 |
| dbPreUTF8CharSet | 8374 |
| dbClCID | 8300 |
| dbClPlatform | 8301 |
| dbClVersion | 8302 |
| dbClNetAddr | 8303 |
| dbClUserID | 8304 |
| dbClFirstName | 8305 |
| dbClInitial | 8306 |
| dbClLastName | 8307 |
| dbClFullName | 8308 |
| dbEndofReserve | 8400 |
| dbGreetingStatus | 8200 |
| dbFileName | 8005 |
| dbFileInfo | 8006 |
| fcpFirstName | 7001 |
| fcpInitials | 7002 |
| fcpLastName | 7003 |
| fcpPrimaryDomainName | 7004 |
| fcpLogoffTimer | 7005 |
| fcpSessionCID | 7006 |
| fcpUserTimeZone | 7007 |
| fcpServerTimeZone | 7008 |
| fcpCurrentDiskUsed | 7009 |
| fcpCurrentDiskQuota | 7010 |
| fcpSMBMACKey | 7011 |
| fcpUserID | 7012 |
| fcpWebDomainName | 7013 |
| fcpHomePageRoot | 7014 |
| fcpPRAGWOptions | 7015 |
| fcpSessionOptions | 7016 |
| fcpGatewaySiteID | 7017 |
| fcpPreviousCharSet | 7018 |
| fcpOnlineStatus | 7019 |
| fcpPersonalMessage | 7020 |
| fcpFeatures1 | 7021 |
| fcpFeatures2 | 7022 |
| fcpHTTPDigestKernel | 7023 |
| fcpPersonalMsgTime | 7024 |
| fcpMobileDeviceID | 7025 |
| fcpBFDomainName | 7026 |
| fcpClientMode | 7027 |
| fcpSysUsersTotal | 7028 |
| fcpSysUsersOnline | 7029 |
| fcpSysCommunities | 7030 |
| fcpSysCommPosts | 7031 |
| fcpContSubscribers | 7032 |
| fcpContPosts | 7033 |
| fcpContHits | 7034 |
| fcpMobileAppID | 7035 |
| fcpNotifyCapabilities | 7036 |
| fcpLoginDigest | 1002 |
| fcpLoginUserid | 1003 |
| fcpLoginPassword | 1004 |
| fcpMD5Challenge | 1006 |
| fcpLoginConnAddress | 1008 |
| fcpLoginTicket | 1009 |
| fcpLoginOptions | 1010 | 
| fcpLoginClusterId | 1018 |
| fcpPWSeed | 7038 |
| fcpUIExclusions | 7039 |
| lThreadIndex | 8111 |
| lFormID | 8121 |
| lFCXIMCIDs | 8129 |
| lFCXIMNames | 8130 |
| dInFolderMsgID | 8131 |
| lThreadCreatorCID | 8136 |
| dWebID | 8137 |
| dBuddyList | 8139 |

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

## Character encodings
The only really important one is UTF-8, but the rest are listed here for completeness.
| name | number |
| ---- | ------ |
| US-ASCII | 20005 |
| ISO-8859-1 | 1252 |
| UTF-8 | 65001 |
| UTF-16 | 1201 |
| UTF-16BE | 1201 |
| UTF-16LE | 1200 |
| ISO-8859-2 | 28592 |
| ISO-8859-3 | 28593 |
| ISO-8859-4 | 28594 |
| ISO-8859-5 | 28595 |
| ISO-8859-6 | 28596 |
| ISO-8859-7 | 28597 |
| ISO-8859-8 | 28598 |
| ISO-8859-9 | 1254 |
| ISO-8859-10 | 28600 |
| ISO-8859-11 | 28601 |
| ISO-8859-12 | 28602 |
| ISO-8859-13 | 28603 |
| ISO-8859-14 | 28604 |
| ISO-8859-15 | 28605 |
| ISO-8859-16 | 28606 |
| SHIFT_JIS | 932 |
| ISO-2022-JP | 20002 |
| EUC-KR | 20009 |
| ISO-2022-KR | 20003 |
| ISO-2022-CN | 20004 |
| ISO-2022-CN-EXT | 20012 |
| EUC-GB | 20013 |
| GB2312 | 936 |
| GB2312 | 10025 |
| GBK | 20014 |
| BIG5 | 950 |
| BIG5 | 10002 |
| ISO-2022-JP-1 | 20007 |
| ISO-2022-JP-2 | 20008 |
| UTF-7 | 65000 |
| UTF-2 | 65001 |
| UTF-1 | 65000 |
| UNICODE-1-1-UTF-7 | 65000 |
| UCS-2LE | 1200 |
| UCS-2BE | 1201 |
| UCS-2 | 1201 |
| UTF-32 | 12001 |
| UCS-4 | 12001 |
| UTF-32BE | 12001 |
| UCS-4BE | 12001 |
| UTF-32LE | 12000 |
| UCS-4LE | 12000 |
| Windows-1252 | 1252 |
| CP1252 | 1252 |
| X-CP1252 | 1252 |
| Windows-1250 | 1250 |
| X-CP1250 | 1250 |
| CP1250 | 1250 |
| Windows-1251 | 1251 |
| CP1251 | 1251 |
| X-CP1251 | 1251 |
| Windows-1253 | 1253 |
| CP1253 | 1253 |
| X-CP1253 | 1253 |
| Windows-1254 | 1254 |
| CP1254 | 1254 |
| X-CP1254 | 1254 |
| Windows-1255 | 1255 |
| CP-1255 | 1255 |
| X-CP1255 | 1255 |
| Windows-1256 | 1256 |
| CP1256 | 1256 |
| X-CP1256 | 1256 |
| Windows-1257 | 1257 |
| CP-1257 | 1257 |
| X-CP1257 | 1257 |
| Windows-1258 | 1258 |
| CP-1258 | 1258 |
| X-CP1258 | 1258 |
| KOI-8 | 878 |
| KOI8-R | 878 |
| KOI8-U | 878 |
| IBM878 | 878 |
| CP878 | 878 |
| X-CP878 | 878 |
| IBM855 | 855 |
| IBM866 | 866 |
| IBM864 | 864 |
| ASMO-708 | 708 |
| ASMO-449 | 709 |
| IBM737 | 737 |
| IBM851 | 851 |
| IBM869 | 869 |
| IBM862 | 862 |
| x-HebIBM | 862 |
| IBM857 | 857 |
| IBM874 | 874 |
| IBM775 | 775 |
| x-mac-ce | 10029 |
| IBM852 | 852 |
| x-mac-romanian | 10029 |
| x-mac-cyrillic | 10007 |
| x-mac-arabic | 10004 |
| x-mac-greek | 10006 |
| x-mac-hebrew | 10005 |
| x-mac-turkish | 10081 |
| x-mac-thai | 10021 |
| SHIFT_JIS | 10001 |
| ISO-8859-1 | 28591 |
| ISO-8859-6-i | 28596 |
| ISO-8859-6-e | 28596 |
| ISO-8859-8-i | 28598 |
| ISO-8859-8-e | 28598 |
| EUC-JP | 20001 |
| X-EUC-JP | 20001 |
| X-SJIS | 932 |
| X-SJIS | 10001 |
| ksc5601 | 949 |
| ksc5601 | 10003 |
| ISO-2022-GB | 20004 |
| HZ-GB-2312 | 20006 |

## Object class IDs
| name | number | extended |
| ---- | ------ | -------- |
| CBodyText | 48 | * |
| CBodyPicture | 49 |   |
| CBodyLink | 50 | * |
| CBodyLabel | 51 | * |
| CBodyRule | 52 |   |
| CBodyDocProps | 202 | * |
| CBodyQuote | 213 | * |
| CBodyPageBreak | 214 |   |
| CBodyParaRenumBreak | 217 | * |
| CBodyTable | 220 | * |
| CBodyCell | 221 | * |
| CBodySlideProps | 222 | * |

Anything else gets classified as a "CWeirdBodyObject".

## Style class IDs
| name | number |
| ---- | ------ |
| CTextStyle | 208 |
| CPictureStyle | 209 |
| CMarkerStyle | 210 |
| CRuleStyle | 211 |
| CPageBreakStyle | 212 |
| CTableStyle | 219 |

Anything else gets classified as a "CRogueStyle".

## Style attribute flags
These are masks used to test the individual bits of the (four byte, `uint32_t`) attributes field of a style.
| bitmask | name |
| ------- | ---- |
| 0b00000000000000000000000000000001 | Found Link |
| 0b00000000000000000000000000000010 | Quoted |
| 0b00000000000000000000000000000100 | Temp |
| 0b00000000000000000000000000001000 | MachGen |
| 0b00000000000000000000000000010000 | LitHTML |
| 0b00000000000000000000000000100000 | IMEConv |
| 0b00000000000000000000000001000000 | Hidden |
| 0b00000000000000000000000010000000 | ??? |
| 0b00000000000000000000000100000000 | Marker |
| 0b00000000000000000000001000000000 | UseBG |
| 0b00000000000000000000010000000000 | Link Obj |
| 0b00000000000000000001000000000000 | InTable |

### Extended classes
The logic for determining if a class is "extended" looks something like this:
```c
if (classId > 209) {
	if (classId < 211) {
		return true;
	} else {
		if (classId <= 212) {
			return false;
		} else {
			if (classId != 214) {
				return true;
			} else {
				return false;
			}
		}
	}
} else {
	if (classId >= 208) {
		return false;
	} else {
		if (classId == 49) {
			return false;
		} else {
			if (classId == 52) {
				return false;
			} else {
				return true;
			}
		}
	}
}
```

## Object data types (tDropDataType)
| name | number |
| ---- | ------ |
| dtNull | 0 |
| dtCFile | 1 |
| dtGenericFileInfo | 2 |
| dtCreateCFile | 3 |
| dtFCObject | 4 |
| dtNonUnicodeText | 5 |
| dtPCText | 6 |
| dtMacPICT | 7 |
| dtMacCICN | 8 |
| dtMacSnd | 9 |
| dtMSWDIB | 10 |
| dtMSWWAV | 11 |
| dtRTF | 12 |
| dtSAStyledText | 13 |
| dtMacStylText | 14 |
| dtURL | 15 |
| dtFCPoint | 16 |
| dtFCFields | 17 |
| dtFCForms | 18 |
| dtURLName | 19 |
| dtFileContents | 20 |
| dtFCBlobData | 21 |
| dtFCToolBarPlace | 22 |
| dtFCGif | 23 |
| dtPNG | 24 |
| dtUnixPixmap | 25 |
| dtUnixText | 26 |
| dtHTML | 27 |
| dtJPEG | 28 |
| tdFCuf | 29 |
| tdFCft | 30 |
| tdFCfs | 31 |
| dtFCSD | 32 |
| dtFCSTRS | 33 |
| dtFCSTRING | 34 |
| dtRTFFCML | 35 |
| dtXML | 36 |
| dtMP3 | 37 |
| dtATSUIStyles | 38 |
| dtText | 39 |
| dtUniTextNoBOM | 40 |
| dtUniText | 41 |

## Other
### Login method types
| name | number |
| ---- | ------ |
| fcpStandardLogin | 0 |
| fcpAPOPLogin | 1 |
| fcpCRAMMD5Login | 2 |
| fcpClientMD5Login | 3 |
| fcpTicketLogin | 4 |
| fcpSMB_NTLogin | 5 |
| fcpSMB_LMLogin | 6 |
| fcpDirSvcsLogin | 7 |
| fcpISSHA1Login | 8 |
| fcpSyncMLMD5Login | 9 |
| fcpISCRAMSHA1Login | 10 |
| fcpServerTicket | 11 |
| whatever mysterious thing firstclass web services uses | 14 |

### Logout warning types
| name | number |
| ---- | ------ |
| wInactivity | 0 |
| wDailyLimit | 1 |
| wForcedOff | 2 |
| wShutdown | 3 |
| wMaintenance | 4 |

## Control opcodes
Probably used with the cControl command...somehow.
| name | number |
| ---- | ------ |
| opAudit | 0 |
| opFastShut | 1 |
| opPoliteShut | 2 |
| opReloadSP | 3 |
| opRestart | 4 |
| opForceOff | 5 |
| opDisable | 6 |
| opEnable | 7 |
| opWriteSP | 8 |
| opResetModems | 9 |
| opStartGW | 10 |
| opSuspendMirrors | 11 |
| opResumeMirrors | 12 |
| opCommand | 13 |
| opStats | 14 |

## ObjOpenQuery parameters
| name | number |
| ---- | ------ |
| fcpObjID | 1000 |
| fcpIndex | 1001 |
| fcpReqID | 1002 |
| fcpPathComp | 1003 |
| fcpRezType | 1004 |
| fcpRezID | 1005 |
| fcpRezName | 1006 |
| fcpAltRezID | 1007 |
| fcpHomePage | 1008 |
| fcpAttachment | 1009 |
| fcpOpenAttrs | 1010 |
| fcpOpenOptions | 1011 |
| fcpVoiceGreeting | 1034 |
| fcpRezComp | 1035 |
| fcpTypedComp | 1036 |
| fcpObjTypePicker | 1037 |
| fcpSubType | 1038 |
| fcpLocationX | 1039 |
| fcpLocationY | 1040 |
| fcpSearchQuery | 1012 |
| fcpSearchAND | 1013 |
| fcpSearchOR | 1014 |
| fcpSearchNOT | 1015 |
| fcpSearchTo | 1016 |
| fcpSearchCopy | 1017 |
| fcpSearchBCC | 1018 |
| fcpSearchFrom | 1019 |
| fcpSearchSubject | 1020 |
| fcpSearchBody | 1021 |
| fcpSearchBeforeDate | 1022 |
| fcpSearchOnDate | 1023 |
| fcpSearchSinceDate | 1024 |
| fcpSearchSentBefore | 1025 |
| fcpSearchSentOn | 1026 |
| fcpSearchSentSince | 1027 |
| fcpSearchStatus | 1028 |
| fcpSearchLarger | 1029 |
| fcpSearchSmaller | 1030 |
| fcpSearchUID | 1031 |
| fcpSearchSysID | 1032 |
| fcpSearchObjName | 1033 |