import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@opuscapita/react-checkbox';

export default class DataItem extends React.PureComponent {
  static propTypes = {
    handleItemClick: PropTypes.func.isRequired,
    isLocked: PropTypes.bool,
    isSelected: PropTypes.bool,
    label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  }

  static defaultProps = {
    isLocked: false,
    isSelected: true,
    label: '',
  }

  handleKeyPress = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      this.props.handleItemClick(true);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      this.props.handleItemClick(false);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      this.props.handleItemClick(true);
    }
  }


  render() {
    const {
      isLocked,
      isSelected,
      label,
      handleItemClick,
    } = this.props;
    return (
      <div className="oc-select-order-list-available-data-item">
        <Checkbox
          inputRef={(ref) => { this.input = ref; }}
          checked={isSelected}
          disabled={isLocked}
          onChange={handleItemClick}
          onKeyDown={this.handleKeyPress}
        />
        <span className="oc-select-order-list-available-data-item-text">
          {label}
        </span>
      </div>
    );
  }
}
