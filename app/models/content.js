import Model, { attr, hasMany } from '@ember-data/model';

export default class ContentModel extends Model {
  @attr author;
  @attr content;
  @attr html;
  @attr title;
  @hasMany('tag') tags;
  @attr('id', {
    function() {
      return this.id.split('-').slice(1).join('-');
    },
  })
  contentName;
}
