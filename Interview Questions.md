
## What is the difference between http & https

Https makes sure that it is a secure connection by encrypting the signal among two end points

## What is the difference between http get and post requests

Http GET requests are just retrieving data by passing parameters into the URL in form of key value pairs and rendering it to the browser, while POST requests submits data to be processed in the body of the request through an html form.

## What is the difference between HTTP 2xx status codes and 4xx status codes?

The HTTP 2xx status codes mean that the request as successful, the 4xx codes mean that the server was not able to retrieve the page.

## What is AJAX (conceptually, what does it do)? Describe a situation where it is useful.

AJAX stands for Asynchronous Javascript and XML (even though you do not need xml to perform an ajax request).
An Ajax requests let's you exchange small amounts of data with the server and deliver it to the browser so that you do not need to reload the page every time.

## What is responsive design?

Responsive Design is a design for an application that consider the different format of the devices that the application can be viewed from.

## What is the difference between these 3 CSS rules?

`div{background:#fff}` this will change the background color of every div in the app  
`#div{background:#fff}` this will change the background color of the element with the id of "div"  
`.div{background:#fff}` this will change the background color of all the elements that have a class "div"

## What is the difference between these 2 uses of the `<script>` tag?

`<script src=”http://example.com/whatever.js”></script>`  
this first script uploads a javascript document called whatever

`<script>var whatever = true</script>`  
this script executes the javascript directly in the template

## What is the difference between these two javascript snippets?

`var x = function() {
return 1+1;
}();`  
this snippet assigns to the variable x the result of the function

`var y = function() {
return 1+1;
};`  
this snippet assigns to the variable y the function itself


## You have started an analytics company with the domain “hashtag­analytics.com”. You provide this tracking pixel for your customers to place on their websites. By summing the number of times the pixel was loaded, you calculate the number of visitors to each site.

`<img src=”http://hashtag­analytics.com/12345/pixel.gif” width=”1” height=”1”/>`

## As it stands, this pixel has a problem because it will be cached by the browser.

### a. Why is caching a problem for the analytics company?

Cache presents a problem in this case because unless specified otherwise when a client goes to a page the browser saves a copy of the images on the user's machine so that the next time the client goes on the page it does not have to get the pages from the server again.

### b. How could you prevent browser caching? (use any technique(s) you want)

To prevent caching you can use this metatag on the header:
```
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
```

this indicates that cached information should not be used and instead requests should be forwarded to the origin server. Or you could use cache-busting arguments to the URL
### c. What will happen if the customer’s website is served over HTTPS? How could you modify the tracking pixel to fix that?
You should serve your pixel over a secure connection as well otherwise it will not be loaded (adding an s to the url).
### d. List some information the tracking company could collect (ex: IP address)
Typically the information collected by web beacons are:  the IP address of your computer; time the material was viewed; the type of browser that retrieved the image; and the existence of cookies previously set by that server.
### e. List some additional information (if any) that could be collected if a `<script>` tag is used instead of an `<img>` tag.

If you include an external script in the <head> section, it is downloaded and executed before the page is shown, so you are sure that if a user saw the page they got tracked. For <img> tags there is no such guarantee, as the user might navigate away before the browser launches the load request for that image. On the other hand the image tracking will work also if javascript is disabled on the user's browser.

With the script tag you can execute some javascript to collect additional information for example the page the hit came from, time spent on the page, etc.
