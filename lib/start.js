'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _mobxReact = require('mobx-react');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _vaneRelation = require('./vane-relation');

var _vaneRelation2 = _interopRequireDefault(_vaneRelation);

var _vaneContext = require('./vane-context');

var _vaneContext2 = _interopRequireDefault(_vaneContext);

var _vaneMiddleware = require('./vane-middleware');

var _vaneMiddleware2 = _interopRequireDefault(_vaneMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Tips：
 * 如果start没有配置container选项，则返回一个可渲染的组件；
 * 如果传递了container，则执行渲染。
 * */

exports.default = function (_ref) {
    var ContainerComponent = _ref.component,
        models = _ref.models,
        container = _ref.container,
        _ref$middlewares = _ref.middlewares,
        middlewares = _ref$middlewares === undefined ? [] : _ref$middlewares,
        _ref$relation = _ref.relation,
        relation = _ref$relation === undefined ? new _vaneRelation2.default() : _ref$relation;

    if (!Array.isArray(middlewares)) {
        middlewares = [middlewares];
    }

    middlewares.forEach(function (item) {
        _vaneMiddleware2.default.use(item);
    });

    var context = new _vaneContext2.default(models, {
        middleware: _vaneMiddleware2.default,
        relation: relation
    });

    var containerEl = container;

    if (containerEl) {
        // 如果传递了容器(选择器)，则执行渲染
        if (typeof container === 'string') {
            containerEl = document.querySelector(container);
        }

        (0, _reactDom.render)(_react2.default.createElement(
            _mobxReact.Provider,
            context.data,
            _react2.default.createElement(ContainerComponent, null)
        ), containerEl);
    } else {
        // 否则返回可执行组件
        var VaneComponent = function (_Component) {
            (0, _inherits3.default)(VaneComponent, _Component);

            function VaneComponent(props, context) {
                (0, _classCallCheck3.default)(this, VaneComponent);
                return (0, _possibleConstructorReturn3.default)(this, (VaneComponent.__proto__ || (0, _getPrototypeOf2.default)(VaneComponent)).call(this, props, context));
            }

            (0, _createClass3.default)(VaneComponent, [{
                key: 'render',
                value: function render() {
                    return _react2.default.createElement(
                        _mobxReact.Provider,
                        context.data,
                        _react2.default.createElement(ContainerComponent, this.props.data)
                    );
                }
            }]);
            return VaneComponent;
        }(_react.Component);

        return VaneComponent;
    }
};

module.exports = exports['default'];