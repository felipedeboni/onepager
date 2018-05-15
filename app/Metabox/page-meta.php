<div class="onepager-meta-container">
  <?php if ( $post->post_status == "publish" ) { ?>
    <div class="toolbar" style="margin-bottom: -12px;">
      <div class="op-btns-group" style="float: none; padding: 10px;">
        <a href="<?php echo $editorUrl ?>" class="op-btn">Load Editor</a>
        <!-- <button type="button" id="onepager-save-layout" class="op-btn">Save Layout</button> -->
        <!-- <button type="button" id="onepager-export-layout" class="op-btn">Export Layout</button> -->
        <!-- <button type="button" id="onepager-import-layout" class="op-btn">Import Layout</button> -->
        <div>
          <!--needed for downloading with ajax-->
          <a id="downloadAnchorElem"></a>
        </div>
      </div>
    </div>
  <?php } ?>
</div>
