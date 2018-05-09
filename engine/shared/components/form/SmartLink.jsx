import React from 'react';
import Immutable from 'immutable';
import LinkedStateMixin from 'react/lib/LinkedStateMixin';
import WpSelect from './WpSelect.jsx';
import Select from './Select.jsx';

let SmartLink = React.createClass({
  mixins: [LinkedStateMixin],

  propTypes: {
    text: React.PropTypes.string,
    label: React.PropTypes.string,
    url: React.PropTypes.string,
    target: React.PropTypes.bool
  },

  getInitialState() {
    return {
      linkType: this.props.linkType || 'page',
      pageId: this.props.pageId,
      postId: this.props.postId,
      text: this.props.text,
      url: this.props.url,
      target: this.props.target
    }
  },

  getValue() {
    return this.state;
  },

  onChange() {
    let state = {
      linkType: this.refs.linkType.getValue(),
      pageId: this.refs.page.getValue(),
      postId: this.refs.post.getValue(),
      url: React.findDOMNode(this.refs.url).value,
      text: React.findDOMNode(this.refs.text).value,
      target: React.findDOMNode(this.refs.target).checked
    };

    this.setState(state);
    this.props.onChange();
  },

  render() {
    let currentLinkType = this.state.linkType;
    let { label, text, url, target, linkType, postId, pageId } = this.props;

    return (
      <div className="link-control">
        <label className="control-label">{label}</label>

        <div className="form-group" style={{ marginBottom: 0 }}>
          <div className="input-group" style={{ width: '100%' }}>
            <span className="input-group-addon" style={{ width: 58 }}>Type</span>
            <Select
              ref="linkType"
              options={[
                {
                  id: 'page',
                  name: 'Page'
                },
                {
                  id: 'post',
                  name: 'Post'
                },
                {
                  id: 'external',
                  name: 'External Link'
                }
              ]}
              defaultValue={linkType}
              onChange={this.onChange}
            />
          </div>
        </div>

        <div className="form-group" style={{ marginBottom: 0 }}>
          <div className="input-group" style={{ width: '100%' }}>
            <span className="input-group-addon" style={{ width: 58 }}>Text</span>
            <input defaultValue={text}
              className="form-control"
              onChange={this.onChange}
              ref="text"
              type="text" />
          </div>
        </div>

        <div
          className="form-group"
          style={{
            marginBottom: 0,
            display: currentLinkType === 'external' ? 'block' : 'none'
          }}
        >
          <div className="input-group" style={{ width: '100%' }}>
            <span className="input-group-addon" style={{ width: 58 }}>Url</span>
            <input
              onMouseEnter={() => this.setState({ focus: true })}
              defaultValue={url}
              className="form-control"
              onChange={this.onChange}
              ref="url"
              type="text"
            />
          </div>
        </div>

        <div
          className="form-group"
          style={{
            marginBottom: 0,
            display: currentLinkType === 'page' ? 'block' : 'none'
          }}
        >
          <div className="input-group" style={{ width: '100%' }}>
            <span className="input-group-addon" style={{ width: 58 }}>Page</span>
            <WpSelect
              ref="page"
              defaultValue={pageId}
              type='page'
              onChange={this.onChange}
            />
          </div>
        </div>

        <div
          className="form-group"
          style={{
            marginBottom: 0,
            display: currentLinkType === 'post' ? 'block' : 'none'
          }}
        >
          <div className="input-group" style={{ width: '100%' }}>
            <span className="input-group-addon" style={{ width: 58 }}>Post</span>
            <WpSelect
              ref="post"
              defaultValue={postId}
              type='post'
              onChange={this.onChange}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="input-group" style={{ width: '100%' }}>
            <span
              className="input-group-addon"
              style={{ width: 55 }}
              data-toggle="tooltip"
              data-placement="top"
              title="Open link in a new window"
            >
              New Tab?
            </span>
            <span className="input-group-addon" style={{ width: '100%', textAlign: 'left' }}>
              <input checked={target} ref="target" onChange={this.onChange} type="checkbox" />
            </span>
          </div>
        </div>
      </div>
    );
  }
});

export default SmartLink;
