export const loadScript = (url, callback, options = null) => {
    let script = document.createElement("script"); // create script tag
    script.type = "text/javascript";
    if (options) script.id = options.id;
  
    // when script state is ready and loaded or complete we will call callback
    if (script.readyState) {
      script.onreadystatechange = function () {
        if (script.readyState === "loaded" || script.readyState === "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = () => callback();
    }
  
    script.src = url; // load by url
  
    if (options && document.querySelector(`script#${options.id}`)) {
      callback();
  
      return;
    }
  
    document.getElementsByTagName("head")[0].appendChild(script); // append to head
  };