'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp; /* eslint-disable jsx-a11y/no-static-element-interactions */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = require('immutable');

var _reactImmutableProptypes = require('react-immutable-proptypes');

var _reactImmutableProptypes2 = _interopRequireDefault(_reactImmutableProptypes);

var _reactBootstrap = require('react-bootstrap');

var _reactCheckbox = require('@opuscapita/react-checkbox');

var _reactCheckbox2 = _interopRequireDefault(_reactCheckbox);

var _reactSearchbar = require('@opuscapita/react-searchbar');

var _reactSearchbar2 = _interopRequireDefault(_reactSearchbar);

var _availableDataList = require('./available-data-list/available-data-list.component');

var _availableDataList2 = _interopRequireDefault(_availableDataList);

var _selectedDataList = require('./selected-data-list/selected-data-list.component');

var _selectedDataList2 = _interopRequireDefault(_selectedDataList);

var _data = require('./data.utils');

var _data2 = _interopRequireDefault(_data);

require('./select-order-list.component.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectOrderList = (_temp = _class = function (_React$PureComponent) {
  _inherits(SelectOrderList, _React$PureComponent);

  function SelectOrderList(props) {
    _classCallCheck(this, SelectOrderList);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _this.handleAllSelectedChange = function () {
      var allSelected = !_this.props.allSelected;
      var selectedData = allSelected ? _this.state.availableDataList : _this.state.selectedDataList.filter(function (data) {
        return data.isLocked === true;
      });
      _this.props.onChange({ allSelected: allSelected, selectedData: selectedData });
    };

    _this.handleKeywordChange = function (e) {
      var keyword = e;
      _this.setState({ keyword: keyword });
    };

    _this.handleSortChange = function (_ref) {
      var oldIndex = _ref.oldIndex,
          newIndex = _ref.newIndex;

      if (newIndex === null || newIndex === oldIndex) {
        return;
      }
      var selectedData = _data2.default.changeDataSort(_this.state.selectedDataList, oldIndex, newIndex);
      _this.props.onChange({ selectedData: selectedData, allSelected: _this.props.allSelected });
    };

    _this.handleSelectItem = function (item) {
      // add selected item to the end of the list
      _this.props.onChange({
        allSelected: _this.state.selectedDataList.size + 1 === _this.props.availableData.size,
        selectedData: _this.state.selectedDataList.push(item)
      });
    };

    _this.handleUnselectItem = function (item) {
      _this.props.onChange({
        allSelected: false,
        selectedData: _this.state.selectedDataList.filter(function (i) {
          return i.value !== item.value;
        })
      });
    };

    _this.renderSearchBar = function () {
      var singleColumn = _this.props.singleColumn;

      var columnCount = singleColumn ? 12 : 6;
      return _react2.default.createElement(
        _reactBootstrap.Col,
        { xs: columnCount },
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          { className: 'oc-select-order-list-keyword-group' },
          singleColumn || _react2.default.createElement(_reactSearchbar2.default, {
            dynamicSearchStartsFrom: 1,
            inputClassName: 'oc-select-order-list-keyword-input',
            onSearch: _this.handleKeywordChange,
            searchPlaceHolder: _this.props.searchPlaceholder,
            tooltip: _this.props.translations.searchTooltip,
            value: _this.state.keyword
          })
        )
      );
    };

    _this.renderAavailableDataHeader = function () {
      if (_this.props.singleColumn) return null;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 4 },
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            { className: 'oc-select-order-list-label' },
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              _this.props.translations.availableListLabel
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 2 },
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(_reactCheckbox2.default, {
              className: 'oc-select-order-list-select-all-checkbox',
              checked: _this.props.allSelected,
              onChange: _this.handleAllSelectedChange,
              label: _this.props.translations.allLabel
            })
          )
        )
      );
    };

    _this.renderSelectedDataHeader = function () {
      return _react2.default.createElement(
        _reactBootstrap.Col,
        { xs: _this.props.singleColumn ? 12 : 6 },
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          { className: 'oc-select-order-list-label' },
          _react2.default.createElement(
            _reactBootstrap.ControlLabel,
            null,
            _this.props.translations.selectedListLabel
          )
        )
      );
    };

    _this.renderAavailableDataContent = function () {
      if (_this.props.singleColumn) return null;

      return _react2.default.createElement(
        _reactBootstrap.Col,
        { xs: 6 },
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(_availableDataList2.default, {
            items: _this.state.availableDataList,
            onSelectItem: _this.handleSelectItem,
            onUnselectItem: _this.handleUnselectItem,
            searchKeyword: _this.state.keyword
          })
        )
      );
    };

    _this.renderSelectedContent = function () {
      return _react2.default.createElement(
        _reactBootstrap.Col,
        { xs: _this.props.singleColumn ? 12 : 6 },
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(_selectedDataList2.default, {
            items: _this.state.selectedDataList,
            onSortChange: _this.handleSortChange,
            onRemoveItem: _this.handleUnselectItem,
            showRemoveIcon: !_this.props.singleColumn
          })
        )
      );
    };

    var availableDataList = _data2.default.getAvailableDataList(props.availableData, props.selectedData);
    _this.state = {
      availableDataList: availableDataList,
      selectedDataList: _data2.default.getSelectedDataList(props.selectedData),
      keyword: ''
    };
    return _this;
  }

  SelectOrderList.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (!nextProps.availableData.equals(this.props.availableData) || !nextProps.selectedData.equals(this.props.selectedData)) {
      var selectedDataList = _data2.default.getSelectedDataList(nextProps.selectedData);
      var availableDataList = _data2.default.getAvailableDataList(nextProps.availableData, nextProps.selectedData);
      this.setState({
        availableDataList: availableDataList,
        selectedDataList: selectedDataList
      });
    }
  };

  SelectOrderList.prototype.render = function render() {
    var id = this.props.id ? 'oc-select-order-list-' + this.props.id : 'oc-select-order-list';
    return _react2.default.createElement(
      _reactBootstrap.Grid,
      { id: id, fluid: true },
      _react2.default.createElement(
        _reactBootstrap.Row,
        null,
        this.renderSearchBar()
      ),
      _react2.default.createElement(
        _reactBootstrap.Row,
        null,
        this.renderAavailableDataHeader(),
        this.renderSelectedDataHeader()
      ),
      _react2.default.createElement(
        _reactBootstrap.Row,
        null,
        this.renderAavailableDataContent(),
        this.renderSelectedContent()
      )
    );
  };

  return SelectOrderList;
}(_react2.default.PureComponent), _class.defaultProps = {
  availableData: (0, _immutable.List)(),
  allSelected: false,
  id: '',
  searchPlaceholder: 'Search...',
  selectedData: (0, _immutable.List)(),
  singleColumn: false,
  translations: {
    allLabel: '',
    availableListLabel: '',
    searchTooltip: null,
    selectedListLabel: ''
  }
}, _temp);
exports.default = SelectOrderList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWxlY3Qtb3JkZXItbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlNlbGVjdE9yZGVyTGlzdCIsInByb3BzIiwiaGFuZGxlQWxsU2VsZWN0ZWRDaGFuZ2UiLCJhbGxTZWxlY3RlZCIsInNlbGVjdGVkRGF0YSIsInN0YXRlIiwiYXZhaWxhYmxlRGF0YUxpc3QiLCJzZWxlY3RlZERhdGFMaXN0IiwiZmlsdGVyIiwiZGF0YSIsImlzTG9ja2VkIiwib25DaGFuZ2UiLCJoYW5kbGVLZXl3b3JkQ2hhbmdlIiwiZSIsImtleXdvcmQiLCJzZXRTdGF0ZSIsImhhbmRsZVNvcnRDaGFuZ2UiLCJvbGRJbmRleCIsIm5ld0luZGV4IiwiVXRpbHMiLCJjaGFuZ2VEYXRhU29ydCIsImhhbmRsZVNlbGVjdEl0ZW0iLCJpdGVtIiwic2l6ZSIsImF2YWlsYWJsZURhdGEiLCJwdXNoIiwiaGFuZGxlVW5zZWxlY3RJdGVtIiwiaSIsInZhbHVlIiwicmVuZGVyU2VhcmNoQmFyIiwic2luZ2xlQ29sdW1uIiwiY29sdW1uQ291bnQiLCJzZWFyY2hQbGFjZWhvbGRlciIsInRyYW5zbGF0aW9ucyIsInNlYXJjaFRvb2x0aXAiLCJyZW5kZXJBYXZhaWxhYmxlRGF0YUhlYWRlciIsImF2YWlsYWJsZUxpc3RMYWJlbCIsImFsbExhYmVsIiwicmVuZGVyU2VsZWN0ZWREYXRhSGVhZGVyIiwic2VsZWN0ZWRMaXN0TGFiZWwiLCJyZW5kZXJBYXZhaWxhYmxlRGF0YUNvbnRlbnQiLCJyZW5kZXJTZWxlY3RlZENvbnRlbnQiLCJnZXRBdmFpbGFibGVEYXRhTGlzdCIsImdldFNlbGVjdGVkRGF0YUxpc3QiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwiZXF1YWxzIiwicmVuZGVyIiwiaWQiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7O21CQUFBOzs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7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Q0FBMEJFLFVBQVV6QyxZQUFwQyxDQUF6QjtBQUNBLFVBQU1FLG9CQUNKYSxlQUFNdUIsb0JBQU4sQ0FBMkJHLFVBQVVyQixhQUFyQyxFQUFvRHFCLFVBQVV6QyxZQUE5RCxDQURGO0FBRUEsV0FBS1csUUFBTCxDQUFjO0FBQ1pULDRDQURZO0FBRVpDO0FBRlksT0FBZDtBQUlEO0FBQ0YsRzs7NEJBNEhEd0MsTSxxQkFBUztBQUNQLFFBQU1DLEtBQUssS0FBSy9DLEtBQUwsQ0FBVytDLEVBQVgsNkJBQXdDLEtBQUsvQyxLQUFMLENBQVcrQyxFQUFuRCxHQUEwRCxzQkFBckU7QUFDQSxXQUNFO0FBQUMsMEJBQUQ7QUFBQSxRQUFNLElBQUlBLEVBQVYsRUFBYyxXQUFkO0FBQ0U7QUFBQywyQkFBRDtBQUFBO0FBQ0csYUFBS25CLGVBQUw7QUFESCxPQURGO0FBSUU7QUFBQywyQkFBRDtBQUFBO0FBQ0csYUFBS00sMEJBQUwsRUFESDtBQUVHLGFBQUtHLHdCQUFMO0FBRkgsT0FKRjtBQVFFO0FBQUMsMkJBQUQ7QUFBQTtBQUNHLGFBQUtFLDJCQUFMLEVBREg7QUFFRyxhQUFLQyxxQkFBTDtBQUZIO0FBUkYsS0FERjtBQWVELEc7OztFQWxNMENRLGdCQUFNQyxhLFVBaUIxQ0MsWSxHQUFlO0FBQ3BCM0IsaUJBQWUsc0JBREs7QUFFcEJyQixlQUFhLEtBRk87QUFHcEI2QyxNQUFJLEVBSGdCO0FBSXBCaEIscUJBQW1CLFdBSkM7QUFLcEI1QixnQkFBYyxzQkFMTTtBQU1wQjBCLGdCQUFjLEtBTk07QUFPcEJHLGdCQUFjO0FBQ1pJLGNBQVUsRUFERTtBQUVaRCx3QkFBb0IsRUFGUjtBQUdaRixtQkFBZSxJQUhIO0FBSVpLLHVCQUFtQjtBQUpQO0FBUE0sQztrQkFqQkh2QyxlIiwiZmlsZSI6InNlbGVjdC1vcmRlci1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLXN0YXRpYy1lbGVtZW50LWludGVyYWN0aW9ucyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCBJbW11dGFibGVQcm9wVHlwZXMgZnJvbSAncmVhY3QtaW1tdXRhYmxlLXByb3B0eXBlcyc7XG5pbXBvcnQge1xuICBDb2wsXG4gIENvbnRyb2xMYWJlbCxcbiAgRm9ybUdyb3VwLFxuICBHcmlkLFxuICBSb3csXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtY2hlY2tib3gnO1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1zZWFyY2hiYXInO1xuXG5pbXBvcnQgQXZhaWxhYmxlRGF0YUxpc3QgZnJvbSAnLi9hdmFpbGFibGUtZGF0YS1saXN0L2F2YWlsYWJsZS1kYXRhLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCBTZWxlY3RlZERhdGFMaXN0IGZyb20gJy4vc2VsZWN0ZWQtZGF0YS1saXN0L3NlbGVjdGVkLWRhdGEtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IFV0aWxzIGZyb20gJy4vZGF0YS51dGlscyc7XG5pbXBvcnQgJy4vc2VsZWN0LW9yZGVyLWxpc3QuY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RPcmRlckxpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhdmFpbGFibGVEYXRhOiBJbW11dGFibGVQcm9wVHlwZXMubGlzdCxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBhbGxTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2luZ2xlQ29sdW1uOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZWxlY3RlZERhdGE6IEltbXV0YWJsZVByb3BUeXBlcy5saXN0LFxuICAgIHRyYW5zbGF0aW9uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGFsbExhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgICAgYXZhaWxhYmxlTGlzdExhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgICAgc2VhcmNoVG9vbHRpcDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICAgIHNlbGVjdGVkTGlzdExhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgIH0pLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYXZhaWxhYmxlRGF0YTogTGlzdCgpLFxuICAgIGFsbFNlbGVjdGVkOiBmYWxzZSxcbiAgICBpZDogJycsXG4gICAgc2VhcmNoUGxhY2Vob2xkZXI6ICdTZWFyY2guLi4nLFxuICAgIHNlbGVjdGVkRGF0YTogTGlzdCgpLFxuICAgIHNpbmdsZUNvbHVtbjogZmFsc2UsXG4gICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICBhbGxMYWJlbDogJycsXG4gICAgICBhdmFpbGFibGVMaXN0TGFiZWw6ICcnLFxuICAgICAgc2VhcmNoVG9vbHRpcDogbnVsbCxcbiAgICAgIHNlbGVjdGVkTGlzdExhYmVsOiAnJyxcbiAgICB9LFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgYXZhaWxhYmxlRGF0YUxpc3QgPSBVdGlscy5nZXRBdmFpbGFibGVEYXRhTGlzdChwcm9wcy5hdmFpbGFibGVEYXRhLCBwcm9wcy5zZWxlY3RlZERhdGEpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhdmFpbGFibGVEYXRhTGlzdCxcbiAgICAgIHNlbGVjdGVkRGF0YUxpc3Q6IFV0aWxzLmdldFNlbGVjdGVkRGF0YUxpc3QocHJvcHMuc2VsZWN0ZWREYXRhKSxcbiAgICAgIGtleXdvcmQ6ICcnLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICghbmV4dFByb3BzLmF2YWlsYWJsZURhdGEuZXF1YWxzKHRoaXMucHJvcHMuYXZhaWxhYmxlRGF0YSkgfHxcbiAgICAhbmV4dFByb3BzLnNlbGVjdGVkRGF0YS5lcXVhbHModGhpcy5wcm9wcy5zZWxlY3RlZERhdGEpKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZERhdGFMaXN0ID0gVXRpbHMuZ2V0U2VsZWN0ZWREYXRhTGlzdChuZXh0UHJvcHMuc2VsZWN0ZWREYXRhKTtcbiAgICAgIGNvbnN0IGF2YWlsYWJsZURhdGFMaXN0ID1cbiAgICAgICAgVXRpbHMuZ2V0QXZhaWxhYmxlRGF0YUxpc3QobmV4dFByb3BzLmF2YWlsYWJsZURhdGEsIG5leHRQcm9wcy5zZWxlY3RlZERhdGEpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGF2YWlsYWJsZURhdGFMaXN0LFxuICAgICAgICBzZWxlY3RlZERhdGFMaXN0LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQWxsU2VsZWN0ZWRDaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgYWxsU2VsZWN0ZWQgPSAhdGhpcy5wcm9wcy5hbGxTZWxlY3RlZDtcbiAgICBjb25zdCBzZWxlY3RlZERhdGEgPSBhbGxTZWxlY3RlZCA/IHRoaXMuc3RhdGUuYXZhaWxhYmxlRGF0YUxpc3QgOlxuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFMaXN0LmZpbHRlcihkYXRhID0+IGRhdGEuaXNMb2NrZWQgPT09IHRydWUpO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoeyBhbGxTZWxlY3RlZCwgc2VsZWN0ZWREYXRhIH0pO1xuICB9XG5cbiAgaGFuZGxlS2V5d29yZENoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3Qga2V5d29yZCA9IGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGtleXdvcmQgfSk7XG4gIH1cblxuICBoYW5kbGVTb3J0Q2hhbmdlID0gKHsgb2xkSW5kZXgsIG5ld0luZGV4IH0pID0+IHtcbiAgICBpZiAobmV3SW5kZXggPT09IG51bGwgfHwgbmV3SW5kZXggPT09IG9sZEluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNlbGVjdGVkRGF0YSA9IFV0aWxzLmNoYW5nZURhdGFTb3J0KHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRhTGlzdCwgb2xkSW5kZXgsIG5ld0luZGV4KTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgc2VsZWN0ZWREYXRhLCBhbGxTZWxlY3RlZDogdGhpcy5wcm9wcy5hbGxTZWxlY3RlZCB9KTtcbiAgfVxuXG4gIGhhbmRsZVNlbGVjdEl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIC8vIGFkZCBzZWxlY3RlZCBpdGVtIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3RcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcbiAgICAgIGFsbFNlbGVjdGVkOiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YUxpc3Quc2l6ZSArIDEgPT09IHRoaXMucHJvcHMuYXZhaWxhYmxlRGF0YS5zaXplLFxuICAgICAgc2VsZWN0ZWREYXRhOiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YUxpc3QucHVzaChpdGVtKSxcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVVuc2VsZWN0SXRlbSA9IChpdGVtKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7XG4gICAgICBhbGxTZWxlY3RlZDogZmFsc2UsXG4gICAgICBzZWxlY3RlZERhdGE6IHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRhTGlzdC5maWx0ZXIoaSA9PiBpLnZhbHVlICE9PSBpdGVtLnZhbHVlKSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlclNlYXJjaEJhciA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNpbmdsZUNvbHVtbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjb2x1bW5Db3VudCA9IHNpbmdsZUNvbHVtbiA/IDEyIDogNjtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbCB4cz17Y29sdW1uQ291bnR9PlxuICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWtleXdvcmQtZ3JvdXBcIj5cbiAgICAgICAgICB7IHNpbmdsZUNvbHVtbiB8fFxuICAgICAgICAgICAgPFNlYXJjaEJhclxuICAgICAgICAgICAgICBkeW5hbWljU2VhcmNoU3RhcnRzRnJvbT17MX1cbiAgICAgICAgICAgICAgaW5wdXRDbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1rZXl3b3JkLWlucHV0XCJcbiAgICAgICAgICAgICAgb25TZWFyY2g9e3RoaXMuaGFuZGxlS2V5d29yZENoYW5nZX1cbiAgICAgICAgICAgICAgc2VhcmNoUGxhY2VIb2xkZXI9e3RoaXMucHJvcHMuc2VhcmNoUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIHRvb2x0aXA9e3RoaXMucHJvcHMudHJhbnNsYXRpb25zLnNlYXJjaFRvb2x0aXB9XG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmtleXdvcmR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICA8L0NvbD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyQWF2YWlsYWJsZURhdGFIZWFkZXIgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuc2luZ2xlQ29sdW1uKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Q29sIHhzPXs0fT5cbiAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWxhYmVsXCI+XG4gICAgICAgICAgICA8Q29udHJvbExhYmVsPlxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50cmFuc2xhdGlvbnMuYXZhaWxhYmxlTGlzdExhYmVsfVxuICAgICAgICAgICAgPC9Db250cm9sTGFiZWw+XG4gICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHhzPXsyfT5cbiAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LXNlbGVjdC1hbGwtY2hlY2tib3hcIlxuICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLmFsbFNlbGVjdGVkfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVBbGxTZWxlY3RlZENoYW5nZX1cbiAgICAgICAgICAgICAgbGFiZWw9e3RoaXMucHJvcHMudHJhbnNsYXRpb25zLmFsbExhYmVsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyU2VsZWN0ZWREYXRhSGVhZGVyID0gKCkgPT4gKFxuICAgIDxDb2wgeHM9e3RoaXMucHJvcHMuc2luZ2xlQ29sdW1uID8gMTIgOiA2fT5cbiAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3QtbGFiZWxcIj5cbiAgICAgICAgPENvbnRyb2xMYWJlbD5cbiAgICAgICAgICB7dGhpcy5wcm9wcy50cmFuc2xhdGlvbnMuc2VsZWN0ZWRMaXN0TGFiZWx9XG4gICAgICAgIDwvQ29udHJvbExhYmVsPlxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgPC9Db2w+XG4gIClcblxuICByZW5kZXJBYXZhaWxhYmxlRGF0YUNvbnRlbnQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuc2luZ2xlQ29sdW1uKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29sIHhzPXs2fT5cbiAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICA8QXZhaWxhYmxlRGF0YUxpc3RcbiAgICAgICAgICAgIGl0ZW1zPXt0aGlzLnN0YXRlLmF2YWlsYWJsZURhdGFMaXN0fVxuICAgICAgICAgICAgb25TZWxlY3RJdGVtPXt0aGlzLmhhbmRsZVNlbGVjdEl0ZW19XG4gICAgICAgICAgICBvblVuc2VsZWN0SXRlbT17dGhpcy5oYW5kbGVVbnNlbGVjdEl0ZW19XG4gICAgICAgICAgICBzZWFyY2hLZXl3b3JkPXt0aGlzLnN0YXRlLmtleXdvcmR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICA8L0NvbD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyU2VsZWN0ZWRDb250ZW50ID0gKCkgPT4gKFxuICAgIDxDb2wgeHM9e3RoaXMucHJvcHMuc2luZ2xlQ29sdW1uID8gMTIgOiA2fT5cbiAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgIDxTZWxlY3RlZERhdGFMaXN0XG4gICAgICAgICAgaXRlbXM9e3RoaXMuc3RhdGUuc2VsZWN0ZWREYXRhTGlzdH1cbiAgICAgICAgICBvblNvcnRDaGFuZ2U9e3RoaXMuaGFuZGxlU29ydENoYW5nZX1cbiAgICAgICAgICBvblJlbW92ZUl0ZW09e3RoaXMuaGFuZGxlVW5zZWxlY3RJdGVtfVxuICAgICAgICAgIHNob3dSZW1vdmVJY29uPXshdGhpcy5wcm9wcy5zaW5nbGVDb2x1bW59XG4gICAgICAgIC8+XG4gICAgICA8L0Zvcm1Hcm91cD5cbiAgICA8L0NvbD5cbiAgKVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpZCA9IHRoaXMucHJvcHMuaWQgPyBgb2Mtc2VsZWN0LW9yZGVyLWxpc3QtJHt0aGlzLnByb3BzLmlkfWAgOiAnb2Mtc2VsZWN0LW9yZGVyLWxpc3QnO1xuICAgIHJldHVybiAoXG4gICAgICA8R3JpZCBpZD17aWR9IGZsdWlkPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIHt0aGlzLnJlbmRlclNlYXJjaEJhcigpfVxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJBYXZhaWxhYmxlRGF0YUhlYWRlcigpfVxuICAgICAgICAgIHt0aGlzLnJlbmRlclNlbGVjdGVkRGF0YUhlYWRlcigpfVxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJBYXZhaWxhYmxlRGF0YUNvbnRlbnQoKX1cbiAgICAgICAgICB7dGhpcy5yZW5kZXJTZWxlY3RlZENvbnRlbnQoKX1cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0dyaWQ+XG4gICAgKTtcbiAgfVxufVxuIl19