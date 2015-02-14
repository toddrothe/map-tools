describe('Given the Map Module', function () {
  "use strict";

  describe('when calling load()', function () {

    var map;

    beforeEach(function () {
      map = require('gmplus/gmaps')(window);
    });

    it('should load a Google Maps Instance', function () {
      var result = map.load('mymap', {id: 'mymap'});
      expect(result).to.eql({ type: 'text/javascript', src: '//maps.googleapis.com/maps/api/js?v=3.18&callback=GMP.maps.mymap.create' });
    });

  });

});