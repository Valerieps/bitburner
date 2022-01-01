// Gets this levels of servers
var servers = scan(getHostname());
tprint("Weakening this servers:" + servers);


var i = 0;
// for each server on the list, get minimum sec, weaken 5 times
for (i = 0; i < servers.length; i = i + 1) {
	var working_server = servers[i];
	tprint("Working on:" + working_server);

	var min_sec = getServerMinSecurityLevel(working_server);
	var actual_sec_level = getServerSecurityLevel(working_server);
	
	// If sce level is already at minimum, move on to next server
	if (actual_sec_level == min_sec) { continue; }

	// Weakens 5 times before moving to next server
	for (var j = 0; j < 5; j = j + 1) {
		weaken(working_server, { threads: 5 });
		actual_sec_level = getServerSecurityLevel(working_server);
		
		// If it reaches minimum before 5 weakens, stop weakening
		if (actual_sec_level == min_sec) { break; }
	}
}

