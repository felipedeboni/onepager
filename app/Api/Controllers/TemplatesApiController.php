<?php

namespace App\Api\Controllers;

class TemplatesApiController extends ApiController {

  public function saveTemplate() {
    $sections = array_get( $_POST, 'sections', [ ] ) ?: [ ]; //making sure its an array
    $name = array_get($_POST, 'name');

    $sections = $this->filterInput( $sections );

    if ( count($sections) == 0 ) {
      return $this->responseFailed(array(
        'message' => 'The template needs at least one block.'
      ));
    }

    $ret = onepager()->presetManager()->addTemplate($name, $sections);

    if ( $ret['success'] ) {
      $ret['template']['group'] = 'My Templates';

      $this->responseSuccess(array(
        'template' => $ret['template']
      ));
    } else {
      $this->responseFailed(array(
        'message' => 'An unexpected error has occurred.'
      ));
    }
  }

  public function removeTemplate() {
    $id = array_get($_POST, 'id');

    if ( onepager()->presetManager()->removeTemplate($id) ) {
      $this->responseSuccess();
    } else {
      $this->responseFailed(array(
        'message' => 'An unexpected error has occurred.'
      ));
    }
  }

}