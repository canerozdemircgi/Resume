'use strict';

const reminder_version_content_data = document.getElementById('reminder_version_content_data');

fetch('version.txt').then(response => response.text()).then(response =>
{
	reminder_version_content_data.textContent = response;
});