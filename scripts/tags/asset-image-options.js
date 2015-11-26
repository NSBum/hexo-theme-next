'use strict';

var hexoUtil = require('hexo-util');

hexo.extend.tag.register('asset_img_options', function(args, ctx){
    var PostAsset = hexo.model('PostAsset');
    var slug = args.shift();
    if (!slug) return;

    var position = args.shift();
    var margin;
    position = 'left';
    if( position == 'left' ) {
        margin = 'margin-right: 10px;';
    } else {
        margin = 'margin-left: 10px;';
    }
    var asset = PostAsset.findOne({post: this._id, slug: slug});
    if (!asset) return;

    // if title is not assigned, set it ''
    var title = args.length ? args.join(' ') : '';
    // alt always exists
    var alt = title ? title : asset.slug;

    return '<div class="wpr"><figure><img src="' + hexo.config.root + asset.path + '" alt="' + alt + '" title="' + title + '"style="float: ' + position + '; ' + margin + '"></figure>';
});
