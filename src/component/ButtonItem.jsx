import { Component } from "rainbowui-core";
import {Util} from 'rainbow-foundation-tools';
import PropTypes from 'prop-types';

export default class ButtonItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.role == "menu") {
            return (
                <div className="btn-group" role="group">
                    <button id="btnGroupDrop1" type="button" onClick={this.onClickItem.bind(this)} 
                    className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" 
                    aria-haspopup="true" aria-expanded="false">
                        {this.props.menuName}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        {this.props.children}
                    </div>
                </div>
            )

        } else if (this.props.role == "menu-item") {
            return (
                <a className="dropdown-item" href={this.props.value} onClick={this.onClickItem.bind(this)}>{this.props.children}</a>
            )

        } else {
            return (
                <button type="button" className="btn btn-secondary" onClick={this.onClickItem.bind(this)}>
                    {this.props.children}
                </button>
            )
        }

    }

    onClickItem() {
        if(!Util.parseBool(this.props.enabled) ) {
            return ;
        }
        this.props.onClick();
    }
};


/**
 * ButtonItem component prop types
 */
ButtonItem.propTypes = $.extend({}, Component.propTypes, {
    enabled:  PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
});

/**
 * Get ButtonItem component default props
 */
ButtonItem.defaultProps = $.extend({}, Component.defaultProps, {
    enabled:'true'
});
