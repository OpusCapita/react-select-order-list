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

var _reactSearchbar = require('@opuscapita/react-searchbar');

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
      var visibleAvailableDataList = _data2.default.filterData(_this.state.availableDataList, keyword);
      _this.setState({ keyword: keyword, visibleAvailableDataList: visibleAvailableDataList });
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

    var availableDataList = _data2.default.getAvailableDataList(props.availableData, props.selectedData);
    _this.state = {
      availableDataList: availableDataList,
      selectedDataList: _data2.default.getSelectedDataList(props.selectedData),
      keyword: '',
      visibleAvailableDataList: availableDataList
    };
    return _this;
  }

  SelectOrderList.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (!nextProps.availableData.equals(this.props.availableData) || !nextProps.selectedData.equals(this.props.selectedData)) {
      var selectedDataList = _data2.default.getSelectedDataList(nextProps.selectedData);
      var availableDataList = _data2.default.getAvailableDataList(nextProps.availableData, nextProps.selectedData);
      this.setState({
        availableDataList: availableDataList,
        selectedDataList: selectedDataList,
        visibleAvailableDataList: _data2.default.filterData(availableDataList, this.state.keyword)
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
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 6 },
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            { className: 'oc-select-order-list-keyword-group' },
            _react2.default.createElement(_reactSearchbar.SearchBar, {
              dynamicSearchStartsFrom: 1,
              inputClassName: 'oc-select-order-list-keyword-input',
              onSearch: this.handleKeywordChange,
              searchPlaceHolder: this.props.searchPlaceholder,
              tooltip: this.props.translations.searchTooltip,
              value: this.state.keyword
            })
          )
        )
      ),
      _react2.default.createElement(
        _reactBootstrap.Row,
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
              this.props.translations.availableListLabel
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 2 },
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(
              _reactBootstrap.Checkbox,
              {
                className: 'oc-select-order-list-select-all-checkbox',
                checked: this.props.allSelected,
                onChange: this.handleAllSelectedChange
              },
              this.props.translations.allLabel
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 6 },
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            { className: 'oc-select-order-list-label' },
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              this.props.translations.selectedListLabel
            )
          )
        )
      ),
      _react2.default.createElement(
        _reactBootstrap.Row,
        null,
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 6 },
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(_availableDataList2.default, {
              items: this.state.visibleAvailableDataList,
              onSelectItem: this.handleSelectItem,
              onUnselectItem: this.handleUnselectItem
            })
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 6 },
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(_selectedDataList2.default, {
              items: this.state.selectedDataList,
              onSortChange: this.handleSortChange,
              onRemoveItem: this.handleUnselectItem
            })
          )
        )
      )
    );
  };

  return SelectOrderList;
}(_react2.default.PureComponent), _class.defaultProps = {
  allSelected: false,
  id: '',
  searchPlaceholder: 'Search...',
  selectedData: (0, _immutable.List)(),
  translations: {
    allLabel: '',
    availableListLabel: '',
    searchTooltip: null,
    selectedListLabel: ''
  }
}, _temp);
exports.default = SelectOrderList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWxlY3Qtb3JkZXItbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlNlbGVjdE9yZGVyTGlzdCIsInByb3BzIiwiaGFuZGxlQWxsU2VsZWN0ZWRDaGFuZ2UiLCJhbGxTZWxlY3RlZCIsInNlbGVjdGVkRGF0YSIsInN0YXRlIiwiYXZhaWxhYmxlRGF0YUxpc3QiLCJzZWxlY3RlZERhdGFMaXN0IiwiZmlsdGVyIiwiZGF0YSIsImlzTG9ja2VkIiwib25DaGFuZ2UiLCJoYW5kbGVLZXl3b3JkQ2hhbmdlIiwiZSIsImtleXdvcmQiLCJ2aXNpYmxlQXZhaWxhYmxlRGF0YUxpc3QiLCJmaWx0ZXJEYXRhIiwic2V0U3RhdGUiLCJoYW5kbGVTb3J0Q2hhbmdlIiwib2xkSW5kZXgiLCJuZXdJbmRleCIsImNoYW5nZURhdGFTb3J0IiwiaGFuZGxlU2VsZWN0SXRlbSIsIml0ZW0iLCJzaXplIiwiYXZhaWxhYmxlRGF0YSIsInB1c2giLCJoYW5kbGVVbnNlbGVjdEl0ZW0iLCJpIiwidmFsdWUiLCJnZXRBdmFpbGFibGVEYXRhTGlzdCIsImdldFNlbGVjdGVkRGF0YUxpc3QiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwiZXF1YWxzIiwicmVuZGVyIiwiaWQiLCJzZWFyY2hQbGFjZWhvbGRlciIsInRyYW5zbGF0aW9ucyIsInNlYXJjaFRvb2x0aXAiLCJhdmFpbGFibGVMaXN0TGFiZWwiLCJhbGxMYWJlbCIsInNlbGVjdGVkTGlzdExhYmVsIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7bUJBQUE7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQVFBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxlOzs7QUE2Qm5CLDJCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLGdDQUFNQSxLQUFOLENBRGlCOztB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RSxXQUZ0QjtBQUdFLDBCQUFVLEtBQUtEO0FBSGpCO0FBS0csbUJBQUtELEtBQUwsQ0FBV3FDLFlBQVgsQ0FBd0JHO0FBTDNCO0FBREY7QUFERixTQVJGO0FBbUJFO0FBQUE7QUFBQSxZQUFLLElBQUksQ0FBVDtBQUNFO0FBQUE7QUFBQSxjQUFXLFdBQVUsNEJBQXJCO0FBQ0U7QUFBQTtBQUFBO0FBQ0csbUJBQUt4QyxLQUFMLENBQVdxQyxZQUFYLENBQXdCSTtBQUQzQjtBQURGO0FBREY7QUFuQkYsT0FmRjtBQTBDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxJQUFJLENBQVQ7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUNFLHFCQUFPLEtBQUtyQyxLQUFMLENBQVdVLHdCQURwQjtBQUVFLDRCQUFjLEtBQUtPLGdCQUZyQjtBQUdFLDhCQUFnQixLQUFLSztBQUh2QjtBQURGO0FBREYsU0FERjtBQVVFO0FBQUE7QUFBQSxZQUFLLElBQUksQ0FBVDtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQ0UscUJBQU8sS0FBS3RCLEtBQUwsQ0FBV0UsZ0JBRHBCO0FBRUUsNEJBQWMsS0FBS1csZ0JBRnJCO0FBR0UsNEJBQWMsS0FBS1M7QUFIckI7QUFERjtBQURGO0FBVkY7QUExQ0YsS0FERjtBQWlFRCxHOzs7RUE3SjBDLGdCQUFNZ0IsYSxVQWdCMUNDLFksR0FBZTtBQUNwQnpDLGVBQWEsS0FETztBQUVwQmlDLE1BQUksRUFGZ0I7QUFHcEJDLHFCQUFtQixXQUhDO0FBSXBCakMsZ0JBQWMsc0JBSk07QUFLcEJrQyxnQkFBYztBQUNaRyxjQUFVLEVBREU7QUFFWkQsd0JBQW9CLEVBRlI7QUFHWkQsbUJBQWUsSUFISDtBQUlaRyx1QkFBbUI7QUFKUDtBQUxNLEM7a0JBaEJIMUMsZSIsImZpbGUiOiJzZWxlY3Qtb3JkZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1zdGF0aWMtZWxlbWVudC1pbnRlcmFjdGlvbnMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ2ltbXV0YWJsZSc7XG5pbXBvcnQgSW1tdXRhYmxlUHJvcFR5cGVzIGZyb20gJ3JlYWN0LWltbXV0YWJsZS1wcm9wdHlwZXMnO1xuaW1wb3J0IHtcbiAgQ2hlY2tib3gsXG4gIENvbCxcbiAgQ29udHJvbExhYmVsLFxuICBGb3JtR3JvdXAsXG4gIEdyaWQsXG4gIFJvdyxcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LXNlYXJjaGJhcic7XG5cbmltcG9ydCBBdmFpbGFibGVEYXRhTGlzdCBmcm9tICcuL2F2YWlsYWJsZS1kYXRhLWxpc3QvYXZhaWxhYmxlLWRhdGEtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IFNlbGVjdGVkRGF0YUxpc3QgZnJvbSAnLi9zZWxlY3RlZC1kYXRhLWxpc3Qvc2VsZWN0ZWQtZGF0YS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgVXRpbHMgZnJvbSAnLi9kYXRhLnV0aWxzJztcbmltcG9ydCAnLi9zZWxlY3Qtb3JkZXItbGlzdC5jb21wb25lbnQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdE9yZGVyTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGF2YWlsYWJsZURhdGE6IEltbXV0YWJsZVByb3BUeXBlcy5saXN0LmlzUmVxdWlyZWQsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgYWxsU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNlYXJjaFBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNlbGVjdGVkRGF0YTogSW1tdXRhYmxlUHJvcFR5cGVzLmxpc3QsXG4gICAgdHJhbnNsYXRpb25zOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgYWxsTGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgICBhdmFpbGFibGVMaXN0TGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgICBzZWFyY2hUb29sdGlwOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgICAgc2VsZWN0ZWRMaXN0TGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgfSksXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhbGxTZWxlY3RlZDogZmFsc2UsXG4gICAgaWQ6ICcnLFxuICAgIHNlYXJjaFBsYWNlaG9sZGVyOiAnU2VhcmNoLi4uJyxcbiAgICBzZWxlY3RlZERhdGE6IExpc3QoKSxcbiAgICB0cmFuc2xhdGlvbnM6IHtcbiAgICAgIGFsbExhYmVsOiAnJyxcbiAgICAgIGF2YWlsYWJsZUxpc3RMYWJlbDogJycsXG4gICAgICBzZWFyY2hUb29sdGlwOiBudWxsLFxuICAgICAgc2VsZWN0ZWRMaXN0TGFiZWw6ICcnLFxuICAgIH0sXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBhdmFpbGFibGVEYXRhTGlzdCA9IFV0aWxzLmdldEF2YWlsYWJsZURhdGFMaXN0KHByb3BzLmF2YWlsYWJsZURhdGEsIHByb3BzLnNlbGVjdGVkRGF0YSk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGF2YWlsYWJsZURhdGFMaXN0LFxuICAgICAgc2VsZWN0ZWREYXRhTGlzdDogVXRpbHMuZ2V0U2VsZWN0ZWREYXRhTGlzdChwcm9wcy5zZWxlY3RlZERhdGEpLFxuICAgICAga2V5d29yZDogJycsXG4gICAgICB2aXNpYmxlQXZhaWxhYmxlRGF0YUxpc3Q6IGF2YWlsYWJsZURhdGFMaXN0LFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICghbmV4dFByb3BzLmF2YWlsYWJsZURhdGEuZXF1YWxzKHRoaXMucHJvcHMuYXZhaWxhYmxlRGF0YSkgfHxcbiAgICAhbmV4dFByb3BzLnNlbGVjdGVkRGF0YS5lcXVhbHModGhpcy5wcm9wcy5zZWxlY3RlZERhdGEpKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZERhdGFMaXN0ID0gVXRpbHMuZ2V0U2VsZWN0ZWREYXRhTGlzdChuZXh0UHJvcHMuc2VsZWN0ZWREYXRhKTtcbiAgICAgIGNvbnN0IGF2YWlsYWJsZURhdGFMaXN0ID1cbiAgICAgICAgVXRpbHMuZ2V0QXZhaWxhYmxlRGF0YUxpc3QobmV4dFByb3BzLmF2YWlsYWJsZURhdGEsIG5leHRQcm9wcy5zZWxlY3RlZERhdGEpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGF2YWlsYWJsZURhdGFMaXN0LFxuICAgICAgICBzZWxlY3RlZERhdGFMaXN0LFxuICAgICAgICB2aXNpYmxlQXZhaWxhYmxlRGF0YUxpc3Q6IFV0aWxzLmZpbHRlckRhdGEoYXZhaWxhYmxlRGF0YUxpc3QsIHRoaXMuc3RhdGUua2V5d29yZCksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVBbGxTZWxlY3RlZENoYW5nZSA9ICgpID0+IHtcbiAgICBjb25zdCBhbGxTZWxlY3RlZCA9ICF0aGlzLnByb3BzLmFsbFNlbGVjdGVkO1xuICAgIGNvbnN0IHNlbGVjdGVkRGF0YSA9IGFsbFNlbGVjdGVkID8gdGhpcy5zdGF0ZS5hdmFpbGFibGVEYXRhTGlzdCA6XG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YUxpc3QuZmlsdGVyKGRhdGEgPT4gZGF0YS5pc0xvY2tlZCA9PT0gdHJ1ZSk7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IGFsbFNlbGVjdGVkLCBzZWxlY3RlZERhdGEgfSk7XG4gIH1cblxuICBoYW5kbGVLZXl3b3JkQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCBrZXl3b3JkID0gZTtcbiAgICBjb25zdCB2aXNpYmxlQXZhaWxhYmxlRGF0YUxpc3QgPSBVdGlscy5maWx0ZXJEYXRhKHRoaXMuc3RhdGUuYXZhaWxhYmxlRGF0YUxpc3QsIGtleXdvcmQpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBrZXl3b3JkLCB2aXNpYmxlQXZhaWxhYmxlRGF0YUxpc3QgfSk7XG4gIH1cblxuICBoYW5kbGVTb3J0Q2hhbmdlID0gKHsgb2xkSW5kZXgsIG5ld0luZGV4IH0pID0+IHtcbiAgICBpZiAobmV3SW5kZXggPT09IG51bGwgfHwgbmV3SW5kZXggPT09IG9sZEluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNlbGVjdGVkRGF0YSA9IFV0aWxzLmNoYW5nZURhdGFTb3J0KHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRhTGlzdCwgb2xkSW5kZXgsIG5ld0luZGV4KTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgc2VsZWN0ZWREYXRhLCBhbGxTZWxlY3RlZDogdGhpcy5wcm9wcy5hbGxTZWxlY3RlZCB9KTtcbiAgfVxuXG4gIGhhbmRsZVNlbGVjdEl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIC8vIGFkZCBzZWxlY3RlZCBpdGVtIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3RcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcbiAgICAgIGFsbFNlbGVjdGVkOiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YUxpc3Quc2l6ZSArIDEgPT09IHRoaXMucHJvcHMuYXZhaWxhYmxlRGF0YS5zaXplLFxuICAgICAgc2VsZWN0ZWREYXRhOiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YUxpc3QucHVzaChpdGVtKSxcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVVuc2VsZWN0SXRlbSA9IChpdGVtKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7XG4gICAgICBhbGxTZWxlY3RlZDogZmFsc2UsXG4gICAgICBzZWxlY3RlZERhdGE6IHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRhTGlzdC5maWx0ZXIoaSA9PiBpLnZhbHVlICE9PSBpdGVtLnZhbHVlKSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpZCA9IHRoaXMucHJvcHMuaWQgPyBgb2Mtc2VsZWN0LW9yZGVyLWxpc3QtJHt0aGlzLnByb3BzLmlkfWAgOiAnb2Mtc2VsZWN0LW9yZGVyLWxpc3QnO1xuICAgIHJldHVybiAoXG4gICAgICA8R3JpZCBpZD17aWR9IGZsdWlkPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgeHM9ezZ9PlxuICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1rZXl3b3JkLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxTZWFyY2hCYXJcbiAgICAgICAgICAgICAgICBkeW5hbWljU2VhcmNoU3RhcnRzRnJvbT17MX1cbiAgICAgICAgICAgICAgICBpbnB1dENsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWtleXdvcmQtaW5wdXRcIlxuICAgICAgICAgICAgICAgIG9uU2VhcmNoPXt0aGlzLmhhbmRsZUtleXdvcmRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgc2VhcmNoUGxhY2VIb2xkZXI9e3RoaXMucHJvcHMuc2VhcmNoUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgdG9vbHRpcD17dGhpcy5wcm9wcy50cmFuc2xhdGlvbnMuc2VhcmNoVG9vbHRpcH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5rZXl3b3JkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgeHM9ezR9PlxuICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1sYWJlbFwiPlxuICAgICAgICAgICAgICA8Q29udHJvbExhYmVsPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRyYW5zbGF0aW9ucy5hdmFpbGFibGVMaXN0TGFiZWx9XG4gICAgICAgICAgICAgIDwvQ29udHJvbExhYmVsPlxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCB4cz17Mn0+XG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1zZWxlY3QtYWxsLWNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLmFsbFNlbGVjdGVkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUFsbFNlbGVjdGVkQ2hhbmdlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMudHJhbnNsYXRpb25zLmFsbExhYmVsfVxuICAgICAgICAgICAgICA8L0NoZWNrYm94PlxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCB4cz17Nn0+XG4gICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWxhYmVsXCI+XG4gICAgICAgICAgICAgIDxDb250cm9sTGFiZWw+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMudHJhbnNsYXRpb25zLnNlbGVjdGVkTGlzdExhYmVsfVxuICAgICAgICAgICAgICA8L0NvbnRyb2xMYWJlbD5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHhzPXs2fT5cbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxBdmFpbGFibGVEYXRhTGlzdFxuICAgICAgICAgICAgICAgIGl0ZW1zPXt0aGlzLnN0YXRlLnZpc2libGVBdmFpbGFibGVEYXRhTGlzdH1cbiAgICAgICAgICAgICAgICBvblNlbGVjdEl0ZW09e3RoaXMuaGFuZGxlU2VsZWN0SXRlbX1cbiAgICAgICAgICAgICAgICBvblVuc2VsZWN0SXRlbT17dGhpcy5oYW5kbGVVbnNlbGVjdEl0ZW19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHhzPXs2fT5cbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxTZWxlY3RlZERhdGFMaXN0XG4gICAgICAgICAgICAgICAgaXRlbXM9e3RoaXMuc3RhdGUuc2VsZWN0ZWREYXRhTGlzdH1cbiAgICAgICAgICAgICAgICBvblNvcnRDaGFuZ2U9e3RoaXMuaGFuZGxlU29ydENoYW5nZX1cbiAgICAgICAgICAgICAgICBvblJlbW92ZUl0ZW09e3RoaXMuaGFuZGxlVW5zZWxlY3RJdGVtfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9HcmlkPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==