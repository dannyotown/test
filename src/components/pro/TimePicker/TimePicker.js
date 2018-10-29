import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './clock.css';
import TimeDisplay from './TimeDisplay';
import ClockpickerPlate from './ClockpickerPlate';
import ClockpickerAmPmBlock from './ClockpickerAmPmBlock';
import ClockpickerFooter from './ClockpickerFooter';

const propTypes = {
  id: PropTypes.string.isRequired,
  clearable: PropTypes.bool,
  color: PropTypes.string,
  getValue: PropTypes.func,
  hours: PropTypes.number,
  hoursFormat: PropTypes.number,
  label: PropTypes.string,
  minutes: PropTypes.number,
  placeholder: PropTypes.string
};

const defaultProps = {
  clearable: false,
  color: 'primary',
  getValue: () => {},
  hours: 12,
  hoursFormat: 12,
  label: '',
  minutes: 0,
  placeholder: ''
};

class TimePicker extends Component {
  state = {
    clearable: this.props.clearable,
    color: this.props.color,
    computedHours: '',
    computedMinutes: '',
    dayTime: 'am',
    hours: this.props.hours,
    hoursFormat: this.props.hoursFormat,
    id: this.props.id,
    label: this.props.label,
    minutes: this.props.minutes,
    placeholder: this.props.placeholder,
    pickerDialogOpen: false,
    unitsMode: 'h',
    value: ''
  }

  componentDidMount() {
    this.setState({
      computedHours: this.computeTimeNumber(this.state.hours),
      computedMinutes: this.computeTimeNumber(this.state.minutes)
    }, () => this.setInputText());
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.minutes !== this.state.minutes) {
      this.setState({ computedMinutes: this.computeTimeNumber(this.state.minutes) });
    }

    if(prevState.hours !== this.state.hours) {
      this.setState({ computedHours: this.computeTimeNumber(this.state.hours) });
    }
  }

  setInputText = () => {
    this.setState({ 
      value: this.state.hoursFormat === 12 
      ? `${this.state.computedHours}:${this.state.computedMinutes}${this.state.dayTime}` 
      : `${this.state.computedHours}:${this.state.computedMinutes}`,
      unitsMode: 'h'  
    });
  }
  
  computeTimeNumber = (number) => number < 10 ? `0${number.toString()}` : `${number.toString()}`;

  handlePickerDialogOpen = () => this.setState({ pickerDialogOpen: !this.state.pickerDialogOpen });

  handleModeChange = (unitsMode) => this.setState({ unitsMode });

  handleDayTimeChange = (dayTime) => this.setState({ dayTime });

  handleMinutesChange = (minutes) => this.setState({ minutes });

  handleHoursChange = (hours) => this.setState({ hours });

  handleDoneClick = () => {
    this.setInputText();
    this.handlePickerDialogOpen();
  }

  render() {
    const {
      clearable,
      color,
      computedHours,
      computedMinutes,
      dayTime,
      hours,
      hoursFormat,
      id,
      label,
      minutes,
      placeholder,
      pickerDialogOpen,
      unitsMode,
      value
    } = this.state;

    const inputClasses = classNames(
      "form-control",
      "timepicker",
      pickerDialogOpen && "picker__input picker__input--active"
    );

    const clockClasses = classNames(
      "clockpicker",
      "picker",
      pickerDialogOpen && "picker--opened"
    );

    return (
      <div className="md-form">
        <input 
          type="text" 
          placeholder={placeholder} 
          id={id} 
          className={inputClasses}
          value={value} 
          onClick={this.handlePickerDialogOpen}
          readOnly
        />
        <label htmlFor={id} className="active">{label}</label>
        
        { 
          pickerDialogOpen && 
          <div className={clockClasses} >
            <div className="picker__holder">
              <div className="picker__frame">
                <div className="picker__wrap">
                  <div className="picker__box">
                    <TimeDisplay 
                      hours={computedHours}
                      minutes={computedMinutes} 
                      dayTime={dayTime} 
                      unitsMode={unitsMode} 
                      handleModeChange={this.handleModeChange} 
                      hoursFormat={hoursFormat} 
                    />
                    <ClockpickerPlate
                      color={color}
                      handleMinutesChange={this.handleMinutesChange} 
                      handleHoursChange={this.handleHoursChange} 
                      handleModeChange={this.handleModeChange} 
                      hours={hours}
                      hoursFormat={hoursFormat} 
                      minutes={minutes}
                      unitsMode={unitsMode} 
                    />
                    {
                      hoursFormat === 12 &&
                      <ClockpickerAmPmBlock handleDayTimeChange={this.handleDayTimeChange} />
                    }
                    <ClockpickerFooter handleDoneClick={this.handleDoneClick} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

TimePicker.propTypes = propTypes;
TimePicker.defaultProps = defaultProps;

export default TimePicker;