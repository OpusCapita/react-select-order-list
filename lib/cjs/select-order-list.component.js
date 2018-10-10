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
        _react2.default.Fragment,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWxlY3Qtb3JkZXItbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlNlbGVjdE9yZGVyTGlzdCIsInByb3BzIiwiaGFuZGxlQWxsU2VsZWN0ZWRDaGFuZ2UiLCJhbGxTZWxlY3RlZCIsInNlbGVjdGVkRGF0YSIsInN0YXRlIiwiYXZhaWxhYmxlRGF0YUxpc3QiLCJzZWxlY3RlZERhdGFMaXN0IiwiZmlsdGVyIiwiZGF0YSIsImlzTG9ja2VkIiwib25DaGFuZ2UiLCJoYW5kbGVLZXl3b3JkQ2hhbmdlIiwiZSIsImtleXdvcmQiLCJzZXRTdGF0ZSIsImhhbmRsZVNvcnRDaGFuZ2UiLCJvbGRJbmRleCIsIm5ld0luZGV4IiwiY2hhbmdlRGF0YVNvcnQiLCJoYW5kbGVTZWxlY3RJdGVtIiwiaXRlbSIsInNpemUiLCJhdmFpbGFibGVEYXRhIiwicHVzaCIsImhhbmRsZVVuc2VsZWN0SXRlbSIsImkiLCJ2YWx1ZSIsInJlbmRlclNlYXJjaEJhciIsInNpbmdsZUNvbHVtbiIsImNvbHVtbkNvdW50Iiwic2VhcmNoUGxhY2Vob2xkZXIiLCJ0cmFuc2xhdGlvbnMiLCJzZWFyY2hUb29sdGlwIiwicmVuZGVyQWF2YWlsYWJsZURhdGFIZWFkZXIiLCJhdmFpbGFibGVMaXN0TGFiZWwiLCJhbGxMYWJlbCIsInJlbmRlclNlbGVjdGVkRGF0YUhlYWRlciIsInNlbGVjdGVkTGlzdExhYmVsIiwicmVuZGVyQWF2YWlsYWJsZURhdGFDb250ZW50IiwicmVuZGVyU2VsZWN0ZWRDb250ZW50IiwiZ2V0QXZhaWxhYmxlRGF0YUxpc3QiLCJnZXRTZWxlY3RlZERhdGFMaXN0IiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsImVxdWFscyIsInJlbmRlciIsImlkIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7bUJBQUE7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztB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QUZZLE9BQWQ7QUFJRDtBQUNGLEc7OzRCQTRIRHVDLE0scUJBQVM7QUFDUCxRQUFNQyxLQUFLLEtBQUs5QyxLQUFMLENBQVc4QyxFQUFYLDZCQUF3QyxLQUFLOUMsS0FBTCxDQUFXOEMsRUFBbkQsR0FBMEQsc0JBQXJFO0FBQ0EsV0FDRTtBQUFBO0FBQUEsUUFBTSxJQUFJQSxFQUFWLEVBQWMsV0FBZDtBQUNFO0FBQUE7QUFBQTtBQUNHLGFBQUtuQixlQUFMO0FBREgsT0FERjtBQUlFO0FBQUE7QUFBQTtBQUNHLGFBQUtNLDBCQUFMLEVBREg7QUFFRyxhQUFLRyx3QkFBTDtBQUZILE9BSkY7QUFRRTtBQUFBO0FBQUE7QUFDRyxhQUFLRSwyQkFBTCxFQURIO0FBRUcsYUFBS0MscUJBQUw7QUFGSDtBQVJGLEtBREY7QUFlRCxHOzs7RUFsTTBDLGdCQUFNUSxhLFVBaUIxQ0MsWSxHQUFlO0FBQ3BCMUIsaUJBQWUsc0JBREs7QUFFcEJwQixlQUFhLEtBRk87QUFHcEI0QyxNQUFJLEVBSGdCO0FBSXBCaEIscUJBQW1CLFdBSkM7QUFLcEIzQixnQkFBYyxzQkFMTTtBQU1wQnlCLGdCQUFjLEtBTk07QUFPcEJHLGdCQUFjO0FBQ1pJLGNBQVUsRUFERTtBQUVaRCx3QkFBb0IsRUFGUjtBQUdaRixtQkFBZSxJQUhIO0FBSVpLLHVCQUFtQjtBQUpQO0FBUE0sQztrQkFqQkh0QyxlIiwiZmlsZSI6InNlbGVjdC1vcmRlci1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLXN0YXRpYy1lbGVtZW50LWludGVyYWN0aW9ucyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCBJbW11dGFibGVQcm9wVHlwZXMgZnJvbSAncmVhY3QtaW1tdXRhYmxlLXByb3B0eXBlcyc7XG5pbXBvcnQge1xuICBDb2wsXG4gIENvbnRyb2xMYWJlbCxcbiAgRm9ybUdyb3VwLFxuICBHcmlkLFxuICBSb3csXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtY2hlY2tib3gnO1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1zZWFyY2hiYXInO1xuXG5pbXBvcnQgQXZhaWxhYmxlRGF0YUxpc3QgZnJvbSAnLi9hdmFpbGFibGUtZGF0YS1saXN0L2F2YWlsYWJsZS1kYXRhLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCBTZWxlY3RlZERhdGFMaXN0IGZyb20gJy4vc2VsZWN0ZWQtZGF0YS1saXN0L3NlbGVjdGVkLWRhdGEtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IFV0aWxzIGZyb20gJy4vZGF0YS51dGlscyc7XG5pbXBvcnQgJy4vc2VsZWN0LW9yZGVyLWxpc3QuY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RPcmRlckxpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhdmFpbGFibGVEYXRhOiBJbW11dGFibGVQcm9wVHlwZXMubGlzdCxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBhbGxTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2luZ2xlQ29sdW1uOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZWxlY3RlZERhdGE6IEltbXV0YWJsZVByb3BUeXBlcy5saXN0LFxuICAgIHRyYW5zbGF0aW9uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGFsbExhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgICAgYXZhaWxhYmxlTGlzdExhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgICAgc2VhcmNoVG9vbHRpcDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICAgIHNlbGVjdGVkTGlzdExhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgIH0pLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYXZhaWxhYmxlRGF0YTogTGlzdCgpLFxuICAgIGFsbFNlbGVjdGVkOiBmYWxzZSxcbiAgICBpZDogJycsXG4gICAgc2VhcmNoUGxhY2Vob2xkZXI6ICdTZWFyY2guLi4nLFxuICAgIHNlbGVjdGVkRGF0YTogTGlzdCgpLFxuICAgIHNpbmdsZUNvbHVtbjogZmFsc2UsXG4gICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICBhbGxMYWJlbDogJycsXG4gICAgICBhdmFpbGFibGVMaXN0TGFiZWw6ICcnLFxuICAgICAgc2VhcmNoVG9vbHRpcDogbnVsbCxcbiAgICAgIHNlbGVjdGVkTGlzdExhYmVsOiAnJyxcbiAgICB9LFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgYXZhaWxhYmxlRGF0YUxpc3QgPSBVdGlscy5nZXRBdmFpbGFibGVEYXRhTGlzdChwcm9wcy5hdmFpbGFibGVEYXRhLCBwcm9wcy5zZWxlY3RlZERhdGEpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhdmFpbGFibGVEYXRhTGlzdCxcbiAgICAgIHNlbGVjdGVkRGF0YUxpc3Q6IFV0aWxzLmdldFNlbGVjdGVkRGF0YUxpc3QocHJvcHMuc2VsZWN0ZWREYXRhKSxcbiAgICAgIGtleXdvcmQ6ICcnLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICghbmV4dFByb3BzLmF2YWlsYWJsZURhdGEuZXF1YWxzKHRoaXMucHJvcHMuYXZhaWxhYmxlRGF0YSkgfHxcbiAgICAhbmV4dFByb3BzLnNlbGVjdGVkRGF0YS5lcXVhbHModGhpcy5wcm9wcy5zZWxlY3RlZERhdGEpKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZERhdGFMaXN0ID0gVXRpbHMuZ2V0U2VsZWN0ZWREYXRhTGlzdChuZXh0UHJvcHMuc2VsZWN0ZWREYXRhKTtcbiAgICAgIGNvbnN0IGF2YWlsYWJsZURhdGFMaXN0ID1cbiAgICAgICAgVXRpbHMuZ2V0QXZhaWxhYmxlRGF0YUxpc3QobmV4dFByb3BzLmF2YWlsYWJsZURhdGEsIG5leHRQcm9wcy5zZWxlY3RlZERhdGEpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGF2YWlsYWJsZURhdGFMaXN0LFxuICAgICAgICBzZWxlY3RlZERhdGFMaXN0LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQWxsU2VsZWN0ZWRDaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgYWxsU2VsZWN0ZWQgPSAhdGhpcy5wcm9wcy5hbGxTZWxlY3RlZDtcbiAgICBjb25zdCBzZWxlY3RlZERhdGEgPSBhbGxTZWxlY3RlZCA/IHRoaXMuc3RhdGUuYXZhaWxhYmxlRGF0YUxpc3QgOlxuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFMaXN0LmZpbHRlcihkYXRhID0+IGRhdGEuaXNMb2NrZWQgPT09IHRydWUpO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoeyBhbGxTZWxlY3RlZCwgc2VsZWN0ZWREYXRhIH0pO1xuICB9XG5cbiAgaGFuZGxlS2V5d29yZENoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3Qga2V5d29yZCA9IGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGtleXdvcmQgfSk7XG4gIH1cblxuICBoYW5kbGVTb3J0Q2hhbmdlID0gKHsgb2xkSW5kZXgsIG5ld0luZGV4IH0pID0+IHtcbiAgICBpZiAobmV3SW5kZXggPT09IG51bGwgfHwgbmV3SW5kZXggPT09IG9sZEluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNlbGVjdGVkRGF0YSA9IFV0aWxzLmNoYW5nZURhdGFTb3J0KHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRhTGlzdCwgb2xkSW5kZXgsIG5ld0luZGV4KTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgc2VsZWN0ZWREYXRhLCBhbGxTZWxlY3RlZDogdGhpcy5wcm9wcy5hbGxTZWxlY3RlZCB9KTtcbiAgfVxuXG4gIGhhbmRsZVNlbGVjdEl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIC8vIGFkZCBzZWxlY3RlZCBpdGVtIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3RcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcbiAgICAgIGFsbFNlbGVjdGVkOiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YUxpc3Quc2l6ZSArIDEgPT09IHRoaXMucHJvcHMuYXZhaWxhYmxlRGF0YS5zaXplLFxuICAgICAgc2VsZWN0ZWREYXRhOiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YUxpc3QucHVzaChpdGVtKSxcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVVuc2VsZWN0SXRlbSA9IChpdGVtKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7XG4gICAgICBhbGxTZWxlY3RlZDogZmFsc2UsXG4gICAgICBzZWxlY3RlZERhdGE6IHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRhTGlzdC5maWx0ZXIoaSA9PiBpLnZhbHVlICE9PSBpdGVtLnZhbHVlKSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlclNlYXJjaEJhciA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNpbmdsZUNvbHVtbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjb2x1bW5Db3VudCA9IHNpbmdsZUNvbHVtbiA/IDEyIDogNjtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbCB4cz17Y29sdW1uQ291bnR9PlxuICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWtleXdvcmQtZ3JvdXBcIj5cbiAgICAgICAgICB7IHNpbmdsZUNvbHVtbiB8fFxuICAgICAgICAgICAgPFNlYXJjaEJhclxuICAgICAgICAgICAgICBkeW5hbWljU2VhcmNoU3RhcnRzRnJvbT17MX1cbiAgICAgICAgICAgICAgaW5wdXRDbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1rZXl3b3JkLWlucHV0XCJcbiAgICAgICAgICAgICAgb25TZWFyY2g9e3RoaXMuaGFuZGxlS2V5d29yZENoYW5nZX1cbiAgICAgICAgICAgICAgc2VhcmNoUGxhY2VIb2xkZXI9e3RoaXMucHJvcHMuc2VhcmNoUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIHRvb2x0aXA9e3RoaXMucHJvcHMudHJhbnNsYXRpb25zLnNlYXJjaFRvb2x0aXB9XG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmtleXdvcmR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICA8L0NvbD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyQWF2YWlsYWJsZURhdGFIZWFkZXIgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuc2luZ2xlQ29sdW1uKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxDb2wgeHM9ezR9PlxuICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3QtbGFiZWxcIj5cbiAgICAgICAgICAgIDxDb250cm9sTGFiZWw+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRyYW5zbGF0aW9ucy5hdmFpbGFibGVMaXN0TGFiZWx9XG4gICAgICAgICAgICA8L0NvbnRyb2xMYWJlbD5cbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgeHM9ezJ9PlxuICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3Qtc2VsZWN0LWFsbC1jaGVja2JveFwiXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMucHJvcHMuYWxsU2VsZWN0ZWR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUFsbFNlbGVjdGVkQ2hhbmdlfVxuICAgICAgICAgICAgICBsYWJlbD17dGhpcy5wcm9wcy50cmFuc2xhdGlvbnMuYWxsTGFiZWx9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclNlbGVjdGVkRGF0YUhlYWRlciA9ICgpID0+IChcbiAgICA8Q29sIHhzPXt0aGlzLnByb3BzLnNpbmdsZUNvbHVtbiA/IDEyIDogNn0+XG4gICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWxhYmVsXCI+XG4gICAgICAgIDxDb250cm9sTGFiZWw+XG4gICAgICAgICAge3RoaXMucHJvcHMudHJhbnNsYXRpb25zLnNlbGVjdGVkTGlzdExhYmVsfVxuICAgICAgICA8L0NvbnRyb2xMYWJlbD5cbiAgICAgIDwvRm9ybUdyb3VwPlxuICAgIDwvQ29sPlxuICApXG5cbiAgcmVuZGVyQWF2YWlsYWJsZURhdGFDb250ZW50ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLnNpbmdsZUNvbHVtbikgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbCB4cz17Nn0+XG4gICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgPEF2YWlsYWJsZURhdGFMaXN0XG4gICAgICAgICAgICBpdGVtcz17dGhpcy5zdGF0ZS5hdmFpbGFibGVEYXRhTGlzdH1cbiAgICAgICAgICAgIG9uU2VsZWN0SXRlbT17dGhpcy5oYW5kbGVTZWxlY3RJdGVtfVxuICAgICAgICAgICAgb25VbnNlbGVjdEl0ZW09e3RoaXMuaGFuZGxlVW5zZWxlY3RJdGVtfVxuICAgICAgICAgICAgc2VhcmNoS2V5d29yZD17dGhpcy5zdGF0ZS5rZXl3b3JkfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgPC9Db2w+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclNlbGVjdGVkQ29udGVudCA9ICgpID0+IChcbiAgICA8Q29sIHhzPXt0aGlzLnByb3BzLnNpbmdsZUNvbHVtbiA/IDEyIDogNn0+XG4gICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICA8U2VsZWN0ZWREYXRhTGlzdFxuICAgICAgICAgIGl0ZW1zPXt0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YUxpc3R9XG4gICAgICAgICAgb25Tb3J0Q2hhbmdlPXt0aGlzLmhhbmRsZVNvcnRDaGFuZ2V9XG4gICAgICAgICAgb25SZW1vdmVJdGVtPXt0aGlzLmhhbmRsZVVuc2VsZWN0SXRlbX1cbiAgICAgICAgICBzaG93UmVtb3ZlSWNvbj17IXRoaXMucHJvcHMuc2luZ2xlQ29sdW1ufVxuICAgICAgICAvPlxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgPC9Db2w+XG4gIClcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLmlkID8gYG9jLXNlbGVjdC1vcmRlci1saXN0LSR7dGhpcy5wcm9wcy5pZH1gIDogJ29jLXNlbGVjdC1vcmRlci1saXN0JztcbiAgICByZXR1cm4gKFxuICAgICAgPEdyaWQgaWQ9e2lkfSBmbHVpZD5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJTZWFyY2hCYXIoKX1cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAge3RoaXMucmVuZGVyQWF2YWlsYWJsZURhdGFIZWFkZXIoKX1cbiAgICAgICAgICB7dGhpcy5yZW5kZXJTZWxlY3RlZERhdGFIZWFkZXIoKX1cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAge3RoaXMucmVuZGVyQWF2YWlsYWJsZURhdGFDb250ZW50KCl9XG4gICAgICAgICAge3RoaXMucmVuZGVyU2VsZWN0ZWRDb250ZW50KCl9XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9HcmlkPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==