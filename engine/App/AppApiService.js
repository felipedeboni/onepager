const $ = jQuery;
const async = require('async');
const notify = require('./../shared/plugins/notify');
const ODataStore = require('./../shared/onepager/ODataStore');
const AppActions = require('./flux/AppActions');

import { serializeSections } from './../shared/onepager/sectionTransformer';

function saveTemplate(name, sections) {
  return new Promise((resolve, reject) => {
    let payload = {
      action: 'onepager_save_template',
      sections: serializeSections(sections),
      name: name
    };

    $.post(ODataStore.ajaxUrl, payload, (res) => {
      if (!res || !res.success) {
        let message = res.message ? res.message : 'Unable to remove the template. Make sure you are logged in.';

        notify.error(message); //bad message
        return reject(message);e
      }

      notify.success('Template created Successfuly.');
      return resolve(res.template);
    });
  });
};

function removeTemplate(id) {
  return new Promise((resolve, reject) => {
    let payload = {
      action: 'onepager_remove_template',
      id
    };

    $.post(ODataStore.ajaxUrl, payload, (res) => {
      if (!res || !res.success) {
        let message = res.message ? res.message : 'Unable to remove the template. Make sure you are logged in.';

        notify.error(message); //bad message
        return reject(message);
      }

      notify.success('Template removed Successfuly.');
      return resolve(res.tpl);
    });
  });
  //
};

module.exports = {
  saveTemplate,
  removeTemplate
};