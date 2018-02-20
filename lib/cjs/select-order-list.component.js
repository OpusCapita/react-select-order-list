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
              this.props.availableListLabel
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
              this.props.allLabel
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
              this.props.selectedListLabel
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
  allLabel: '',
  allSelected: false,
  availableListLabel: '',
  id: '',
  searchPlaceholder: 'Search...',
  selectedData: (0, _immutable.List)(),
  selectedListLabel: ''
}, _temp);
exports.default = SelectOrderList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWxlY3Qtb3JkZXItbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlNlbGVjdE9yZGVyTGlzdCIsInByb3BzIiwiaGFuZGxlQWxsU2VsZWN0ZWRDaGFuZ2UiLCJhbGxTZWxlY3RlZCIsInNlbGVjdGVkRGF0YSIsInN0YXRlIiwiYXZhaWxhYmxlRGF0YUxpc3QiLCJzZWxlY3RlZERhdGFMaXN0IiwiZmlsdGVyIiwiZGF0YSIsImlzTG9ja2VkIiwib25DaGFuZ2UiLCJoYW5kbGVLZXl3b3JkQ2hhbmdlIiwiZSIsImtleXdvcmQiLCJ2aXNpYmxlQXZhaWxhYmxlRGF0YUxpc3QiLCJmaWx0ZXJEYXRhIiwic2V0U3RhdGUiLCJoYW5kbGVTb3J0Q2hhbmdlIiwib2xkSW5kZXgiLCJuZXdJbmRleCIsImNoYW5nZURhdGFTb3J0IiwiaGFuZGxlU2VsZWN0SXRlbSIsIml0ZW0iLCJzaXplIiwiYXZhaWxhYmxlRGF0YSIsInB1c2giLCJoYW5kbGVVbnNlbGVjdEl0ZW0iLCJpIiwidmFsdWUiLCJnZXRBdmFpbGFibGVEYXRhTGlzdCIsImdldFNlbGVjdGVkRGF0YUxpc3QiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwiZXF1YWxzIiwicmVuZGVyIiwiaWQiLCJzZWFyY2hQbGFjZWhvbGRlciIsImF2YWlsYWJsZUxpc3RMYWJlbCIsImFsbExhYmVsIiwic2VsZWN0ZWRMaXN0TGFiZWwiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7OzttQkFBQTs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBUUE7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLGU7OztBQXVCbkIsMkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpREFDakIsZ0NBQU1BLEtBQU4sQ0FEaUI7O0FBQUEsVUF5Qm5CQyx1QkF6Qm1CLEdBeUJPLFlBQU07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QUFLLElBQUksQ0FBVDtBQUNFO0FBQUE7QUFBQSxjQUFXLFdBQVUsNEJBQXJCO0FBQ0U7QUFBQTtBQUFBO0FBQ0csbUJBQUt0QyxLQUFMLENBQVd1QztBQURkO0FBREY7QUFERjtBQW5CRixPQWRGO0FBeUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFLLElBQUksQ0FBVDtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQ0UscUJBQU8sS0FBS25DLEtBQUwsQ0FBV1Usd0JBRHBCO0FBRUUsNEJBQWMsS0FBS08sZ0JBRnJCO0FBR0UsOEJBQWdCLEtBQUtLO0FBSHZCO0FBREY7QUFERixTQURGO0FBVUU7QUFBQTtBQUFBLFlBQUssSUFBSSxDQUFUO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFDRSxxQkFBTyxLQUFLdEIsS0FBTCxDQUFXRSxnQkFEcEI7QUFFRSw0QkFBYyxLQUFLVyxnQkFGckI7QUFHRSw0QkFBYyxLQUFLUztBQUhyQjtBQURGO0FBREY7QUFWRjtBQXpDRixLQURGO0FBZ0VELEc7OztFQXRKMEMsZ0JBQU1jLGEsVUFhMUNDLFksR0FBZTtBQUNwQkgsWUFBVSxFQURVO0FBRXBCcEMsZUFBYSxLQUZPO0FBR3BCbUMsc0JBQW9CLEVBSEE7QUFJcEJGLE1BQUksRUFKZ0I7QUFLcEJDLHFCQUFtQixXQUxDO0FBTXBCakMsZ0JBQWMsc0JBTk07QUFPcEJvQyxxQkFBbUI7QUFQQyxDO2tCQWJIeEMsZSIsImZpbGUiOiJzZWxlY3Qtb3JkZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1zdGF0aWMtZWxlbWVudC1pbnRlcmFjdGlvbnMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ2ltbXV0YWJsZSc7XG5pbXBvcnQgSW1tdXRhYmxlUHJvcFR5cGVzIGZyb20gJ3JlYWN0LWltbXV0YWJsZS1wcm9wdHlwZXMnO1xuaW1wb3J0IHtcbiAgQ2hlY2tib3gsXG4gIENvbCxcbiAgQ29udHJvbExhYmVsLFxuICBGb3JtR3JvdXAsXG4gIEdyaWQsXG4gIFJvdyxcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LXNlYXJjaGJhcic7XG5cbmltcG9ydCBBdmFpbGFibGVEYXRhTGlzdCBmcm9tICcuL2F2YWlsYWJsZS1kYXRhLWxpc3QvYXZhaWxhYmxlLWRhdGEtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IFNlbGVjdGVkRGF0YUxpc3QgZnJvbSAnLi9zZWxlY3RlZC1kYXRhLWxpc3Qvc2VsZWN0ZWQtZGF0YS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgVXRpbHMgZnJvbSAnLi9kYXRhLnV0aWxzJztcbmltcG9ydCAnLi9zZWxlY3Qtb3JkZXItbGlzdC5jb21wb25lbnQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdE9yZGVyTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGF2YWlsYWJsZURhdGE6IEltbXV0YWJsZVByb3BUeXBlcy5saXN0LmlzUmVxdWlyZWQsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgYWxsTGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgYWxsU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGF2YWlsYWJsZUxpc3RMYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZWxlY3RlZERhdGE6IEltbXV0YWJsZVByb3BUeXBlcy5saXN0LFxuICAgIHNlbGVjdGVkTGlzdExhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYWxsTGFiZWw6ICcnLFxuICAgIGFsbFNlbGVjdGVkOiBmYWxzZSxcbiAgICBhdmFpbGFibGVMaXN0TGFiZWw6ICcnLFxuICAgIGlkOiAnJyxcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogJ1NlYXJjaC4uLicsXG4gICAgc2VsZWN0ZWREYXRhOiBMaXN0KCksXG4gICAgc2VsZWN0ZWRMaXN0TGFiZWw6ICcnLFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgYXZhaWxhYmxlRGF0YUxpc3QgPSBVdGlscy5nZXRBdmFpbGFibGVEYXRhTGlzdChwcm9wcy5hdmFpbGFibGVEYXRhLCBwcm9wcy5zZWxlY3RlZERhdGEpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhdmFpbGFibGVEYXRhTGlzdCxcbiAgICAgIHNlbGVjdGVkRGF0YUxpc3Q6IFV0aWxzLmdldFNlbGVjdGVkRGF0YUxpc3QocHJvcHMuc2VsZWN0ZWREYXRhKSxcbiAgICAgIGtleXdvcmQ6ICcnLFxuICAgICAgdmlzaWJsZUF2YWlsYWJsZURhdGFMaXN0OiBhdmFpbGFibGVEYXRhTGlzdCxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAoIW5leHRQcm9wcy5hdmFpbGFibGVEYXRhLmVxdWFscyh0aGlzLnByb3BzLmF2YWlsYWJsZURhdGEpIHx8XG4gICAgIW5leHRQcm9wcy5zZWxlY3RlZERhdGEuZXF1YWxzKHRoaXMucHJvcHMuc2VsZWN0ZWREYXRhKSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWREYXRhTGlzdCA9IFV0aWxzLmdldFNlbGVjdGVkRGF0YUxpc3QobmV4dFByb3BzLnNlbGVjdGVkRGF0YSk7XG4gICAgICBjb25zdCBhdmFpbGFibGVEYXRhTGlzdCA9XG4gICAgICAgIFV0aWxzLmdldEF2YWlsYWJsZURhdGFMaXN0KG5leHRQcm9wcy5hdmFpbGFibGVEYXRhLCBuZXh0UHJvcHMuc2VsZWN0ZWREYXRhKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhdmFpbGFibGVEYXRhTGlzdCxcbiAgICAgICAgc2VsZWN0ZWREYXRhTGlzdCxcbiAgICAgICAgdmlzaWJsZUF2YWlsYWJsZURhdGFMaXN0OiBVdGlscy5maWx0ZXJEYXRhKGF2YWlsYWJsZURhdGFMaXN0LCB0aGlzLnN0YXRlLmtleXdvcmQpLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQWxsU2VsZWN0ZWRDaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgYWxsU2VsZWN0ZWQgPSAhdGhpcy5wcm9wcy5hbGxTZWxlY3RlZDtcbiAgICBjb25zdCBzZWxlY3RlZERhdGEgPSBhbGxTZWxlY3RlZCA/IHRoaXMuc3RhdGUuYXZhaWxhYmxlRGF0YUxpc3QgOlxuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFMaXN0LmZpbHRlcihkYXRhID0+IGRhdGEuaXNMb2NrZWQgPT09IHRydWUpO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoeyBhbGxTZWxlY3RlZCwgc2VsZWN0ZWREYXRhIH0pO1xuICB9XG5cbiAgaGFuZGxlS2V5d29yZENoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3Qga2V5d29yZCA9IGU7XG4gICAgY29uc3QgdmlzaWJsZUF2YWlsYWJsZURhdGFMaXN0ID0gVXRpbHMuZmlsdGVyRGF0YSh0aGlzLnN0YXRlLmF2YWlsYWJsZURhdGFMaXN0LCBrZXl3b3JkKTtcbiAgICB0aGlzLnNldFN0YXRlKHsga2V5d29yZCwgdmlzaWJsZUF2YWlsYWJsZURhdGFMaXN0IH0pO1xuICB9XG5cbiAgaGFuZGxlU29ydENoYW5nZSA9ICh7IG9sZEluZGV4LCBuZXdJbmRleCB9KSA9PiB7XG4gICAgaWYgKG5ld0luZGV4ID09PSBudWxsIHx8IG5ld0luZGV4ID09PSBvbGRJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzZWxlY3RlZERhdGEgPSBVdGlscy5jaGFuZ2VEYXRhU29ydCh0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YUxpc3QsIG9sZEluZGV4LCBuZXdJbmRleCk7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IHNlbGVjdGVkRGF0YSwgYWxsU2VsZWN0ZWQ6IHRoaXMucHJvcHMuYWxsU2VsZWN0ZWQgfSk7XG4gIH1cblxuICBoYW5kbGVTZWxlY3RJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAvLyBhZGQgc2VsZWN0ZWQgaXRlbSB0byB0aGUgZW5kIG9mIHRoZSBsaXN0XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7XG4gICAgICBhbGxTZWxlY3RlZDogdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFMaXN0LnNpemUgKyAxID09PSB0aGlzLnByb3BzLmF2YWlsYWJsZURhdGEuc2l6ZSxcbiAgICAgIHNlbGVjdGVkRGF0YTogdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFMaXN0LnB1c2goaXRlbSksXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVVbnNlbGVjdEl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xuICAgICAgYWxsU2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgc2VsZWN0ZWREYXRhOiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YUxpc3QuZmlsdGVyKGkgPT4gaS52YWx1ZSAhPT0gaXRlbS52YWx1ZSksXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLmlkID8gYG9jLXNlbGVjdC1vcmRlci1saXN0LSR7dGhpcy5wcm9wcy5pZH1gIDogJ29jLXNlbGVjdC1vcmRlci1saXN0JztcbiAgICByZXR1cm4gKFxuICAgICAgPEdyaWQgaWQ9e2lkfSBmbHVpZD5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHhzPXs2fT5cbiAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3Qta2V5d29yZC1ncm91cFwiPlxuICAgICAgICAgICAgICA8U2VhcmNoQmFyXG4gICAgICAgICAgICAgICAgZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb209ezF9XG4gICAgICAgICAgICAgICAgaW5wdXRDbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1rZXl3b3JkLWlucHV0XCJcbiAgICAgICAgICAgICAgICBvblNlYXJjaD17dGhpcy5oYW5kbGVLZXl3b3JkQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHNlYXJjaFBsYWNlSG9sZGVyPXt0aGlzLnByb3BzLnNlYXJjaFBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmtleXdvcmR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCB4cz17NH0+XG4gICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWxhYmVsXCI+XG4gICAgICAgICAgICAgIDxDb250cm9sTGFiZWw+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYXZhaWxhYmxlTGlzdExhYmVsfVxuICAgICAgICAgICAgICA8L0NvbnRyb2xMYWJlbD5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezJ9PlxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3Qtc2VsZWN0LWFsbC1jaGVja2JveFwiXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5hbGxTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVBbGxTZWxlY3RlZENoYW5nZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmFsbExhYmVsfVxuICAgICAgICAgICAgICA8L0NoZWNrYm94PlxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCB4cz17Nn0+XG4gICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWxhYmVsXCI+XG4gICAgICAgICAgICAgIDxDb250cm9sTGFiZWw+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2VsZWN0ZWRMaXN0TGFiZWx9XG4gICAgICAgICAgICAgIDwvQ29udHJvbExhYmVsPlxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgeHM9ezZ9PlxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgPEF2YWlsYWJsZURhdGFMaXN0XG4gICAgICAgICAgICAgICAgaXRlbXM9e3RoaXMuc3RhdGUudmlzaWJsZUF2YWlsYWJsZURhdGFMaXN0fVxuICAgICAgICAgICAgICAgIG9uU2VsZWN0SXRlbT17dGhpcy5oYW5kbGVTZWxlY3RJdGVtfVxuICAgICAgICAgICAgICAgIG9uVW5zZWxlY3RJdGVtPXt0aGlzLmhhbmRsZVVuc2VsZWN0SXRlbX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezZ9PlxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgPFNlbGVjdGVkRGF0YUxpc3RcbiAgICAgICAgICAgICAgICBpdGVtcz17dGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFMaXN0fVxuICAgICAgICAgICAgICAgIG9uU29ydENoYW5nZT17dGhpcy5oYW5kbGVTb3J0Q2hhbmdlfVxuICAgICAgICAgICAgICAgIG9uUmVtb3ZlSXRlbT17dGhpcy5oYW5kbGVVbnNlbGVjdEl0ZW19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0dyaWQ+XG4gICAgKTtcbiAgfVxufVxuIl19