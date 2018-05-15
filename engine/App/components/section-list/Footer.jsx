const React      = require('react');
const PureMixin  = require('react/lib/ReactComponentWithPureRenderMixin');
const Tab        = require('../../../shared/components/Tab.jsx');
const ODataStore = require('../../../shared/onepager/ODataStore.js');
const $ = jQuery;

let Footer = React.createClass({
  mixins: [PureMixin],

  propTypes: {
    id   : React.PropTypes.string,
    icon : React.PropTypes.string,
    title: React.PropTypes.string
  },

  getDefaultProps(){
    return {
      disabled: false,
      active  : ''
    };
  },

  handleClick(device, e) {
    $(e.currentTarget).addClass('active').siblings().removeClass('active');
    $('#onepager-preview')
      .removeClass('preview-desktop preview-mobile preview-tablet')
      .addClass('preview-' + device);
  },

  render() {
    return (
      <div className="footer flex flex-center">
        <div className="devices">
          <button
            type="button"
            className="btn-preview preview-desktop active"
            onClick={(e) => this.handleClick('desktop', e)}
          >
            <i className="fa fa-fw fa-desktop"></i>
            <span className="screen-reader-text">Enter desktop preview mode</span>
          </button>
          <button
            type="button"
            className="btn-preview preview-tablet"
            onClick={(e) => this.handleClick('tablet', e)}
          >
            <i className="fa fa-fw fa-tablet"></i>
            <span className="screen-reader-text">Enter tablet preview mode</span>
          </button>
          <button
            type="button"
            className="btn-preview preview-mobile"
            onClick={(e) => this.handleClick('mobile', e)}
          >
            <i className="fa fa-fw fa-mobile"></i>
            <span className="screen-reader-text">Enter mobile preview mode</span>
          </button>
        </div>
      </div>
    );
  }
});

module.exports = Footer;
