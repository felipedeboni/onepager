<?php namespace ThemeXpert\Onepager\Block;

use ThemeXpert\FileSystem\FileSystem as FS;
use ThemeXpert\Onepager\Block\Transformers\ConfigTransformer;

class PresetManager {
  protected $templates = [];
  protected $paths = [];
  protected $ignoredGroups = array();
  protected $ONEPAGER_TEMPLATES = 'onepager_templates';

  public function loadAllFromPath( $path, $url, $groups = array() ) {
    $this->paths[] = compact( "path", "url", "groups" );
  }

  public function add( $file, $url, $groups = array() ) {
    $config = $url == 'db' ? $file : json_decode( file_get_contents( $file ), true );
    if ( ! is_array( $config ) ) {
      return;
    }

    $filename = !empty($config['id']) ? $config['id'] : basename( $file );

    if ( ! array_key_exists( 'screenshot', $config ) ) {
      $imageName            = str_replace( '.json', '.jpg', $filename );
      $config['screenshot'] = trailingslashit( $url ) . $imageName;
    }

    if ( ! array_key_exists( 'group', $config ) ) {
      $config['group'] = [ ];
    }

    if ( ! array_key_exists( 'id', $config ) ) {
      $config['id'] = $filename;
    }

    if ( ! is_array( $config['group'] ) ) {
      $config['group'] = (array) $config['group'];
    }

    $config['group'] = array_merge( $config['group'], (array) $groups );


    $this->templates[] = $config;
  }

  public function loadAll() {
    $this->templates = [];

    foreach ( $this->paths as $path ) {
      $files = FS::files($path['path'], 'json');

      foreach ( $files as $file ) {
        $config_file = untrailingslashit( $path['path'] ) . DIRECTORY_SEPARATOR . $file;
        $this->add( $config_file, $path['url'], $path['groups'] );
      }
    }

    $dbTemplates = $this->loadDatabaseTemplates();

    if ( $dbTemplates ) {
      foreach( $dbTemplates as $template ) {
        $this->add($template, 'db', 'My Templates');
      }
    }
  }

  public function loadDatabaseTemplates() {
    return $this->getTemplates();
  }

  public function all() {
    $this->loadAll();
    $ignoredGroups = $this->getIgnoredGroups();

    // $tpl = $this->templates[0];
    // $this->addTemplate('Custom Tpl', $tpl['sections']);

    return array_filter( $this->templates, function ( $template ) use ( $ignoredGroups ) {
      return ! count( array_intersect( $template['group'], $ignoredGroups ) );
    } );
  }

  /**
   * @return array
   */
  public function getIgnoredGroups() {
    return $this->ignoredGroups;
  }

  /**
   * @param array $ignoredGroups
   */
  public function setIgnoredGroups( $ignoredGroups ) {
    $this->ignoredGroups = array_unique(array_merge((array) $ignoredGroups, $this->ignoredGroups));
  }

  public function addTemplate($name, $sections) {
    $data = $this->getTemplates();
    $isNew = is_bool($data);
    $data = $isNew ? array() : $data;

    $template = array(
      'id' => uniqid(),
      'name' => $name,
      'sections' => $sections
    );

    array_push($data, $template);

    $success;
    if ( $isNew ) {
      $success = add_option($this->ONEPAGER_TEMPLATES, json_encode($data), false, false );
    } else {
      $success = update_option($this->ONEPAGER_TEMPLATES, json_encode($data), false, false );
    }

    return array(
      'success' => $success,
      'template' => $template
    );
  }

  public function removeTemplate($id) {
    $data = $this->getTemplates();
    $newData = array_values(array_filter($data, function($template) use ($id) {
      return $template['id'] != $id;
    }));

    return update_option($this->ONEPAGER_TEMPLATES, json_encode($newData), false, false );
  }

  private function getTemplates() {
    $data = get_option( $this->ONEPAGER_TEMPLATES );

    if ( is_bool($data) ) {
      return false;
    }

    return array_values(json_decode($data, true));
  }
}
