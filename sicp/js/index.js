$(document).ready(function () {
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
				alert('Code Error: Multiple file selected, should only allow one');
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
			alert('The Local File APIs are not fully supported in this browser.');
		})
	}
	
	$("#sicp\\.run_button").click(function () {
		try {
			var output = eval($("#sicp\\.code_textarea").val());
			console.log(output);
			$("#sicp\\.output_textarea").val(output);
		} catch (e) {
			console.log(e);
			$("#sicp\\.output_textarea").val(e);
		}
	});
});