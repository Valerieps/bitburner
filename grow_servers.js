// Gets this levels of servers
var servers = scan(getHostname());
var how_many_times_to_grow = 10;
print("Weakening this servers:" + servers);


var i = 0;
// for each server on the list, get minimum sec, weaken to minimum, trace subnets and do
for (i = 0; i < servers.length; i = i + 1) {
	var working_server = servers[i];
	print("\n===== Working on: " + working_server + " =====");

	var max_money = getServerMaxMoney(working_server);
	var available_money = getServerMoneyAvailable(working_server);

	// If money is at maximum, do nothing
	if (available_money == max_money) {
		print("Available money at maximum. Do nothing.");
		continue;
	}

	// Grow X times before moving to next server
	for (var j = 0; j < how_many_times_to_grow; j = j + 1) {
		print("Growing # " + (j+1) );
		grow(working_server);
		available_money = getServerMoneyAvailable(working_server);

		// If it reaches minimum before 5 weakens, stop weakening
		if (available_money == max_money) {
			print("Available money at maximum. Do nothing.");
			break;
		}
	}
}
