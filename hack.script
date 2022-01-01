var host = getHostname();
var min_sec_level = getServerMinSecurityLevel(host);

while(true){
	
	var actual_sec_level = getServerSecurityLevel(host);

	// If sec level reaches 3 times the minimum,
	// weaken server untill minimum
	if(actual_sec_level >= 10){
		while(actual_sec_level > min_sec_level){
			weaken(host);
			actual_sec_level = getServerSecurityLevel(host);
		}
	}
	
	hack(host);

	// if money reaches 10% of max money, grow server untill 75%
	// This will take a great load of time
	var current_money = getServerMoneyAvailable(host);
	var max_money = getServerMaxMoney(host);
	if(current_money <= 0.1*max_money){
		while(current_money < 0.75*max_money){
			grow(host);
		}
	}


}
