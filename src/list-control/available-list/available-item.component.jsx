/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import 'font-awesome/scss/font-awesome.scss';
import classNames from 'classnames';

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
    <i
      className={this.props.isSelected ? 'fa fa-check-square' : 'fa fa-square-o'}
      onClick={this.props.isLocked ? undefined : this.props.handleItemClick}
    />
  )

  render() {
    const { label } = this.props;
    const iconClassName = classNames({
      'oc-available-data-item-icon': true,
      'is-locked': !!this.props.isLocked,
    });

    return (
      <div className="oc-available-data-item">
        <div className={iconClassName}>
          {this.renderIcon()}
        </div>
        <span className="oc-available-data-item-text">
          {label}
        </span>
      </div>
    );
  }
}
