var re = /^(?:https?:\/\/|git:\/\/)?(?:[^@]+@)?((?:\w+.?){2,}\w+)[:\/]([^\/]+\/[^\/]+?|[0-9]+)$/

module.exports = urlFromGit;

function urlFromGit (url) {
    try {
        var m = re.exec(url.replace(/\.git$/, ''));
        var host = m[1];
        var path = m[2];
        return host + '/' + path;
    } catch (err) {
        // ignore
    }
};

urlFromGit.re = re;
