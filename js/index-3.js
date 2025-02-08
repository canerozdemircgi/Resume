'use strict';

if (searchParams.has('outsource'))
	document.getElementById('reminder_version_content').innerHTML = `\
......... ......... .........
<div class='br00'></div>
......... ......... .........
<div class='br00'></div>
......... ......... .........`;
else
{
	fetch('version.txt').then(response => response.text()).then(response =>
	{
		document.getElementById('reminder_version_content_data').textContent = response;
	});
}