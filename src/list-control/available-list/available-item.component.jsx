/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import 'font-awesome/scss/font-awesome.scss';
import { Checkbox } from 'react-bootstrap';

export default class DataItem extends React.PureComponent {
  static propTypes = {
    isLocked: PropTypes.bool,
    isSelected: PropTypes.bool,
    label: PropTypes.node,
    handleItemClick: PropTypes.func.isRequired,
  }

  static defaultProps = {
    isLocked: false,
    isSelected: true,
    label: '',
  }

  renderIcon = () => (
    <Checkbox
      onChange={this.props.isLocked ? undefined : this.props.handleItemClick}
      checked={this.props.isSelected}
      disabled={this.props.isLocked}
    />
  )

  render() {
    const { label } = this.props;
    return (
      <div className="oc-available-data-item">
        <div className="oc-available-item-checkbox">
          {this.renderIcon()}
        </div>
        <span className="oc-available-data-item-text">
          {label}
        </span>
      </div>
    );
  }
}
