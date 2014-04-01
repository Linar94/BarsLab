Ext.define('Lib.model.authors', {
  extend: 'Ext.data.Model',
  idProperty: 'id',
  fields: [{
    name: 'count'
  },{
    name: 'next'
  },{
    name: 'previous'
  },{
    name: 'results[]'
  }
  ],
  proxy: {
    type: 'rest',
    url: '/library/authors/',
    reader: {
      type: 'json',
      root: 'results'
    }
  }
});