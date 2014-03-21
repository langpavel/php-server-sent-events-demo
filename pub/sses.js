
function startEventSource(eventSource) {

  eventSource.addEventListener('open', function(event) {
    if (console.log) console.log('open', event);

    document.querySelector('#container').innerHTML +=
      '<hr/><i>Open</i><br/>';
  }, false);

  eventSource.addEventListener('welcome', function(messageEvent) {
    if (console.log) console.log('welcome message', messageEvent);

    document.querySelector('#container').innerHTML +=
      '<hr/><b>Welcome sent:</b> ' + messageEvent.data + '<br/>';
  }, false);

  eventSource.addEventListener('message', function(messageEvent) {
    if (console.log) console.log('message', messageEvent);

    document.querySelector('#container').innerHTML +=
      messageEvent.data + '<br/>';
  }, false);

  eventSource.addEventListener('error', function(event) {
    if (console.error) console.error('error', event);

    document.querySelector('#container').innerHTML +=
      '<i>Error: readyState = ' + event.target.readyState + '</i><br/>';
  }, false);

}



if (!!window.EventSource) {

  startEventSource(new EventSource('events.php'));

} else {
  // Použijeme náhradní implementaci nebo polyfill - zase ten IE :(
  alert('Tvuj prohlizec nepodporuje EventSource, pouzij polyfill!');
}
