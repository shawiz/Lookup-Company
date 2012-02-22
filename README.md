#Lookup a company on Crunchbase bookmarklet

Go to [Home page](http://shawiz.github.com/Lookup-Company/) for easy instllation.

Always check a company by manually searching the name on Crunchbase? This bookmarklet solves your pain.

Make a new bookmark on your bookmark bar and copy this 

    javascript:function%20luc(){var%20d=document,b=d.body,l=d.location;try{if(!b)throw(0);d.title='(Looking%20up%20company...)%20'+d.title;l.href='http://www.crunchbase.com/search?query='+l.hostname.match(/[\w\-]+\.[a-zA-Z]+$/);}catch(e){alert('Please%20wait%20until%20the%20page%20has%20loaded.');}}luc();void(0)

in `location` to make a bookmarklet. Call it "Lookup" or something.

Please note that not all websites are on crunchbase.com