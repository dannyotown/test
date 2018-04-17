import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Waves from './Waves';

class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cursorPos: {}
    };
  }

  handleClick(e){
    // Get Cursor Position
    let cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    this.setState({ cursorPos: cursorPos });
  }

  render() {
    const {
      className,
      children,
      hover,
      zoom,
      waves,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      'view',
      zoom && 'zoom',
      hover && 'overlay',
      this.props.waves ? 'Ripple-parent': false,
      className
    );
    return (
      <Tag {...attributes} className={classes} onMouseDown={ this.handleClick.bind(this) } onTouchStart={ this.handleClick.bind(this) } >
        {this.props.children}
        {this.props.waves && <Waves cursorPos={ this.state.cursorPos } />}
      </Tag>
    );
  }
}

View.defaultProps = {
  tag: 'div'
};

View.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  zoom: PropTypes.bool,
  hover: PropTypes.bool,
  tag: PropTypes.string,
  waves: PropTypes.bool
};

export default View;
