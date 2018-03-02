import { Component } from "rainbowui-core";
import { Util } from 'rainbow-foundation-tools';
import PropTypes from 'prop-types';

export default class ButtonGroup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // cls: ''
        }
        this.cls = 'btn-group'
    }
    render() {
        if (this.props.role == "toolbar") {
            if (this.cls == 'input-group') {
                return (
                       <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div class="btn-group mr-2" role="group" aria-label={this.props.label}>
                            {this.props.children}
                        </div>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text" id="btnGroupAddon">@</div>
                            </div>
                            <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon" />
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div class="btn-group mr-2" role="group" aria-label={this.props.label}>
                            {this.props.children}
                        </div>
                    </div>
                )
            }
        } else {

            return (
                <div className={this.cls} role="group" aria-label="Basic example">
                    {this.props.children}
                </div>
            )
        }
    }
        componentWillMount() {
            const { size, vertical, inputGroups } = this.props;
            if (size == 'big') {
                this.cls += ' btn-group-lg';
            } else if (size == 'small') {
                this.cls += ' btn-group-sm';
            }

            if (Util.parseBool(vertical)) {
                this.cls += ' btn-group-vertical';
            }
            if (Util.parseBool(inputGroups)) {
                this.cls = 'input-group';
            }
        }
    };


    /**
     * ButtonGroup component prop types
     */
    ButtonGroup.propTypes = $.extend({}, Component.propTypes, {
        vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
        inputGroups: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
    });

    /**
     * Get ButtonGroup component default props
     */
    ButtonGroup.defaultProps = $.extend({}, Component.defaultProps, {
        vertical: 'false',
        inputGroups: 'false'
    });
