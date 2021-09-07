'use strict';

const StaticSiteJson = require('broccoli-static-site-json');
const mergeTrees = require('broccoli-merge-trees');
const { readdirSync } = require('fs');
const { join } = require('path');

const contentsJson = new StaticSiteJson('contents', {
  attributes: ['title', 'author'],
  collate: true,
  contentFolder: 'contents',
  references: ['tags'],
});

const tagsJson = new StaticSiteJson('tags', {
  attributes: ['title', 'type'],
  collate: true,
  contentFolder: 'tags',
  type: 'tag',
});

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },
  urlsForPrember(distDir) {
    return (
      readdirSync(join(distDir, 'contents'))
        // skip the collated file
        .filter((file) => file !== 'all.json')
        .map((file) => `/contents/${file.replace(/\.json$/, '')}`)
    );
  },

  treeForPublic() {
    return mergeTrees([contentsJson, tagsJson]);
  },
};
