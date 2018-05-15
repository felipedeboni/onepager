const React = require('react');
const AppActions = require('../../flux/AppActions.js');
const Button = require('react-bootstrap/lib/Button');
const Input = require('react-bootstrap/lib/Input');
const Select = require("../../../shared/components/form/Select.jsx");
const swal = require('sweetalert');
const _ = require('underscore');

function confirmUse(proceed) {
  swal({
    title: "Are you sure?",
    text: "This layout will replace your current one!",
    type: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, I want to replace it!",
    closeOnConfirm: true,
    confirmButtonColor: '#d32f2f',
    animation: 'fade'
  }, proceed);
}

function getGroups(templates) {
  let groups = _.unique(templates.reduceRight(function (groups, tpl) {
    return groups.concat(tpl.group);
  }, [])).sort();

  groups.unshift('all', 'My Templates');

  return groups;
}

let TemplatesList = React.createClass({

  getInitialState() {
    return {
      inputValue: '',
      group: 'all'
    }
  },

  // since there's no way to get the promise from AppActions
  // this workaround solve the issue of clearing the input
  // after saving the template
  componentWillReceiveProps(nextProps) {
    let updatedCount = nextProps.templates.length;
    let oldCount = this.props.templates.length;

    // template is added
    if ( updatedCount > oldCount ) {
      this.setState({
        inputValue: ''
      });
    }
  },

  setInputValue(inputValue) {
    this.setState({
      inputValue
    });
  },

  handleSave() {
    let name = this.state.inputValue.trim();

    if ( !name ) {
      return;
    }

    AppActions.saveTemplate(name);
  },

  handleRemove(id) {
    AppActions.removeTemplate(id);
  },

  handleUse(id) {
    confirmUse(() => {
      AppActions.loadPresetById(id);
    });
  },

  setGroup(group) {
    this.setState({
      group
    });
  },

  render() {
    let groups = getGroups(this.props.templates);
    let rawTemplates = this.props.templates;
    let sectionsCount = this.props.sectionsCount;
    let name = this.state.inputValue;
    let isSaving = this.state.isSaving;
    let group = this.state.group;

    console.log(group);

    let templates =
      group === 'all'
        ?
          rawTemplates
        :
          rawTemplates.filter( _ => _.group.indexOf(group) >= 0 );

    return (
      <div className='list-sections'>
        <div className='form-group'>
          <Input
            type='text'
            className='form-control'
            placeholder='Template Name'
            value={name}
            onChange={(e) => this.setInputValue(e.target.value)}
          />
          <Button disabled={name.trim().length === 0 || sectionsCount === 0} bsStyle='primary' className="btn-block" onClick={this.handleSave}>
            <span className="fa fa-plus"></span> Save as Template
          </Button>
        </div>

        <hr className="form-divider" style={{ margin: '10px 0 17px' }} />

        <div className='form-group'>
          <Select
            type="select"
            defaultValue={group}
            options={_.object(groups, groups)}
            onChange={(e) => this.setGroup(e.target.value)}
          />
        </div>

        <div>
          {templates.map(tpl => (
            <div className='section' key={tpl.id}>
              <h3>{tpl.name}</h3>
              <div className="action-btns">
                <span
                  className="fa fa-check"
                  data-toggle="tooltip"
                  title="Use Template"
                  onClick={() => this.handleUse(tpl.id)}
                ></span>
                {tpl.group.indexOf('My Templates') >= 0 && (
                  <span
                    className="fa fa-trash-o"
                    data-toggle="tooltip"
                    title="Delete"
                    onClick={() => this.handleRemove(tpl.id)}
                  ></span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

});

module.exports = TemplatesList;