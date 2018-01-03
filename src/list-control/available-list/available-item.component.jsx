import React from 'react';
import PropTypes from 'prop-types';
import 'font-awesome/scss/font-awesome.scss';
import classNames from 'classnames';

export default class DataItem extends React.PureComponent {
  static propTypes = {
    isSelected: PropTypes.bool,
    label: PropTypes.node,
    handleItemClick: PropTypes.func.isRequired,
  }

  static defaultProps = {
    isSelected: true,
    label: '',
  }

  render() {
    const { isSelected, label, handleItemClick } = this.props;
    const iconClassName = classNames({
      'oc-available-data-item-icon': true,
    });
    return (
      <div className="oc-available-data-item">
        <div className={iconClassName}>
          <i // eslint-disable-line jsx-a11y/no-static-element-interactions
            className={isSelected ? 'fa fa-check-square' : 'fa fa-square-o'}
            onClick={handleItemClick}
          />
        </div>
        <span className="oc-available-data-item-text">
          {label}
        </span>
      </div>
    );
  }
}
