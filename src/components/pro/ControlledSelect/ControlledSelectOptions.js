import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Input from '../../Input';
import ControlledSelectOption from './ControlledSelectOption';

class ControlledSelectOptions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filteredOptions: this.props.options || [],
			options: this.props.options || [],
			searchValue: ''
		};
	}

	componentDidMount() {
		this.props.inputRef.current && this.props.inputRef.current.addEventListener('keydown', this.handleFocus);
	}

	componentWillUnmount() {
		this.props.inputRef.current.removeEventListener('keydown');
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.options !== this.props.options) {
			this.setState({
				filteredOptions: this.props.options,
				options: this.props.options
			});
		}
	}

	search = (value) => {
		const filteredOptions = this.state.options.filter((option) => {
			if (option.text) {
				return option.text.toLowerCase().match(value.toLowerCase().trim());
			} else {
				return option.value.toLowerCase().match(value.toLowerCase().trim());
			}
		});

		this.props.changeFocus(null);
		this.setState({ filteredOptions }, () => this.props.setFilteredOptions(this.state.filteredOptions));
	};

	handleFocus = (e) => {
		const { focused } = this.props;

		(e.keyCode === 40 || e.keyCode === 38) && e.preventDefault();
		
		//Enter
		if (e.keyCode === 13 && focused !== null) {
			focused === -1
				? this.props.selectOption(this.props.selectAllValue)
				: this.props.selectOption(this.state.filteredOptions[focused].value);
		}

		//Esc
		e.keyCode === 27 && this.props.changeFocus(null);

		//Down
		if (e.keyCode === 40) {
			focused === null
				? this.state.filteredOptions.length === 1 ? this.props.changeFocus(0) : this.props.changeFocus(-1)
				: focused < this.state.filteredOptions.length - 1 && this.props.changeFocus(1);
		}

		//Up
		if (e.keyCode === 38) {
			focused >= 0 && this.state.filteredOptions.length > 1 && this.props.changeFocus(-1);
		}
	};

	render() {
		const { multiple, search, searchLabel, searchId, selected, selectOption, selectAll } = this.props;

		const classes = classNames('dropdown-content', 'select-dropdown', 'fadeElement');

		return (
			<ul className={classes}>
				{search && (
					<Input
						label={searchLabel}
						id={searchId}
						getValue={this.search}
						data-search="true"
						onKeyDown={this.handleFocus}
					/>
				)}
				<ControlledSelectOption checked={false} disabled={true} icon={null} value={selected} />
				{selectAll && multiple && this.state.filteredOptions.length > 1 ? (
					<ControlledSelectOption
						text={this.props.selectAllLabel}
						value={this.props.selectAllValue}
						checked={this.props.allChecked}
						multiple={true}
						selectOption={selectOption}
						isFocused={this.props.focused === -1}
					/>
				) : null}
				{this.state.filteredOptions.map((option, index) => (
					<ControlledSelectOption
						key={`${option.value}-${index}`}
						checked={option.checked}
						disabled={option.disabled}
						multiple={multiple}
						icon={option.icon}
						text={option.text}
						value={option.value}
						separator={option.separator}
						selectOption={selectOption}
						isFocused={index === this.props.focused}
					/>
				))}
			</ul>
		);
	}
}

ControlledSelectOptions.propTypes = {
	selected: PropTypes.string.isRequired,
	selectOption: PropTypes.func.isRequired,
	multiple: PropTypes.bool,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			checked: PropTypes.bool,
			separator: PropTypes.bool,
			disabled: PropTypes.bool,
			icon: PropTypes.string,
			text: PropTypes.string,
			value: PropTypes.string
		})
	),
	search: PropTypes.bool,
	searchLabel: PropTypes.string,
	searchId: PropTypes.string,
	selectAllLabel: PropTypes.string,
	selectAllValue: PropTypes.string,
	allChecked: PropTypes.bool,
	focused: PropTypes.number,
	changeFocus: PropTypes.func,
	setFilteredOptions: PropTypes.func,
	inputRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
};

ControlledSelectOptions.defaultProps = {
	multiple: false,
	options: [],
	search: false,
	searchLabel: 'Search',
	searchId: 'selectSearchInput',
	selectAllLabel: 'Select All',
	focused: null
};

export default ControlledSelectOptions;
