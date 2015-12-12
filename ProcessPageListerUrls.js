/**
 * PLUs Playground, helper for: "ProcessPageListerUrls"
 *
 * Copyright 2015 by Martijn Geerts
 *
 * ProcessWire 2.x
 * Copyright (C) 2014 by Ryan Cramer
 * Licensed under GNU/GPL v2, see LICENSE.TXT
 *
 * http://processwire.com
 *
 */

$(function () {

	// Collect selectors
	var selector = {},
		value,
		name,
		timer,

	// Inputfield names
		selectorFields = [
			'listerPage',
			'initSelector',
			'defaultSelector',
			'columns[]',
			'defaultSort'
		],

	// Inputfields to check
		$inputfields = $(":input").filter(function (i, el) {
			return selectorFields.indexOf(el.getAttribute('name')) > -1;
		}),

	// Clickable headers
		$labels = $("#ProcessPageListerUrls .InputfieldContent .InputfieldHeader");

	function showResults(selector) {

		var param = jQuery.param(selector),
			url = config.ProcessPageListerUrls.page + 'url/?' + param,
			text = config.ProcessPageListerUrls.urlText,
			icon = "<i class='fa fa-link'></i> ",
			$inputText = $("<input type='text' class='InputfieldMaxWidth' />").val(url),
			$link = $("<p class='description'><a href='" + url + "' target='_blank'>" + icon + text + "</a></p>"),
			$wrapper = $("<div class='wrapper'/>").hide();

		$("#url-result > .wrapper").each(function () {
			$(this).removeClass('wrapper');
			$(this).slideUp({
				duration: 500,
				complete: function () {
					$(this).remove();
				}
			});
		});

		// output
		$("#url-result").append($wrapper);
		$("#url-result > .wrapper").append($link.css({marginTop: 0}));
		$("#url-result > .wrapper").append($inputText);
		$("#url-result > .wrapper").slideDown({
			duration: 500,
			complete: function () {
				$(this).attr('style', '');
			}
		});
	}

    // close other inputfields
	$labels.on('click', function () {
        var $siblings = $labels.not(this),
            $inputfields = $siblings.parent('.Inputfield');

        $inputfields
            .not('.InputfieldStateCollapsed')
            .addClass('InputfieldStateCollapsed');
	});

    // Trigger the results creation
	$inputfields.on('change keyup', function (evt) {
		clearTimeout(timer);
		timer = setTimeout(function () {
			// clear selector object
			selector = {};
			// inputtype text on keyup
			if (this.type === 'text' && evt.type === 'change') { return; }
			$inputfields.each(function () {
				if (this.type === 'radio' && !this.checked) { return; }
				if (this.type === 'select-multiple') {
					value = $(this).val();
				 } else {
					value = this.value;
				}
				selector[this.name] = value;
			});
			showResults(selector);
		}, 300);
	});
});


