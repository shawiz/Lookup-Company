function luc() { 
    var d = document,
    b = d.body,
    l = d.location;
    try {
        if (!b)
            throw(0);
        d.title = '(Looking up company...) ' + d.title;
        l.href = 'http://www.crunchbase.com/search?query=' + l.hostname.match(/[\w\-]+\.[a-zA-Z]+$/);
    } catch(e) {
        alert('Please wait until the page has loaded.');
    }
} luc();
void(0)