// 107 Num Key  +
// 109 Num Key  -
// 173 Min Key  hyphen/underscor Hey
// 61 Plus key  +/= key
$(document).keydown(function(event) 
{
	if (event.ctrlKey && 
		(event.which == '61'  || 
		event.which == '107' ||
		event.which == '173' || 
		event.which == '109' || 
		event.which == '187' || 
		event.which == '189')) 
	{
		event.preventDefault();
	}
});

$(window).bind('mousewheel DOMMouseScroll', function(event) 
{
	if (event.ctrlKey)
		event.preventDefault();
});
