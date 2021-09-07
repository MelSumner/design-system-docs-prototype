'use strict';

const StaticSiteJson = require('broccoli-static-site-json');
const mergeTrees = require('broccoli-merge-trees');
const { readdirSync } = require('fs');
const { join } = require('path');

const contentsJson = new StaticSiteJson('content', {
  attributes: ['title', 'date', 'author'],
  collate: true,
  contentFolder: 'contents',
  contentTypes: ['html'],
  references: ['tags'],
});

const tagsJson = new StaticSiteJson('tags', {
  attributes: ['title', 'type'],
  collate: true,
  contentFolder: 'tags',
  contentTypes: ['html'],
  type: 'tag',
});

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },
  urlsForPrember(distDir) {
    return (
      readdirSync(join(distDir, 'violations'))
        // skip the collated file
        .filter((file) => file !== 'all.json')
        .map((file) => `/violations/${file.replace(/\.json$/, '')}`)
    );
  },

  treeForPublic() {
    return mergeTrees([contentsJson, tagsJson]);
  },
};
