/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  chenjia: {
    nested: {
      NativeField: {
        values: {
          TITLE: 1,
          AD_WORDS: 2,
          DESC: 3,
          IMGS: 4,
          ICON: 5,
          CLICK_URL: 6,
          DOWNLOAD_URL: 7,
          DEEP_URL: 8
        }
      },
      BidRequest: {
        fields: {
          version: {
            type: "uint32",
            id: 1
          },
          requestId: {
            type: "string",
            id: 2
          },
          test: {
            type: "bool",
            id: 3,
            options: {
              "default": false
            }
          },
          sspToken: {
            type: "string",
            id: 4
          },
          ip: {
            type: "string",
            id: 5
          },
          userAgent: {
            type: "string",
            id: 6
          },
          language: {
            type: "string",
            id: 7
          },
          category: {
            type: "uint32",
            id: 9
          },
          excludedCategory: {
            type: "uint32",
            id: 10
          },
          excludeDomain: {
            type: "string",
            id: 11
          },
          imp: {
            type: "Imp",
            id: 12
          },
          app: {
            type: "App",
            id: 13
          }
        },
        nested: {
          Imp: {
            fields: {
              adId: {
                type: "string",
                id: 2
              },
              size: {
                type: "string",
                id: 3
              },
              floorPrice: {
                type: "uint32",
                id: 4
              },
              viewType: {
                type: "uint32",
                id: 5
              },
              viewScreen: {
                type: "ViewScreen",
                id: 7,
                options: {
                  "default": "SCREEN_NA"
                }
              },
              video: {
                type: "Video",
                id: 8
              },
              native: {
                type: "Native",
                id: 9
              }
            },
            nested: {
              ViewScreen: {
                values: {
                  SCREEN_NA: 0,
                  SCREEN_FIRST: 1,
                  SCREEN_SECOND: 2,
                  SCREEN_THIRD: 3,
                  SCREEN_FOURTH: 4,
                  SCREEN_FIFTH: 5,
                  SCREEN_OTHER: 6
                }
              },
              Video: {
                fields: {
                  videoadStartDelay: {
                    type: "uint32",
                    id: 1
                  },
                  videoadSectionStartDelay: {
                    type: "uint32",
                    id: 2
                  },
                  minAdDuration: {
                    type: "uint32",
                    id: 3
                  },
                  maxAdDuration: {
                    type: "uint32",
                    id: 4
                  }
                }
              },
              Native: {
                fields: {
                  fields: {
                    type: "NativeField",
                    id: 1
                  },
                  titleMax: {
                    type: "uint32",
                    id: 2
                  },
                  descMax: {
                    type: "uint32",
                    id: 3
                  },
                  imageWidth: {
                    type: "uint32",
                    id: 4
                  },
                  imageHeight: {
                    type: "uint32",
                    id: 5
                  },
                  imageNums: {
                    type: "uint32",
                    id: 6
                  },
                  templateId: {
                    type: "string",
                    id: 7
                  }
                }
              }
            }
          },
          App: {
            fields: {
              appName: {
                type: "string",
                id: 1
              },
              packageName: {
                type: "string",
                id: 2
              },
              device: {
                type: "Device",
                id: 3
              }
            },
            nested: {
              Device: {
                fields: {
                  os: {
                    type: "string",
                    id: 1
                  },
                  osv: {
                    type: "string",
                    id: 2
                  },
                  deviceType: {
                    type: "string",
                    id: 3
                  },
                  orientation: {
                    type: "uint32",
                    id: 4
                  },
                  brand: {
                    type: "string",
                    id: 5
                  },
                  hwv: {
                    type: "string",
                    id: 6
                  },
                  operator: {
                    type: "uint32",
                    id: 7
                  },
                  network: {
                    type: "uint32",
                    id: 8
                  },
                  h: {
                    type: "uint32",
                    id: 9
                  },
                  w: {
                    type: "uint32",
                    id: 10
                  },
                  deviceSize: {
                    type: "string",
                    id: 11
                  },
                  lon: {
                    type: "string",
                    id: 12
                  },
                  lat: {
                    type: "string",
                    id: 13
                  },
                  ip: {
                    type: "string",
                    id: 14
                  },
                  ipv6: {
                    type: "string",
                    id: 15
                  },
                  deviceId: {
                    type: "string",
                    id: 16
                  },
                  mac: {
                    type: "string",
                    id: 17
                  },
                  androidId: {
                    type: "string",
                    id: 18
                  },
                  oaid: {
                    type: "string",
                    id: 19
                  },
                  pin: {
                    type: "string",
                    id: 20
                  }
                }
              }
            }
          }
        }
      },
      BidResponse: {
        fields: {
          version: {
            type: "uint32",
            id: 1
          },
          bid: {
            type: "string",
            id: 2
          },
          requestId: {
            type: "string",
            id: 3
          },
          dspId: {
            type: "string",
            id: 4
          },
          ads: {
            type: "Ads",
            id: 5
          }
        },
        nested: {
          Ads: {
            fields: {
              adId: {
                type: "string",
                id: 1
              },
              maxCpmPrice: {
                type: "uint32",
                id: 2
              },
              creativeId: {
                type: "string",
                id: 3
              },
              ldp: {
                type: "string",
                id: 6
              },
              imgurl: {
                type: "string",
                id: 7
              },
              attr: {
                type: "Attr",
                id: 9
              },
              showUrl: {
                type: "string",
                id: 10
              },
              clickUrl: {
                type: "string",
                id: 11
              },
              video: {
                type: "Video",
                id: 13
              }
            },
            nested: {
              Attr: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  value: {
                    type: "string",
                    id: 2
                  }
                }
              },
              Video: {
                fields: {
                  duration: {
                    type: "uint32",
                    id: 1
                  },
                  url: {
                    type: "string",
                    id: 2
                  },
                  eventStart: {
                    type: "string",
                    id: 3
                  },
                  eventMidpoint: {
                    type: "string",
                    id: 4
                  },
                  eventComplete: {
                    type: "string",
                    id: 5
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});

module.exports = $root;
