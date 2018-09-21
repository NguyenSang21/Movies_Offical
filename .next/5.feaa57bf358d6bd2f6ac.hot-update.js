webpackHotUpdate(5,{

/***/ "./components/Home/TopWeek.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopWeek; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__("./api/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__variables_general__ = __webpack_require__("./variables/general.js");
var _jsxFileName = "G:\\Users\\SANG\\Documents\\GitHub\\Movies_Offical\\components\\Home\\TopWeek.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var TopWeek =
/*#__PURE__*/
function (_Component) {
  _inherits(TopWeek, _Component);

  function TopWeek(props) {
    var _this;

    _classCallCheck(this, TopWeek);

    _this = _possibleConstructorReturn(this, (TopWeek.__proto__ || Object.getPrototypeOf(TopWeek)).call(this, props));
    _this.state = {
      data: []
    };
    return _this;
  }

  _createClass(TopWeek, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      $(".adonis-carousel").each(function () {
        adonisObj.carousel($(this));
      });
    } // async componentDidMount() {
    //     const result = await fetchData._getData_1()
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
            lineNumber: 27
          }
        }, "Loading fail...");
      } else {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "col-xxl-7 col-lg-8",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "d-flex flex-row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "title-box",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
          "class": "sub-title inactive-color",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        }, "Top Week"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
          "class": "title h3-md",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }, "Top tu\u1EA7n c\xF3 g\xEC hot ?")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "button-right ml-auto ml-auto mt-auto mb-4 d-flex",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, "See all ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          "class": "adonis-icon pl-1 icon-arrow icon-1x",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("use", {
          xlinkHref: "#icon-see-all-arrow-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        })))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "adonis-carousel music-img-box-cont-sm ",
          "data-animation-item": ".item",
          "data-auto-width": "yes",
          "data-loop": "no",
          "data-dots": "yes",
          "data-responsive-width": "0:100%|600:50%|900:33.33%|1200:25%",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "gutter-30",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "owl-carousel owl-theme-adonis",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }, !data || data.length === 0 ? "" : data.map(function (prop, key) {
          if (key < 5) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              key: key,
              "class": "img-box-horizontal music-img-box h-g-bg h-d-shadow",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "img-box img-box-sm box-rounded-sm",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 51
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
              style: {
                height: 50
              },
              src: __WEBPACK_IMPORTED_MODULE_2__variables_general__["a" /* url */] + prop.imageMain || "",
              alt: "",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              }
            })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "des",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 54
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
              "class": "title fs-2",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              }
            }, prop.title || "")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
              "class": "sub-title",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              }
            }, "Rachel Platten"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "hover-state d-flex justify-content-between align-items-center",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer play-btn-dark box-rounded-sm",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 59
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
              "class": "play-icon",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 59
              }
            })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "d-flex align-items-center",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "adonis-icon text-light pointer mr-2 icon-2x",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("use", {
              xlinkHref: "#icon-heart-blank",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              }
            }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer dropdown-menu-toggle",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 62
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "icon-dot-nav-horizontal text-light",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 62
              }
            })))));
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        }, !data || data.length === 0 ? "" : data.map(function (prop, key) {
          if (key >= 5 && key < 10) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              key: key,
              "class": "img-box-horizontal music-img-box h-g-bg h-d-shadow",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 74
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "img-box img-box-sm box-rounded-sm",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 75
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
              style: {
                height: 50
              },
              src: __WEBPACK_IMPORTED_MODULE_2__variables_general__["a" /* url */] + prop.imageMain || "",
              alt: "",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 76
              }
            })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "des",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 78
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
              "class": "title fs-2",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 79
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 79
              }
            }, prop.title || "")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
              "class": "sub-title",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 80
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 80
              }
            }, "Rachel Platten"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "hover-state d-flex justify-content-between align-items-center",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 82
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer play-btn-dark box-rounded-sm",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 83
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
              "class": "play-icon",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 83
              }
            })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "d-flex align-items-center",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 84
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "adonis-icon text-light pointer mr-2 icon-2x",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 85
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 85
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("use", {
              xlinkHref: "#icon-heart-blank",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 85
              }
            }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer dropdown-menu-toggle",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 86
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "icon-dot-nav-horizontal text-light",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 86
              }
            })))));
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        }, !data || data.length === 0 ? "" : data.map(function (prop, key) {
          if (key >= 10 && key < 15) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              key: key,
              "class": "img-box-horizontal music-img-box h-g-bg h-d-shadow",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 98
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "img-box img-box-sm box-rounded-sm",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 99
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
              style: {
                height: 50
              },
              src: __WEBPACK_IMPORTED_MODULE_2__variables_general__["a" /* url */] + prop.imageMain || "",
              alt: "",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 100
              }
            })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "des",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 102
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
              "class": "title fs-2",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 103
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 103
              }
            }, prop.title || "")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
              "class": "sub-title",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 104
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 104
              }
            }, "Rachel Platten"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "hover-state d-flex justify-content-between align-items-center",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 106
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer play-btn-dark box-rounded-sm",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 107
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
              "class": "play-icon",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 107
              }
            })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "d-flex align-items-center",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 108
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "adonis-icon text-light pointer mr-2 icon-2x",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 109
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 109
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("use", {
              xlinkHref: "#icon-heart-blank",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 109
              }
            }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer dropdown-menu-toggle",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "icon-dot-nav-horizontal text-light",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              }
            })))));
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          }
        }, !data || data.length === 0 ? "" : data.map(function (prop, key) {
          if (key >= 15 && key < 20) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              key: key,
              "class": "img-box-horizontal music-img-box h-g-bg h-d-shadow",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 122
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "img-box img-box-sm box-rounded-sm",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 123
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
              style: {
                height: 50
              },
              src: __WEBPACK_IMPORTED_MODULE_2__variables_general__["a" /* url */] + prop.imageMain || "",
              alt: "",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 124
              }
            })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "des",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 126
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
              "class": "title fs-2",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 127
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 127
              }
            }, prop.title || "")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
              "class": "sub-title",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 128
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 128
              }
            }, "Rachel Platten"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "hover-state d-flex justify-content-between align-items-center",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 130
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer play-btn-dark box-rounded-sm",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 131
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
              "class": "play-icon",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 131
              }
            })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "d-flex align-items-center",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 132
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "adonis-icon text-light pointer mr-2 icon-2x",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 133
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 133
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("use", {
              xlinkHref: "#icon-heart-blank",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 133
              }
            }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer dropdown-menu-toggle",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 134
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "icon-dot-nav-horizontal text-light",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 134
              }
            })))));
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          }
        }, !data || data.length === 0 ? "" : data.map(function (prop, key) {
          if (key >= 20 && key < 25) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              key: key,
              "class": "img-box-horizontal music-img-box h-g-bg h-d-shadow",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 146
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "img-box img-box-sm box-rounded-sm",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 147
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
              style: {
                height: 50
              },
              src: __WEBPACK_IMPORTED_MODULE_2__variables_general__["a" /* url */] + prop.imageMain || "",
              alt: "",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 148
              }
            })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "des",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 150
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
              "class": "title fs-2",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 151
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 151
              }
            }, prop.title || "")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
              "class": "sub-title",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 152
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 152
              }
            }, "Rachel Platten"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "hover-state d-flex justify-content-between align-items-center",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 154
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer play-btn-dark box-rounded-sm",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 155
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
              "class": "play-icon",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 155
              }
            })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "d-flex align-items-center",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 156
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "adonis-icon text-light pointer mr-2 icon-2x",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 157
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 157
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("use", {
              xlinkHref: "#icon-heart-blank",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 157
              }
            }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer dropdown-menu-toggle",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 158
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "icon-dot-nav-horizontal text-light",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 158
              }
            })))));
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          }
        }, !data || data.length === 0 ? "" : data.map(function (prop, key) {
          if (key >= 25 && key < 30) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              key: key,
              "class": "img-box-horizontal music-img-box h-g-bg h-d-shadow",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 170
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "img-box img-box-sm box-rounded-sm",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 171
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
              style: {
                height: 50
              },
              src: __WEBPACK_IMPORTED_MODULE_2__variables_general__["a" /* url */] + prop.imageMain || "",
              alt: "",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 172
              }
            })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "des",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 174
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
              "class": "title fs-2",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 175
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              href: "#",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 175
              }
            }, prop.title || "")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
              "class": "sub-title",
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
            }, "Rachel Platten"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "hover-state d-flex justify-content-between align-items-center",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 178
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer play-btn-dark box-rounded-sm",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 179
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
              "class": "play-icon",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 179
              }
            })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              "class": "d-flex align-items-center",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 180
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "adonis-icon text-light pointer mr-2 icon-2x",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 181
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 181
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("use", {
              xlinkHref: "#icon-heart-blank",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 181
              }
            }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "pointer dropdown-menu-toggle",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 182
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
              "class": "icon-dot-nav-horizontal text-light",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 182
              }
            })))));
          }
        }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "pt-e-20 pt-e-lg-40",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "col-xxl-5 col-lg-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "title pb-e-15",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
          "class": "title inactive-color",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          }
        }, "Video Today"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
          "class": "title h3-md",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          }
        }, "Watch Now")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "music-img-box",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "img-box box-rounded-md",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          src: "/static/assets/images/watch-now/watch-now.jpg",
          alt: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "hover-state show",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "absolute-top pl-e-15 pr-e-15 pt-e-15 pl-e-md-30 pr-e-md-30 pt-e-md-30",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
          "class": "album-name text-light",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          }
        }, "Album:  Life Changes")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "absolute-bottom pl-e-15 pr-e-15 pb-e-md-15  pl-e-md-30 pr-e-30 pb-e-md-30 d-flex",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
          "class": "album-title text-light",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210
          }
        }, "The Ones That Like Me")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
          "class": "artist-name text-light",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          }
        }, "David Jame"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "ml-auto",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          "class": "pointer play-btn-dark play-btn-dark round-btn",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
          "class": "play-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          }
        })))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          "class": "pt-e-30 pt-e-lg-40",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          }
        }))));
      }
    }
  }]);

  return TopWeek;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ })

})
//# sourceMappingURL=5.feaa57bf358d6bd2f6ac.hot-update.js.map