'use strict';

fetch('version.txt').then(response => response.text()).then(response =>
{
    document.getElementById('reminder_version_content_data').textContent = response;
});