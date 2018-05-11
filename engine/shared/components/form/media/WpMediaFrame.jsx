const React     = require('react');
const PureMixin = require('react/lib/ReactComponentWithPureRenderMixin');
const $         = jQuery;

require("../../../../../assets/css/icon-selector.bootstrap.min.css");

let WpMediaFrame = React.createClass({
  mixins: [PureMixin],

  getInitialState() {
    return {
      src: this.props.src,
      alt: this.props.alt
    }
  },

  getValue(){
    return this.state;
  },

  wpMedia(btn, cb){
    // Prepare the variable that holds our custom media manager.
    let opMediaFrame;

    // Bind to our click event in order to open up the new media experience.
    $(btn).click(function (e) {
      // Prevent the default action from occurring.
      e.preventDefault();

      // If the frame already exists, re-open it.
      if (opMediaFrame) {
        opMediaFrame.open();
        return;
      }

      opMediaFrame = wp.media.frames.opMediaFrame = wp.media({});

      opMediaFrame.on('select', function () {
        // Grab our attachment selection and construct a JSON representation of the model.
        let mediaAttachment = opMediaFrame.state().get('selection').first().toJSON();

        // Send the attachment URL to our custom input field via $.
        cb(mediaAttachment.url);
      });

      // Now that everything has been set, let's open up the frame.
      opMediaFrame.open();
    });
  },

  componentDidMount() {
    let buttonEl = React.findDOMNode(this.refs.select);
    let inputEl  = React.findDOMNode(this.refs.input);

    this.wpMedia(buttonEl, imageSrc=> {
      $(inputEl).val(imageSrc);
      this.onChange({
        src: imageSrc
      });
    });

  },

  componentWillUnmount(){
    $(React.findDOMNode(this.refs.select)).unbind();
  },

  handleReset(){
    React.findDOMNode(this.refs.input).value = "";
    this.props.onChange();
  },

  onChange(props) {
    this.setState(state => ({
      ...state,
      ...props
    }));

    this.props.onChange();
  },

  render() {
    let { hasAlt, alt, src } = this.props;
    let classes = this.props.className + " form-control image-input";

    return (
      <div className="form-group">
        {this.props.label ? <label>{this.props.label}</label> : null }

        <div className="form-group" style={{ marginBottom: 0 }}>
          <div className="input-group">
            <input defaultValue={src} type="text" className={classes} ref="input"/>
            <span className="input-group-btn">
              <button className="btn btn-primary" ref="select" type="button">
                <span className="fa fa-picture-o"></span> image
              </button>
              <button onClick={this.handleReset} className="btn btn-primary" ref="refresh" type="button">
                <span className="fa fa-undo"></span>
              </button>
            </span>
          </div>
        </div>

        {hasAlt && (
          <div className="form-group">
            <div className="input-group" style={{ width: '100%' }}>
              <span className="input-group-addon" style={{ width: 58 }}>Alt</span>
              <input
                defaultValue={alt}
                className="form-control"
                onChange={(e) => this.onChange({ alt: e.target.value.trim() })}
                ref="text"
                type="text"
              />
            </div>
          </div>
        )}

        <div className="media-preview"></div>
      </div>
    );
  }
});

module.exports = WpMediaFrame;
