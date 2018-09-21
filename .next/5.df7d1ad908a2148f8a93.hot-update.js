webpackHotUpdate(5,{

/***/ "./components/Home/NewDay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewDay; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__("./api/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__variables_general__ = __webpack_require__("./variables/general.js");
var _jsxFileName = "G:\\Users\\SANG\\Documents\\GitHub\\Movies_Offical\\components\\Home\\NewDay.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var NewDay =
/*#__PURE__*/
function (_Component) {
  _inherits(NewDay, _Component);

  function NewDay(props) {
    var _this;

    _classCallCheck(this, NewDay);

    _this = _possibleConstructorReturn(this, (NewDay.__proto__ || Object.getPrototypeOf(NewDay)).call(this, props));
    _this.state = {
      data: []
    };
    return _this;
  }

  _createClass(NewDay, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      $(".adonis-carousel").each(function () {
        adonisObj.carousel($(this));
      });
    } // async componentDidMount() {
    //     const res = fetchData._getData_9()
    //     const res1 = fetchData._getData_10()
    //     const res2 = fetchData._getData_11()
    //     const res3 = fetchData._getData_9()
    //     const res4 = fetchData._getData_10()
    //     const res5 = fetchData._getData_11()
    //     const res6 = fetchData._getData_9()
    //     const res7 = fetchData._getData_10()
    //     const res8 = fetchData._getData_11()
    //     const res9 = fetchData._getData_9()
    //     let result = await Promise.all([res, res1, res2, res3, res4,
    //         res5, res6, res7, res8, res9])
    //     this.setState({ data: result })
    // }

  }, {
    key: "render",
    value: function render() {
      var data = this.props.data;

      if (!data || data.length === 0) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, " Loaing fail ...");
      } else {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "d-flex",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "title-box",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
          "class": "sub-title inactive-color",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, "Today"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
          "class": "title h3-md",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }, "C\xF3 th\u1EC3 b\u1EA1n th\xEDch ?")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "button-right ml-auto ml-auto d-flex align-items-end",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          href: "#",
          "class": "mb-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, "Xem th\xEAm", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          "class": "adonis-icon pl-1 icon-arrow icon-1x",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("use", {
          xlinkHref: "#icon-see-all-arrow-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        })))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "adonis-carousel music-img-box-cont-sm",
          "data-animation-item": ".item",
          "data-dots": "yes",
          "data-auto-width": "yes",
          "data-responsive-width": "0:50%|400:33.33%|600:25%|800:20%|1000:16.667%|1200:14.285%|1400:12.5%|1600:10%",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "gutter-30",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "owl-carousel owl-theme-adonis",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, !data[0] || data[0].length === 0 ? "" : data[0].map(function (prop, key) {
          if (key === 0) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              key: key,
              "class": "music-img-box mb-e-30 mb-e-md-40",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 63
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "img-box box-rounded-md img-box-md",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 64
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
              style: {
                height: 145
              },
              "class": "retina",
              src: __WEBPACK_IMPORTED_MODULE_2__variables_general__["a" /* url */] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-1@2x.jpg",
              alt: "",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 65
              }
            }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "hover-state",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 66
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-bottom-left pl-e-15 pb-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer play-btn-dark round-btn",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 68
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
              "class": "play-icon",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 68
              }
            }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-top-right pr-e-15 pt-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 70
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer dropdown-menu-toggle",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "adonis-icon icon-4x",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("use", {
              xlinkHref: "#icon-horizontal-dots",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              }
            }))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
              "class": "title",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 75
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 75
              }
            }, "Vestibulum nibh lorem ipsum")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
              "class": "sub-title category",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 76
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 76
              }
            }, "Adonis Music Pop")));
          } else {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              key: key,
              "class": "music-img-box",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 81
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "img-box box-rounded-md img-box-md",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 82
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
              style: {
                height: 145
              },
              "class": "retina",
              src: __WEBPACK_IMPORTED_MODULE_2__variables_general__["a" /* url */] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-11@2x.jpg",
              alt: "",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 83
              }
            }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "hover-state",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 84
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-bottom-left pl-e-15 pb-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 85
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer play-btn-dark round-btn",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 86
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
              "class": "play-icon",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 86
              }
            }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-top-right pr-e-15 pt-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 88
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer dropdown-menu-toggle",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 89
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "adonis-icon icon-4x",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 89
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 89
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("use", {
              xlinkHref: "#icon-horizontal-dots",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 89
              }
            }))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
              "class": "title",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 93
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 93
              }
            }, "Vestibulum nibh lorem ipsum")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
              "class": "sub-title category",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 94
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 94
              }
            }, "Adonis Music Pop")));
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        }, !data[1] || data[1].length === 0 ? "" : data[1].map(function (prop, key) {
          if (key === 0) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              key: key,
              "class": "music-img-box mb-e-30 mb-e-md-40",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 105
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "img-box box-rounded-md img-box-md",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 106
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
              style: {
                height: 145
              },
              "class": "retina",
              src: __WEBPACK_IMPORTED_MODULE_2__variables_general__["a" /* url */] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-1@2x.jpg",
              alt: "",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 107
              }
            }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "hover-state",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 108
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-bottom-left pl-e-15 pb-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 109
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer play-btn-dark round-btn",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
              "class": "play-icon",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              }
            }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-top-right pr-e-15 pt-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 112
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer dropdown-menu-toggle",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 113
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "adonis-icon icon-4x",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 113
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 113
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("use", {
              xlinkHref: "#icon-horizontal-dots",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 113
              }
            }))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
              "class": "title",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 117
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 117
              }
            }, "Vestibulum nibh lorem ipsum")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
              "class": "sub-title category",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 118
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 118
              }
            }, "Adonis Music Pop")));
          } else {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              key: key,
              "class": "music-img-box",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 123
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "img-box box-rounded-md img-box-md",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 124
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
              style: {
                height: 145
              },
              "class": "retina",
              src: __WEBPACK_IMPORTED_MODULE_2__variables_general__["a" /* url */] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-11@2x.jpg",
              alt: "",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 125
              }
            }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "hover-state",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 126
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-bottom-left pl-e-15 pb-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 127
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer play-btn-dark round-btn",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 128
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
              "class": "play-icon",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 128
              }
            }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-top-right pr-e-15 pt-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 130
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer dropdown-menu-toggle",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 131
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "adonis-icon icon-4x",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 131
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 131
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("use", {
              xlinkHref: "#icon-horizontal-dots",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 131
              }
            }))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
              "class": "title",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 135
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 135
              }
            }, "Vestibulum nibh lorem ipsum")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
              "class": "sub-title category",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 136
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 136
              }
            }, "Adonis Music Pop")));
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          }
        }, !data[2] || data[2].length === 0 ? "" : data[2].map(function (prop, key) {
          if (key === 0) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              key: key,
              "class": "music-img-box mb-e-30 mb-e-md-40",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 146
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "img-box box-rounded-md img-box-md",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 147
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
              style: {
                height: 145
              },
              "class": "retina",
              src: __WEBPACK_IMPORTED_MODULE_2__variables_general__["a" /* url */] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-1@2x.jpg",
              alt: "",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 148
              }
            }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "hover-state",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 149
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-bottom-left pl-e-15 pb-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 150
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer play-btn-dark round-btn",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 151
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
              "class": "play-icon",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 151
              }
            }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-top-right pr-e-15 pt-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 153
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer dropdown-menu-toggle",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 154
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "adonis-icon icon-4x",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 154
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 154
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("use", {
              xlinkHref: "#icon-horizontal-dots",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 154
              }
            }))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
              "class": "title",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 158
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 158
              }
            }, "Vestibulum nibh lorem ipsum")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
              "class": "sub-title category",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 159
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 159
              }
            }, "Adonis Music Pop")));
          } else {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              key: key,
              "class": "music-img-box",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 164
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "img-box box-rounded-md img-box-md",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 165
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
              style: {
                height: 145
              },
              "class": "retina",
              src: __WEBPACK_IMPORTED_MODULE_2__variables_general__["a" /* url */] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-11@2x.jpg",
              alt: "",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 166
              }
            }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "hover-state",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 167
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-bottom-left pl-e-15 pb-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 168
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer play-btn-dark round-btn",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 169
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
              "class": "play-icon",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 169
              }
            }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-top-right pr-e-15 pt-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 171
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer dropdown-menu-toggle",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 172
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "adonis-icon icon-4x",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 172
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 172
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("use", {
              xlinkHref: "#icon-horizontal-dots",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 172
              }
            }))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
              "class": "title",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 176
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 176
              }
            }, "Vestibulum nibh lorem ipsum")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
              "class": "sub-title category",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 177
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 177
              }
            }, "Adonis Music Pop")));
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          }
        }, !data[3] || data[3].length === 0 ? "" : data[3].map(function (prop, key) {
          if (key === 0) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              key: key,
              "class": "music-img-box mb-e-30 mb-e-md-40",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 187
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "img-box box-rounded-md img-box-md",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 188
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
              style: {
                height: 145
              },
              "class": "retina",
              src: __WEBPACK_IMPORTED_MODULE_2__variables_general__["a" /* url */] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-1@2x.jpg",
              alt: "",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 189
              }
            }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "hover-state",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 190
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-bottom-left pl-e-15 pb-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 191
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer play-btn-dark round-btn",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 192
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
              "class": "play-icon",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 192
              }
            }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-top-right pr-e-15 pt-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 194
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer dropdown-menu-toggle",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 195
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "adonis-icon icon-4x",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 195
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 195
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("use", {
              xlinkHref: "#icon-horizontal-dots",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 195
              }
            }))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
              "class": "title",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 199
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 199
              }
            }, "Vestibulum nibh lorem ipsum")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
              "class": "sub-title category",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 200
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 200
              }
            }, "Adonis Music Pop")));
          } else {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              key: key,
              "class": "music-img-box",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 205
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "img-box box-rounded-md img-box-md",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 206
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
              style: {
                height: 145
              },
              "class": "retina",
              src: __WEBPACK_IMPORTED_MODULE_2__variables_general__["a" /* url */] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-11@2x.jpg",
              alt: "",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 207
              }
            }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "hover-state",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 208
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-bottom-left pl-e-15 pb-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 209
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer play-btn-dark round-btn",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 210
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
              "class": "play-icon",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 210
              }
            }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-top-right pr-e-15 pt-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 212
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer dropdown-menu-toggle",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 213
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "adonis-icon icon-4x",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 213
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 213
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("use", {
              xlinkHref: "#icon-horizontal-dots",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 213
              }
            }))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
              "class": "title",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 217
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 217
              }
            }, "Vestibulum nibh lorem ipsum")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
              "class": "sub-title category",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 218
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 218
              }
            }, "Adonis Music Pop")));
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224
          }
        }, !data[4] || data[4].length === 0 ? "" : data[4].map(function (prop, key) {
          if (key === 0) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              key: key,
              "class": "music-img-box mb-e-30 mb-e-md-40",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 228
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "img-box box-rounded-md img-box-md",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 229
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
              style: {
                height: 145
              },
              "class": "retina",
              src: __WEBPACK_IMPORTED_MODULE_2__variables_general__["a" /* url */] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-1@2x.jpg",
              alt: "",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 230
              }
            }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "hover-state",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 231
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-bottom-left pl-e-15 pb-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 232
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer play-btn-dark round-btn",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 233
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
              "class": "play-icon",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 233
              }
            }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-top-right pr-e-15 pt-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 235
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer dropdown-menu-toggle",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 236
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "adonis-icon icon-4x",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 236
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 236
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("use", {
              xlinkHref: "#icon-horizontal-dots",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 236
              }
            }))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
              "class": "title",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 240
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 240
              }
            }, "Vestibulum nibh lorem ipsum")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
              "class": "sub-title category",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 241
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 241
              }
            }, "Adonis Music Pop")));
          } else {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              key: key,
              "class": "music-img-box",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 246
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "img-box box-rounded-md img-box-md",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 247
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
              style: {
                height: 145
              },
              "class": "retina",
              src: __WEBPACK_IMPORTED_MODULE_2__variables_general__["a" /* url */] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-11@2x.jpg",
              alt: "",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 248
              }
            }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "hover-state",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 249
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-bottom-left pl-e-15 pb-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 250
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer play-btn-dark round-btn",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 251
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
              "class": "play-icon",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 251
              }
            }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-top-right pr-e-15 pt-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 253
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer dropdown-menu-toggle",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 254
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "adonis-icon icon-4x",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 254
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 254
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("use", {
              xlinkHref: "#icon-horizontal-dots",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 254
              }
            }))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
              "class": "title",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 258
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 258
              }
            }, "Vestibulum nibh lorem ipsum")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
              "class": "sub-title category",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 259
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 259
              }
            }, "Adonis Music Pop")));
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265
          }
        }, !data[5] || data[5].length === 0 ? "" : data[5].map(function (prop, key) {
          if (key === 0) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              key: key,
              "class": "music-img-box mb-e-30 mb-e-md-40",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 269
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "img-box box-rounded-md img-box-md",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 270
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
              style: {
                height: 145
              },
              "class": "retina",
              src: __WEBPACK_IMPORTED_MODULE_2__variables_general__["a" /* url */] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-1@2x.jpg",
              alt: "",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 271
              }
            }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "hover-state",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 272
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-bottom-left pl-e-15 pb-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 273
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer play-btn-dark round-btn",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 274
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
              "class": "play-icon",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 274
              }
            }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-top-right pr-e-15 pt-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 276
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer dropdown-menu-toggle",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 277
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "adonis-icon icon-4x",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 277
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 277
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("use", {
              xlinkHref: "#icon-horizontal-dots",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 277
              }
            }))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
              "class": "title",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 281
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 281
              }
            }, "Vestibulum nibh lorem ipsum")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
              "class": "sub-title category",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 282
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 282
              }
            }, "Adonis Music Pop")));
          } else {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              key: key,
              "class": "music-img-box",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 287
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "img-box box-rounded-md img-box-md",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 288
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
              style: {
                height: 145
              },
              "class": "retina",
              src: __WEBPACK_IMPORTED_MODULE_2__variables_general__["a" /* url */] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-11@2x.jpg",
              alt: "",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 289
              }
            }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "hover-state",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 290
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-bottom-left pl-e-15 pb-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 291
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer play-btn-dark round-btn",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 292
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
              "class": "play-icon",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 292
              }
            }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-top-right pr-e-15 pt-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 294
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer dropdown-menu-toggle",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 295
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "adonis-icon icon-4x",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 295
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 295
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("use", {
              xlinkHref: "#icon-horizontal-dots",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 295
              }
            }))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
              "class": "title",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 299
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 299
              }
            }, "Vestibulum nibh lorem ipsum")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
              "class": "sub-title category",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 300
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 300
              }
            }, "Adonis Music Pop")));
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 306
          }
        }, !data[6] || data[6].length === 0 ? "" : data[6].map(function (prop, key) {
          if (key === 0) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              key: key,
              "class": "music-img-box mb-e-30 mb-e-md-40",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 310
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "img-box box-rounded-md img-box-md",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 311
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
              style: {
                height: 145
              },
              "class": "retina",
              src: __WEBPACK_IMPORTED_MODULE_2__variables_general__["a" /* url */] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-1@2x.jpg",
              alt: "",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 312
              }
            }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "hover-state",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 313
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-bottom-left pl-e-15 pb-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 314
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer play-btn-dark round-btn",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 315
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
              "class": "play-icon",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 315
              }
            }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-top-right pr-e-15 pt-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 317
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer dropdown-menu-toggle",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 318
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "adonis-icon icon-4x",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 318
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 318
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("use", {
              xlinkHref: "#icon-horizontal-dots",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 318
              }
            }))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
              "class": "title",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 322
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 322
              }
            }, "Vestibulum nibh lorem ipsum")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
              "class": "sub-title category",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 323
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 323
              }
            }, "Adonis Music Pop")));
          } else {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              key: key,
              "class": "music-img-box",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 328
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "img-box box-rounded-md img-box-md",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 329
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
              style: {
                height: 145
              },
              "class": "retina",
              src: __WEBPACK_IMPORTED_MODULE_2__variables_general__["a" /* url */] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-11@2x.jpg",
              alt: "",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 330
              }
            }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "hover-state",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 331
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-bottom-left pl-e-15 pb-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 332
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer play-btn-dark round-btn",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 333
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
              "class": "play-icon",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 333
              }
            }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-top-right pr-e-15 pt-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 335
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer dropdown-menu-toggle",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 336
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "adonis-icon icon-4x",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 336
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 336
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("use", {
              xlinkHref: "#icon-horizontal-dots",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 336
              }
            }))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
              "class": "title",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 340
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 340
              }
            }, "Vestibulum nibh lorem ipsum")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
              "class": "sub-title category",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 341
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 341
              }
            }, "Adonis Music Pop")));
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 347
          }
        }, !data[7] || data[7].length === 0 ? "" : data[7].map(function (prop, key) {
          if (key === 0) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              key: key,
              "class": "music-img-box mb-e-30 mb-e-md-40",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 351
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "img-box box-rounded-md img-box-md",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 352
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
              style: {
                height: 145
              },
              "class": "retina",
              src: __WEBPACK_IMPORTED_MODULE_2__variables_general__["a" /* url */] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-1@2x.jpg",
              alt: "",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 353
              }
            }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "hover-state",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 354
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-bottom-left pl-e-15 pb-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 355
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer play-btn-dark round-btn",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 356
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
              "class": "play-icon",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 356
              }
            }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-top-right pr-e-15 pt-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 358
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer dropdown-menu-toggle",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 359
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "adonis-icon icon-4x",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 359
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 359
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("use", {
              xlinkHref: "#icon-horizontal-dots",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 359
              }
            }))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
              "class": "title",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 363
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 363
              }
            }, "Vestibulum nibh lorem ipsum")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
              "class": "sub-title category",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 364
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 364
              }
            }, "Adonis Music Pop")));
          } else {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              key: key,
              "class": "music-img-box",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 369
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "img-box box-rounded-md img-box-md",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 370
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
              style: {
                height: 145
              },
              "class": "retina",
              src: __WEBPACK_IMPORTED_MODULE_2__variables_general__["a" /* url */] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-11@2x.jpg",
              alt: "",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 371
              }
            }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "hover-state",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 372
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-bottom-left pl-e-15 pb-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 373
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer play-btn-dark round-btn",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 374
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
              "class": "play-icon",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 374
              }
            }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-top-right pr-e-15 pt-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 376
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer dropdown-menu-toggle",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 377
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "adonis-icon icon-4x",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 377
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 377
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("use", {
              xlinkHref: "#icon-horizontal-dots",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 377
              }
            }))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
              "class": "title",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 381
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 381
              }
            }, "Vestibulum nibh lorem ipsum")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
              "class": "sub-title category",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 382
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 382
              }
            }, "Adonis Music Pop")));
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 388
          }
        }, !data[8] || data[8].length === 0 ? "" : data[8].map(function (prop, key) {
          if (key === 0) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              key: key,
              "class": "music-img-box mb-e-30 mb-e-md-40",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 392
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "img-box box-rounded-md img-box-md",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 393
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
              style: {
                height: 145
              },
              "class": "retina",
              src: __WEBPACK_IMPORTED_MODULE_2__variables_general__["a" /* url */] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-1@2x.jpg",
              alt: "",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 394
              }
            }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "hover-state",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 395
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-bottom-left pl-e-15 pb-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 396
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer play-btn-dark round-btn",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 397
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
              "class": "play-icon",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 397
              }
            }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-top-right pr-e-15 pt-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 399
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer dropdown-menu-toggle",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 400
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "adonis-icon icon-4x",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 400
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 400
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("use", {
              xlinkHref: "#icon-horizontal-dots",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 400
              }
            }))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
              "class": "title",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 404
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 404
              }
            }, "Vestibulum nibh lorem ipsum")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
              "class": "sub-title category",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 405
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 405
              }
            }, "Adonis Music Pop")));
          } else {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              key: key,
              "class": "music-img-box",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 410
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "img-box box-rounded-md img-box-md",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 411
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
              style: {
                height: 145
              },
              "class": "retina",
              src: __WEBPACK_IMPORTED_MODULE_2__variables_general__["a" /* url */] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-11@2x.jpg",
              alt: "",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 412
              }
            }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "hover-state",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 413
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-bottom-left pl-e-15 pb-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 414
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer play-btn-dark round-btn",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 415
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
              "class": "play-icon",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 415
              }
            }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-top-right pr-e-15 pt-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 417
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer dropdown-menu-toggle",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 418
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "adonis-icon icon-4x",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 418
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 418
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("use", {
              xlinkHref: "#icon-horizontal-dots",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 418
              }
            }))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
              "class": "title",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 422
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 422
              }
            }, "Vestibulum nibh lorem ipsum")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
              "class": "sub-title category",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 423
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 423
              }
            }, "Adonis Music Pop")));
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 429
          }
        }, !data[9] || data[9].length === 0 ? "" : data[9].map(function (prop, key) {
          if (key === 0) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              key: key,
              "class": "music-img-box mb-e-30 mb-e-md-40",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 433
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "img-box box-rounded-md img-box-md",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 434
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
              style: {
                height: 145
              },
              "class": "retina",
              src: __WEBPACK_IMPORTED_MODULE_2__variables_general__["a" /* url */] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-1@2x.jpg",
              alt: "",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 435
              }
            }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "hover-state",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 436
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-bottom-left pl-e-15 pb-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 437
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer play-btn-dark round-btn",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 438
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
              "class": "play-icon",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 438
              }
            }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-top-right pr-e-15 pt-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 440
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer dropdown-menu-toggle",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 441
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "adonis-icon icon-4x",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 441
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 441
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("use", {
              xlinkHref: "#icon-horizontal-dots",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 441
              }
            }))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
              "class": "title",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 445
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 445
              }
            }, "Vestibulum nibh lorem ipsum")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
              "class": "sub-title category",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 446
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 446
              }
            }, "Adonis Music Pop")));
          } else {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              key: key,
              "class": "music-img-box",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 451
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "img-box box-rounded-md img-box-md",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 452
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
              style: {
                height: 145
              },
              "class": "retina",
              src: __WEBPACK_IMPORTED_MODULE_2__variables_general__["a" /* url */] + prop.imageMain || "",
              "data-2x": "/static/assets/images/playlists/playlist-11@2x.jpg",
              alt: "",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 453
              }
            }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "hover-state",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 454
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-bottom-left pl-e-15 pb-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 455
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer play-btn-dark round-btn",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 456
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
              "class": "play-icon",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 456
              }
            }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "absolute-top-right pr-e-15 pt-e-15",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 458
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer dropdown-menu-toggle",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 459
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "adonis-icon icon-4x",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 459
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 459
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("use", {
              xlinkHref: "#icon-horizontal-dots",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 459
              }
            }))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
              "class": "title",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 463
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 463
              }
            }, "Vestibulum nibh lorem ipsum")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
              "class": "sub-title category",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 464
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 464
              }
            }, "Adonis Music Pop")));
          }
        }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "pt-e-20 pt-e-lg-40",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 474
          }
        }));
      }
    }
  }]);

  return NewDay;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ })

})
//# sourceMappingURL=5.df7d1ad908a2148f8a93.hot-update.js.map