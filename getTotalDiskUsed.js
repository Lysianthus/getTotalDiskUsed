/*!
 * This calculates the total disk used by all cPanel accounts under a WHM account.
 * To use, simply run on the console on the "List Accounts" page while showing the complete list of accounts (filter "All").
 * Tested on WHM v80.0.13
 * 
 * @param  {int} n number of accounts
 */
function getTotalDiskUsed (n) {
	
	var totalDiskUsed = 0;

	for(var i = 0; i < n; i++) {
		var individualDisk = parseInt(document.getElementById('listaccts').getElementsByTagName('tr')[i+1].getElementsByClassName('number')[1].getElementsByClassName('quota_insensitive')[0].innerHTML);
		totalDiskUsed += individualDisk;
	}

	var gb = totalDiskUsed / 1024;

	console.log(totalDiskUsed  + " MiB or " + gb + " GiB");

}