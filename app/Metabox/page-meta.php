<div class="onepager-meta-container">
  <?php if ( $post->post_status == "publish" ) { ?>
    <?php if ( count( $sections ) > 0 ) { ?>
      <div class="toolbar" style="margin-bottom: -12px;">
        <div class="op-btns-group" style="float: none; padding: 10px;">
          <a href="<?php echo $editorUrl ?>" class="op-btn">Load Editor</a>
          <button type="button" id="onepager-save-layout" class="op-btn">Save Layout</button>
          <button type="button" id="onepager-export-layout" class="op-btn">Export Layout</button>
          <button type="button" id="onepager-import-layout" class="op-btn">Import Layout</button>
          <div>
            <!--needed for downloading with ajax-->
            <a id="downloadAnchorElem"></a>
          </div>
        </div>
      </div>
    <?php } else { ?>
      <div class="toolbar">
        <div id="op-group-filter">
          <label>Filter :</label>
          <select>
            <option value=".og-all">All</option>
            <?php foreach ( $groups as $group ): ?>
              <option value=".<?php echo tx_get_preset_group_class( $group ) ?>"><?php echo $group ?></option>
            <?php endforeach; ?>
          </select>
        </div>

        <div class="op-btns-group">
          <a href="<?php echo $editorUrl ?>" class="op-btn"
            style="display: <?php echo ! count( $sections ) ? "none" : "" ?>">Load Editor</a>

          <div style="display:none">
            <button type="button" id="onepager-save-layout" class="onepager-button">Save Layout</button>
            <button type="button" id="onepager-export-layout" class="onepager-button">Export Layout</button>
            <button type="button" id="onepager-import-layout" class="onepager-button">Import Layout</button>

            <!--needed for downloading with ajax-->
            <a id="downloadAnchorElem"></a>
          </div>
        </div>
      </div>
    <?php } ?>
  <?php } ?>

  <?php if ( count( $sections ) == 0 ) { ?>
    <div id="op-presets">
      <!-- Blank Template -->
      <div class="media og-all">
        <figure class="thumbnails">
          <img src="<?php echo op_asset( 'assets/images/blank-template.jpg'); ?>"/>
          <figcaption>
            <h3>Start Blank</h3>
            <button id="blank-template" data-layout-id="blank-template" class="op-btn" type="button">Create</button>
          </figcaption>
        </figure>
      </div>
      <?php foreach ( $onepagerLayouts as $layout ): ?>
        <div class="media og-all <?php echo tx_get_preset_groups_class( $layout['group'] ) ?>">
          <figure class="thumbnails">
            <img src="<?php echo $layout['screenshot'] ?>"/>
            <figcaption>
              <h3><?php echo $layout['name'] ?></h3>
              <button data-layout-id="<?php echo $layout['id'] ?>" class="op-btn op-select-preset" type="button">Select
              </button>
            </figcaption>
          </figure>
        </div>

      <?php endforeach; ?>
    </div>
  <?php } ?>
</div>
