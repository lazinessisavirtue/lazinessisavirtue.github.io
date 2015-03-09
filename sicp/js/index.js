$(document).ready(function () {

	window.sicp || (window.sicp = Object.create(null));
	
	if (window.sicp.page) {
		throw new Error("Multiple sicp.page initialization");
	}
	window.sicp.page = {};
	
	$("#sicp\\.web_import_button").click(function () {
		$.ajax($("#sicp\\.web_import_text").val(), {
			dataType: "text",
			success: function (data, textStatus, jqXHR) {
				console.log(arguments);
				$("#sicp\\.code_textarea").val(data);
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.log(arguments);
				$("#sicp\\.code_textarea").val("textStatus: " + textStatus
						+ "\nerrorThrown: " + errorThrown);
			}
		})
	});
	
	if (window.File && window.FileReader && window.FileList && window.Blob) {
		$("#sicp\\.local_import_file").change(function() {
			console.log(this.files);
		});
		$("#sicp\\.local_import_button").click(function () {
			var files = $("#sicp\\.local_import_file")[0].files;
			console.log(files);
			if (files.length == 0) {
				alert('No file selected');
			} else if (files.length > 1) {
				alert('Code Error: MULTIPLE file selected');
			} else {
				var reader = new FileReader();
				reader.onload = function (event) {
					console.log(event);
					$("#sicp\\.code_textarea").val(event.target.result);
				};
				reader.readAsText(files[0]);
			}
		})
	} else {
		$("#sicp\\.local_import_file").prop('disabled', true);
		$("#sicp\\.local_import_button").click(function () {
			alert('The Local File APIs are not supported in this browser.');
		})
	}
	
	$("#sicp\\.run_button").click(function () {
		window.sicp.page.code = $("#sicp\\.code_textarea").val();
		try {
			window.sicp.page.output = eval(window.sicp.page.code);
		} catch (e) {
			window.sicp.page.output = e;
		}
		console.log(window.sicp.page.output);
		$("#sicp\\.output_textarea").val(window.sicp.page.output);
	});
});