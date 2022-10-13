// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:


//urlString = string
//return = string of domain name
function domainName(urlString) {
    urlString = urlString.replace("http://", "").replace("https://", "").replace("www.", "");
    return urlString.split(".")[0];
}

console.log(domainName("http://github.com/carbonfive/raygun"), "github");
console.log(domainName("http://www.zombie-bites.com"), "zombie-bites");
console.log(domainName("https://www.cnet.com"), "cnet");
