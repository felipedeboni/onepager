<?php namespace ThemeXpert\Providers\WordPress;

use ThemeXpert\Providers\Contracts\ContentInterface;

/**
 * Class Content
 *
 * @package ThemeXpert\Providers\WordPress
 */
class Content implements ContentInterface {
  /**
   * @return array
   */
  public function getPages() {
    return [ "Select" ] + obj_to_array( get_pages(), 'ID', 'post_title' );
  }

  public function getPagesWithHierarchy() {
    $pages = get_pages(array(
      'hierarchical' => 1,
      'sort_order' => 'asc',
      'sort_column' => 'ID',
    ));

    $output = array(
      array(
        'id' => '',
        'name' => 'Select'
      )
    );
    foreach( $pages as $page ) {
      $depth = $this->getPageDepth($pages, $page);
      $pad = str_repeat('-', $depth);
      array_push($output, array(
        'id' => $page->ID,
        'name' => ($depth > 0 ? $pad . ' ' : '') . $page->post_title
      ));
    }

    return $output;
  }

  private function getPageDepth($pages, $page) {
    $depth = 0;
    $parentId = $page->post_parent;

    while( $parentId > 0 ) {
      foreach( $pages as $p ) {
        if ( $p->ID == $parentId ) {
          $depth++;
          $parentId = $p->ID;
          break;
        }
      }

      $parentId = 0;
    }

    return $depth;
  }

  /**
   *
   */
  public function getPosts() {
    return [ "Select" ] + obj_to_array(get_posts(array(
      'sort_order' => 'asc',
      'sort_column' => 'post_title'
    )), 'ID', 'post_title' );
  }

  /**
   * @return array
   */
  public function getMenus() {
    return [ "Select" ] + obj_to_array( get_terms( 'nav_menu', array( 'hide_empty' => 0 ) ), 'term_id', 'name' );
  }

  /**
   * @return array
   */
  public function getCategories() {
    return [ "select" ] + obj_to_array( get_terms( 'category', array( 'hide_empty' => 0 ) ), 'term_id', 'name' );
  }

  /**
   *
   */
  public function getMenuLocations() {
    // TODO: Implement getMenuLocations() method.
  }

  public function isBuildMode() {
    $build = array_key_exists( 'onepager', $_GET ) ? (int) $_GET['onepager'] : 0;
    return $this->isPermitted() && $this->isOnepage() && $build;
  }

  public function isPreview() {
    $preview = array_key_exists( 'onepager_preview', $_GET ) ? (int) $_GET['onepager_preview'] : 0;

    return $this->isPermitted() && $this->isOnepage() && $preview;
  }

  public function isOnepagerByTemplate( $pageId = null ) {
    if ( ! $pageId ) {
      $pageId = $this->getCurrentPageId();
    }

    $template = get_post_meta( $pageId, '_wp_page_template', true );

    //template name is onepage.php or onepager-*.php
    return (
             $template == "onepage.php" ||
             substr( $template, 0, 9 ) == "onepager-" ||
             substr( $template, 0, 9 ) == "onepager/"
          ) ? true : false;
  }

  public function isOnepagerByMeta() {
    $onepager = get_post_meta( $this->getCurrentPageId(), '_onepager_updated', true );

    return $onepager ? true : false;
  }

  public function isOnepage( $pageId = null ) {
    if ( ! $pageId ) {
      $pageId = $this->getCurrentPageId();
    }

    if(is_search()) return false;

    $isOnepage = $this->isOnepagerByTemplate( $pageId ) || $this->isOnepagerByMeta();

    return $isOnepage;
  }

  public function getCurrentPageId() {
    global $post;

    return $post && $post->ID ? $post->ID : null;
  }

  protected function isPermitted() {
    return is_super_admin();
  }
}
