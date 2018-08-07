import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
/* eslint-disable */
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import DatePicker from 'material-ui-pickers/DatePicker';

export default class MDBDatePicker extends Component {
  state = {
    selectedDate: this.props.value
  }

  handleDateChange = (date) => {
    let newDate;
    if (date === null) {
      newDate = this.props.value
    } else {
      newDate = date._d;
    }
    this.setState({ selectedDate: newDate });
  }

  componentDidUpdate() {
    if(this.props.getValue) {
      this.props.getValue(this.state.selectedDate);
    }
  }

  render() {
    const {
      className,
      getValue,
      value,
      tag: Tag,
      ...attributes
    } = this.props;

    const { selectedDate } = this.state;

    const classes = classNames(
      'md-form',
      className
    );

    return (
      <Tag className={classes}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <DatePicker
              {...attributes} 
              showTodayButton
              format="DD MMMM, YYYY"
              value={selectedDate}
              onChange={this.handleDateChange}
            />
        </MuiPickersUtilsProvider>
      </Tag>
    );
  }
}

MDBDatePicker.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  getValue: PropTypes.func,
  value: PropTypes.instanceOf(Date)
};

MDBDatePicker.defaultProps = {
  tag: 'div',
  value: new Date(),
  getValue: () => {}
};
