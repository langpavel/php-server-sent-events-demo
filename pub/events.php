<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache'); // recommended to prevent caching of event data.

/**
 * Constructs the SSE data format and flushes that data to the client.
 *
 * @param string $id Timestamp/id of this connection.
 * @param string $msg Line of text that should be transmitted.
 */
function sendMsg($id, $msg) {
  echo "id: $id\n";
  echo "data: $msg\n";
  echo "\n";
  ob_flush();
  flush();
}


$i = 1;

while(1) {
	sendMsg($i++, 'server time: ' . date("h:i:s", time()));
	sleep(1);
}
