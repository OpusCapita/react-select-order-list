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
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 6 },
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            { className: 'oc-select-order-list-keyword-group' },
            _react2.default.createElement(_reactSearchbar2.default, {
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
            _react2.default.createElement(_reactCheckbox2.default, {
              className: 'oc-select-order-list-select-all-checkbox',
              checked: this.props.allSelected,
              onChange: this.handleAllSelectedChange,
              label: this.props.translations.allLabel
            })
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
              items: this.state.availableDataList,
              onSelectItem: this.handleSelectItem,
              onUnselectItem: this.handleUnselectItem,
              searchKeyword: this.state.keyword
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWxlY3Qtb3JkZXItbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlNlbGVjdE9yZGVyTGlzdCIsInByb3BzIiwiaGFuZGxlQWxsU2VsZWN0ZWRDaGFuZ2UiLCJhbGxTZWxlY3RlZCIsInNlbGVjdGVkRGF0YSIsInN0YXRlIiwiYXZhaWxhYmxlRGF0YUxpc3QiLCJzZWxlY3RlZERhdGFMaXN0IiwiZmlsdGVyIiwiZGF0YSIsImlzTG9ja2VkIiwib25DaGFuZ2UiLCJoYW5kbGVLZXl3b3JkQ2hhbmdlIiwiZSIsImtleXdvcmQiLCJzZXRTdGF0ZSIsImhhbmRsZVNvcnRDaGFuZ2UiLCJvbGRJbmRleCIsIm5ld0luZGV4IiwiY2hhbmdlRGF0YVNvcnQiLCJoYW5kbGVTZWxlY3RJdGVtIiwiaXRlbSIsInNpemUiLCJhdmFpbGFibGVEYXRhIiwicHVzaCIsImhhbmRsZVVuc2VsZWN0SXRlbSIsImkiLCJ2YWx1ZSIsImdldEF2YWlsYWJsZURhdGFMaXN0IiwiZ2V0U2VsZWN0ZWREYXRhTGlzdCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJlcXVhbHMiLCJyZW5kZXIiLCJpZCIsInNlYXJjaFBsYWNlaG9sZGVyIiwidHJhbnNsYXRpb25zIiwic2VhcmNoVG9vbHRpcCIsImF2YWlsYWJsZUxpc3RMYWJlbCIsImFsbExhYmVsIiwic2VsZWN0ZWRMaXN0TGFiZWwiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7OzttQkFBQTs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBT0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxlOzs7QUE2Qm5CLDJCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLGdDQUFNQSxLQUFOLENBRGlCOztBQUFBLFVBdUJuQkMsdUJBdkJtQixHQXVCTyxZQUFN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QUFsQkYsT0FmRjtBQXlDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxJQUFJLENBQVQ7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUNFLHFCQUFPLEtBQUtuQyxLQUFMLENBQVdDLGlCQURwQjtBQUVFLDRCQUFjLEtBQUtjLGdCQUZyQjtBQUdFLDhCQUFnQixLQUFLSyxrQkFIdkI7QUFJRSw2QkFBZSxLQUFLcEIsS0FBTCxDQUFXUztBQUo1QjtBQURGO0FBREYsU0FERjtBQVdFO0FBQUE7QUFBQSxZQUFLLElBQUksQ0FBVDtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQ0UscUJBQU8sS0FBS1QsS0FBTCxDQUFXRSxnQkFEcEI7QUFFRSw0QkFBYyxLQUFLUyxnQkFGckI7QUFHRSw0QkFBYyxLQUFLUztBQUhyQjtBQURGO0FBREY7QUFYRjtBQXpDRixLQURGO0FBaUVELEc7OztFQTFKMEMsZ0JBQU1nQixhLFVBZ0IxQ0MsWSxHQUFlO0FBQ3BCdkMsZUFBYSxLQURPO0FBRXBCK0IsTUFBSSxFQUZnQjtBQUdwQkMscUJBQW1CLFdBSEM7QUFJcEIvQixnQkFBYyxzQkFKTTtBQUtwQmdDLGdCQUFjO0FBQ1pHLGNBQVUsRUFERTtBQUVaRCx3QkFBb0IsRUFGUjtBQUdaRCxtQkFBZSxJQUhIO0FBSVpHLHVCQUFtQjtBQUpQO0FBTE0sQztrQkFoQkh4QyxlIiwiZmlsZSI6InNlbGVjdC1vcmRlci1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLXN0YXRpYy1lbGVtZW50LWludGVyYWN0aW9ucyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCBJbW11dGFibGVQcm9wVHlwZXMgZnJvbSAncmVhY3QtaW1tdXRhYmxlLXByb3B0eXBlcyc7XG5pbXBvcnQge1xuICBDb2wsXG4gIENvbnRyb2xMYWJlbCxcbiAgRm9ybUdyb3VwLFxuICBHcmlkLFxuICBSb3csXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtY2hlY2tib3gnO1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1zZWFyY2hiYXInO1xuXG5pbXBvcnQgQXZhaWxhYmxlRGF0YUxpc3QgZnJvbSAnLi9hdmFpbGFibGUtZGF0YS1saXN0L2F2YWlsYWJsZS1kYXRhLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCBTZWxlY3RlZERhdGFMaXN0IGZyb20gJy4vc2VsZWN0ZWQtZGF0YS1saXN0L3NlbGVjdGVkLWRhdGEtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IFV0aWxzIGZyb20gJy4vZGF0YS51dGlscyc7XG5pbXBvcnQgJy4vc2VsZWN0LW9yZGVyLWxpc3QuY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RPcmRlckxpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhdmFpbGFibGVEYXRhOiBJbW11dGFibGVQcm9wVHlwZXMubGlzdC5pc1JlcXVpcmVkLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGFsbFNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZWxlY3RlZERhdGE6IEltbXV0YWJsZVByb3BUeXBlcy5saXN0LFxuICAgIHRyYW5zbGF0aW9uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGFsbExhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgICAgYXZhaWxhYmxlTGlzdExhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgICAgc2VhcmNoVG9vbHRpcDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICAgIHNlbGVjdGVkTGlzdExhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgIH0pLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYWxsU2VsZWN0ZWQ6IGZhbHNlLFxuICAgIGlkOiAnJyxcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogJ1NlYXJjaC4uLicsXG4gICAgc2VsZWN0ZWREYXRhOiBMaXN0KCksXG4gICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICBhbGxMYWJlbDogJycsXG4gICAgICBhdmFpbGFibGVMaXN0TGFiZWw6ICcnLFxuICAgICAgc2VhcmNoVG9vbHRpcDogbnVsbCxcbiAgICAgIHNlbGVjdGVkTGlzdExhYmVsOiAnJyxcbiAgICB9LFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgYXZhaWxhYmxlRGF0YUxpc3QgPSBVdGlscy5nZXRBdmFpbGFibGVEYXRhTGlzdChwcm9wcy5hdmFpbGFibGVEYXRhLCBwcm9wcy5zZWxlY3RlZERhdGEpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhdmFpbGFibGVEYXRhTGlzdCxcbiAgICAgIHNlbGVjdGVkRGF0YUxpc3Q6IFV0aWxzLmdldFNlbGVjdGVkRGF0YUxpc3QocHJvcHMuc2VsZWN0ZWREYXRhKSxcbiAgICAgIGtleXdvcmQ6ICcnLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICghbmV4dFByb3BzLmF2YWlsYWJsZURhdGEuZXF1YWxzKHRoaXMucHJvcHMuYXZhaWxhYmxlRGF0YSkgfHxcbiAgICAhbmV4dFByb3BzLnNlbGVjdGVkRGF0YS5lcXVhbHModGhpcy5wcm9wcy5zZWxlY3RlZERhdGEpKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZERhdGFMaXN0ID0gVXRpbHMuZ2V0U2VsZWN0ZWREYXRhTGlzdChuZXh0UHJvcHMuc2VsZWN0ZWREYXRhKTtcbiAgICAgIGNvbnN0IGF2YWlsYWJsZURhdGFMaXN0ID1cbiAgICAgICAgVXRpbHMuZ2V0QXZhaWxhYmxlRGF0YUxpc3QobmV4dFByb3BzLmF2YWlsYWJsZURhdGEsIG5leHRQcm9wcy5zZWxlY3RlZERhdGEpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGF2YWlsYWJsZURhdGFMaXN0LFxuICAgICAgICBzZWxlY3RlZERhdGFMaXN0LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQWxsU2VsZWN0ZWRDaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgYWxsU2VsZWN0ZWQgPSAhdGhpcy5wcm9wcy5hbGxTZWxlY3RlZDtcbiAgICBjb25zdCBzZWxlY3RlZERhdGEgPSBhbGxTZWxlY3RlZCA/IHRoaXMuc3RhdGUuYXZhaWxhYmxlRGF0YUxpc3QgOlxuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFMaXN0LmZpbHRlcihkYXRhID0+IGRhdGEuaXNMb2NrZWQgPT09IHRydWUpO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoeyBhbGxTZWxlY3RlZCwgc2VsZWN0ZWREYXRhIH0pO1xuICB9XG5cbiAgaGFuZGxlS2V5d29yZENoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3Qga2V5d29yZCA9IGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGtleXdvcmQgfSk7XG4gIH1cblxuICBoYW5kbGVTb3J0Q2hhbmdlID0gKHsgb2xkSW5kZXgsIG5ld0luZGV4IH0pID0+IHtcbiAgICBpZiAobmV3SW5kZXggPT09IG51bGwgfHwgbmV3SW5kZXggPT09IG9sZEluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNlbGVjdGVkRGF0YSA9IFV0aWxzLmNoYW5nZURhdGFTb3J0KHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRhTGlzdCwgb2xkSW5kZXgsIG5ld0luZGV4KTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgc2VsZWN0ZWREYXRhLCBhbGxTZWxlY3RlZDogdGhpcy5wcm9wcy5hbGxTZWxlY3RlZCB9KTtcbiAgfVxuXG4gIGhhbmRsZVNlbGVjdEl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIC8vIGFkZCBzZWxlY3RlZCBpdGVtIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3RcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcbiAgICAgIGFsbFNlbGVjdGVkOiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YUxpc3Quc2l6ZSArIDEgPT09IHRoaXMucHJvcHMuYXZhaWxhYmxlRGF0YS5zaXplLFxuICAgICAgc2VsZWN0ZWREYXRhOiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YUxpc3QucHVzaChpdGVtKSxcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVVuc2VsZWN0SXRlbSA9IChpdGVtKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7XG4gICAgICBhbGxTZWxlY3RlZDogZmFsc2UsXG4gICAgICBzZWxlY3RlZERhdGE6IHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRhTGlzdC5maWx0ZXIoaSA9PiBpLnZhbHVlICE9PSBpdGVtLnZhbHVlKSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpZCA9IHRoaXMucHJvcHMuaWQgPyBgb2Mtc2VsZWN0LW9yZGVyLWxpc3QtJHt0aGlzLnByb3BzLmlkfWAgOiAnb2Mtc2VsZWN0LW9yZGVyLWxpc3QnO1xuICAgIHJldHVybiAoXG4gICAgICA8R3JpZCBpZD17aWR9IGZsdWlkPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgeHM9ezZ9PlxuICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1rZXl3b3JkLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxTZWFyY2hCYXJcbiAgICAgICAgICAgICAgICBkeW5hbWljU2VhcmNoU3RhcnRzRnJvbT17MX1cbiAgICAgICAgICAgICAgICBpbnB1dENsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWtleXdvcmQtaW5wdXRcIlxuICAgICAgICAgICAgICAgIG9uU2VhcmNoPXt0aGlzLmhhbmRsZUtleXdvcmRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgc2VhcmNoUGxhY2VIb2xkZXI9e3RoaXMucHJvcHMuc2VhcmNoUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgdG9vbHRpcD17dGhpcy5wcm9wcy50cmFuc2xhdGlvbnMuc2VhcmNoVG9vbHRpcH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5rZXl3b3JkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgeHM9ezR9PlxuICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1sYWJlbFwiPlxuICAgICAgICAgICAgICA8Q29udHJvbExhYmVsPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRyYW5zbGF0aW9ucy5hdmFpbGFibGVMaXN0TGFiZWx9XG4gICAgICAgICAgICAgIDwvQ29udHJvbExhYmVsPlxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCB4cz17Mn0+XG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1zZWxlY3QtYWxsLWNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLmFsbFNlbGVjdGVkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUFsbFNlbGVjdGVkQ2hhbmdlfVxuICAgICAgICAgICAgICAgIGxhYmVsPXt0aGlzLnByb3BzLnRyYW5zbGF0aW9ucy5hbGxMYWJlbH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezZ9PlxuICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1sYWJlbFwiPlxuICAgICAgICAgICAgICA8Q29udHJvbExhYmVsPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRyYW5zbGF0aW9ucy5zZWxlY3RlZExpc3RMYWJlbH1cbiAgICAgICAgICAgICAgPC9Db250cm9sTGFiZWw+XG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCB4cz17Nn0+XG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICA8QXZhaWxhYmxlRGF0YUxpc3RcbiAgICAgICAgICAgICAgICBpdGVtcz17dGhpcy5zdGF0ZS5hdmFpbGFibGVEYXRhTGlzdH1cbiAgICAgICAgICAgICAgICBvblNlbGVjdEl0ZW09e3RoaXMuaGFuZGxlU2VsZWN0SXRlbX1cbiAgICAgICAgICAgICAgICBvblVuc2VsZWN0SXRlbT17dGhpcy5oYW5kbGVVbnNlbGVjdEl0ZW19XG4gICAgICAgICAgICAgICAgc2VhcmNoS2V5d29yZD17dGhpcy5zdGF0ZS5rZXl3b3JkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCB4cz17Nn0+XG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICA8U2VsZWN0ZWREYXRhTGlzdFxuICAgICAgICAgICAgICAgIGl0ZW1zPXt0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YUxpc3R9XG4gICAgICAgICAgICAgICAgb25Tb3J0Q2hhbmdlPXt0aGlzLmhhbmRsZVNvcnRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgb25SZW1vdmVJdGVtPXt0aGlzLmhhbmRsZVVuc2VsZWN0SXRlbX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvR3JpZD5cbiAgICApO1xuICB9XG59XG4iXX0=