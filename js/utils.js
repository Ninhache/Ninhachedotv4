'use strict';

function sleep(ms)
{
	return new Promise(resolve => setTimeout(resolve, ms));
}

function is_in_viewport(el)
{
	const rect = el.getBoundingClientRect();

	return rect.bottom >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight);
}

function read_json(url, callback)
{
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url);

	xhr.onreadystatechange = function(data)
	{
		if (xhr.readyState == 4)
		{
			if (xhr.status == 200)
			{
				let my_data = JSON.parse(data.currentTarget.response);
				callback(my_data);
			}

			else
			{
				console.log('Error pJS - XMLHttpRequest status: ' + xhr.status);
				console.log('Error pJS - File config not found');
			}
		}
	};

	xhr.send();
}

// Github Copilot solution : 
// write a global function to read json and return a callback
/*
function read_json(url, callback)
{
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.responseType = 'json';
	xhr.onload = function()
	{
		if (xhr.status === 200)
		{
			callback(xhr.response);
		}
		else
		{
			console.error('read_json: ' + url + ': ' + xhr.statusText);
		}
	};
	xhr.onerror = function()
	{
		console.error('read_json: ' + url + ': ' + xhr.statusText);
	};
	xhr.send();
}*/
