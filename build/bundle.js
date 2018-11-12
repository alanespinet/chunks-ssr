/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addChunk = exports.fetchChunks = exports.ADD_CHUNK = exports.FETCH_CHUNKS = undefined;

var _axios = __webpack_require__(6);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FETCH_CHUNKS = exports.FETCH_CHUNKS = 'fetch_chunks';
var ADD_CHUNK = exports.ADD_CHUNK = 'add_chunk';

var fetchChunks = exports.fetchChunks = function fetchChunks() {
  return function (dispatch) {
    return _axios2.default.get('http://localhost:7200/chunks').then(function (res) {
      dispatch({
        type: FETCH_CHUNKS,
        payload: res.data
      });
    });
  };
};

var addChunk = exports.addChunk = function addChunk(chunk) {
  return function (dispatch) {
    return _axios2.default.post('http://localhost:7200/chunks', chunk).then(function (res) {
      dispatch({
        type: ADD_CHUNK,
        payload: chunk
      });
    });
  };
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Home = __webpack_require__(17);

var _Home2 = _interopRequireDefault(_Home);

var _Add = __webpack_require__(12);

var _Add2 = _interopRequireDefault(_Add);

var _App = __webpack_require__(13);

var _App2 = _interopRequireDefault(_App);

var _ChunksList = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  component: _App2.default,
  routes: [{
    loadData: _ChunksList.chunksLoadData,
    path: '/',
    component: _Home2.default,
    exact: true
  }, {
    path: '/add',
    component: _Add2.default
  }]
}];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chunksLoadData = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _Chunk = __webpack_require__(14);

var _Chunk2 = _interopRequireDefault(_Chunk);

var _actions = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChunksList = function (_Component) {
  _inherits(ChunksList, _Component);

  function ChunksList() {
    _classCallCheck(this, ChunksList);

    return _possibleConstructorReturn(this, (ChunksList.__proto__ || Object.getPrototypeOf(ChunksList)).apply(this, arguments));
  }

  _createClass(ChunksList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchChunks();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'chunks-list' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          this.props.chunks.map(function (chunk) {
            return _react2.default.createElement(_Chunk2.default, {
              key: chunk.title,
              title: chunk.title,
              description: chunk.description,
              language: chunk.language,
              keywords: chunk.keywords.join(', '),
              code: chunk.code,
              id: chunk._id
            });
          })
        )
      );
    }
  }]);

  return ChunksList;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    chunks: state.chunks
  };
};

var chunksLoadData = exports.chunksLoadData = function chunksLoadData(store) {
  return store.dispatch((0, _actions.fetchChunks)());
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchChunks: _actions.fetchChunks })(ChunksList);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(7);

var _reduxThunk = __webpack_require__(22);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(19);

var _reducers2 = _interopRequireDefault(_reducers);

var _axios = __webpack_require__(6);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));

  return store;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(20);

var _reactRouterDom = __webpack_require__(21);

var _reactRedux = __webpack_require__(1);

var _reactRouterConfig = __webpack_require__(2);

var _serializeJavascript = __webpack_require__(23);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _Routes = __webpack_require__(4);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: {} },
      _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));
  return '\n    <html>\n      <head>\n        <title>Code Chunks</title>\n        <link href="https://fonts.googleapis.com/css?family=Anton|Lato:300,400,700" rel="stylesheet">\n      </head>\n      <body>\n        <div id="root">' + content + '</div>\n        <script>\n          window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n        </script>\n        <script src="bundle.js"></script>\n      </body>\n    </html>\n  ';
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Add = function (_Component) {
  _inherits(Add, _Component);

  function Add(props) {
    _classCallCheck(this, Add);

    var _this = _possibleConstructorReturn(this, (Add.__proto__ || Object.getPrototypeOf(Add)).call(this, props));

    _this.state = {
      title: '',
      description: '',
      language: '',
      keywords: [],
      code: ''
    };

    _this.onTitleChange = _this.onTitleChange.bind(_this);
    _this.onDescriptionChange = _this.onDescriptionChange.bind(_this);
    _this.onLanguageChange = _this.onLanguageChange.bind(_this);
    _this.onCodeChange = _this.onCodeChange.bind(_this);
    _this.onAddChunkClick = _this.onAddChunkClick.bind(_this);
    _this.onAddKeywordClick = _this.onAddKeywordClick.bind(_this);
    return _this;
  }

  _createClass(Add, [{
    key: 'onTitleChange',
    value: function onTitleChange(e) {
      var val = e.target.value;
      this.setState({ title: val });
    }
  }, {
    key: 'onDescriptionChange',
    value: function onDescriptionChange(e) {
      var val = e.target.value;
      this.setState({ description: val });
    }
  }, {
    key: 'onLanguageChange',
    value: function onLanguageChange(e) {
      var val = e.target.value;
      this.setState({ language: val });
    }
  }, {
    key: 'onCodeChange',
    value: function onCodeChange(e) {
      var val = e.target.value;
      this.setState({ code: val });
    }
  }, {
    key: 'onAddChunkClick',
    value: function onAddChunkClick(e) {
      e.preventDefault();
      var valid = this.state.title.trim().length !== 0 && this.state.description.trim().length !== 0 && this.state.language.trim().length !== 0 && this.state.code.trim().length !== 0;

      if (valid) {
        this.props.addChunk(this.state);
        this.props.history.push('/');
      } else {
        alert('Error: Title, Description, Language and Code are all Required.');
      }
    }
  }, {
    key: 'onAddKeywordClick',
    value: function onAddKeywordClick(e) {
      e.preventDefault();
      var newKey = document.getElementById('chunk-keyword').value;
      this.setState(function (prevState) {
        return {
          keywords: prevState.keywords.concat(newKey)
        };
      });
      document.getElementById('chunk-keyword').value = '';
      document.getElementById('chunk-keyword').focus();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'add' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'h2',
            null,
            'Add a new Chunk'
          ),
          _react2.default.createElement(
            'form',
            { className: 'add__form' },
            _react2.default.createElement(
              'div',
              { className: 'add__form__control-group' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'chunk-title' },
                'Title:'
              ),
              _react2.default.createElement('input', { type: 'text', id: 'chunk-title', value: this.state.title, onChange: this.onTitleChange })
            ),
            _react2.default.createElement(
              'div',
              { className: 'add__form__control-group' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'chunk-description' },
                'Description:'
              ),
              _react2.default.createElement('textarea', { name: 'chunk-description', id: 'chunk-description', value: this.state.description, onChange: this.onDescriptionChange })
            ),
            _react2.default.createElement(
              'div',
              { className: 'add__form__control-group' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'chunk-language' },
                'Language:'
              ),
              _react2.default.createElement('input', { type: 'text', id: 'chunk-language', value: this.state.language, onChange: this.onLanguageChange })
            ),
            _react2.default.createElement(
              'div',
              { className: 'add__form__control-group' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'chunk-keyword' },
                'Keywords:'
              ),
              _react2.default.createElement('input', { type: 'text', id: 'chunk-keyword' }),
              _react2.default.createElement(
                'button',
                { type: 'button', id: 'add-keyword', onClick: this.onAddKeywordClick },
                'Add'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'add__form__control-group' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'chunk-code' },
                'Code:'
              ),
              _react2.default.createElement('textarea', { name: 'chunk-code', id: 'chunk-code', value: this.state.code, onChange: this.onCodeChange })
            ),
            _react2.default.createElement(
              'button',
              { type: 'button', id: 'add-chunk', onClick: this.onAddChunkClick },
              'Add Chunk'
            )
          )
        )
      );
    }
  }]);

  return Add;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(null, { addChunk: _actions.addChunk })(Add);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(16);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(15);

var _Footer2 = _interopRequireDefault(_Footer);

var _reactRouterConfig = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;
  return _react2.default.createElement(
    'div',
    { className: 'app' },
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(
      'div',
      { className: 'page' },
      (0, _reactRouterConfig.renderRoutes)(route.routes)
    ),
    _react2.default.createElement(_Footer2.default, null)
  );
};

exports.default = App;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chunk = function (_Component) {
  _inherits(Chunk, _Component);

  function Chunk(props) {
    _classCallCheck(this, Chunk);

    return _possibleConstructorReturn(this, (Chunk.__proto__ || Object.getPrototypeOf(Chunk)).call(this, props));
  }

  _createClass(Chunk, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "chunk" },
        _react2.default.createElement(
          "div",
          { className: "chunk__title" },
          _react2.default.createElement(
            "h2",
            null,
            this.props.title
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "chunk__code" },
          _react2.default.createElement(
            "pre",
            null,
            this.props.code
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "chunk__data" },
          _react2.default.createElement(
            "p",
            null,
            _react2.default.createElement(
              "span",
              null,
              "Description: "
            ),
            this.props.description
          ),
          _react2.default.createElement(
            "p",
            null,
            _react2.default.createElement(
              "span",
              null,
              "Language: "
            ),
            this.props.language
          ),
          _react2.default.createElement(
            "p",
            null,
            _react2.default.createElement(
              "span",
              null,
              "Keywords: "
            ),
            this.props.keywords
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "chunk__actions" },
          _react2.default.createElement(
            "button",
            { className: "chunk__actions__delete" },
            "Remove"
          ),
          _react2.default.createElement(
            "button",
            { className: "chunk__actions__view" },
            "View"
          )
        )
      );
    }
  }]);

  return Chunk;
}(_react.Component);

exports.default = Chunk;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement(
    "footer",
    { className: "footer" },
    _react2.default.createElement(
      "p",
      null,
      "Application created by Alan Espinet - ",
      _react2.default.createElement(
        "a",
        { href: "http://alanespinet.com/", target: "_blank" },
        "alanespinet.com"
      )
    )
  );
};

exports.default = Footer;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react2.default.createElement(
    "header",
    { className: "header" },
    _react2.default.createElement("img", { src: "/images/logo.png", alt: "" }),
    _react2.default.createElement(
      "h1",
      null,
      "Code Chunks"
    )
  );
};

exports.default = Header;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ChunksList = __webpack_require__(5);

var _ChunksList2 = _interopRequireDefault(_ChunksList);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'home' },
        _react2.default.createElement(_ChunksList2.default, null)
      );
    }
  }]);

  return Home;
}(_react.Component);

;

exports.default = Home;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(3);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_CHUNKS:
      return action.payload;

    case _actions.ADD_CHUNK:
      return [].concat(_toConsumableArray(state), [action.payload]);

    default:
      return state;
  }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(7);

var _chunksReducer = __webpack_require__(18);

var _chunksReducer2 = _interopRequireDefault(_chunksReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  chunks: _chunksReducer2.default
});

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(10);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(9);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(8);

var _createStore2 = _interopRequireDefault(_createStore);

var _reactRouterConfig = __webpack_require__(2);

var _expressHttpProxy = __webpack_require__(11);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _Routes = __webpack_require__(4);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/api', (0, _expressHttpProxy2.default)('http://localhost:7200/'));
app.use(_express2.default.static('public'));

app.get('*', function (req, res, next) {
  var store = (0, _createStore2.default)(req);

  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(function () {
    res.send((0, _renderer2.default)(req, store));
  }).catch(function (err) {
    return console.log(err);
  });
});

app.listen(3000, console.log('Server running'));

/***/ })
/******/ ]);