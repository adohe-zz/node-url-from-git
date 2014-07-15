# node-url-from-git
![Build Status](https://travis-ci.org/AdoHe/node-url-from-git.svg?branch=master)

```js
describe('index.test.js', function () {
    it('should support git://*', function () {
      var url = 'git://github.com/jamesor/mongoose-versioner';
      parser(url).should.equal('github.com/jamesor/mongoose-versioner');
    });

    it('should support git://*.git', function () {
      var url = 'git://github.com/treygriffith/cellar.git';
      parser(url).should.equal('github.com/treygriffith/cellar');
    });

    it('should support https://*', function () {
      var url = 'https://github.com/Empeeric/i18n-node';
      parser(url).should.equal('github.com/Empeeric/i18n-node');
    });

    it('should parse https://*.git', function () {
      var url = 'https://jpillora@github.com/banchee/tranquil.git';
      parser(url).should.equal('github.com/banchee/tranquil');
    });

    it('should return undefined on failure', function () {
      var url = 'git://github.com/justgord/.git';
      assert(parser(url) == null);
    });

    it('should parse git@gist urls', function () {
      var url = 'git@gist.github.com:3135914.git';
      parser(url).should.equal('gist.github.com/3135914');
    });

    it('should parse https://gist urls', function () {
      var url = 'https://gist.github.com/3135914.git';
      parser(url).should.equal('gist.github.com/3135914');
    });

    it('should parse git@github urls', function () {
      var url = 'git@github.com:AdoHe/ImageServer.git';
      parser(url).should.equal('github.com/AdoHe/ImageServer');
    });

    it('should parse company specific git@* urls', function () {
      var url = 'git@dev.sh.westudio.com:framework/Tunnel.git';
      parser(url).should.equal('dev.sh.westudio.com/framework/Tunnel');
    });
})

describe('re', function () {
    it('should get the url parse regex', function () {
        parser.re.source.should.equal(
            /^(?:https?:\/\/|git:\/\/)?(?:[^@]+@)?((?:\w+.?){1,}\w+)[:\/]([^\/]+\/[^\/]+?|[0-9]+)$/.source
        )
    });
})
```
