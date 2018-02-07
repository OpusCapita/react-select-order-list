import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'react-bootstrap';

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
          checked={isSelected}
          disabled={isLocked}
          onChange={handleItemClick}
        />
        <span className="oc-select-order-list-available-data-item-text">
          {label}
        </span>
      </div>
    );
  }
}
