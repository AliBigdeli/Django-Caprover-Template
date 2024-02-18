$(document).ready(function () {
  $("#summernote").summernote({
    minHeight: 300,
    toolbar: [
      ["style", ["bold", "italic", "underline", "clear"]],
      ["font", ["strikethrough", "superscript", "subscript"]],
      ["para", ["ul", "ol", "paragraph"]],
      ["height", ["height"]],
      //['view', ['fullscreen']],
    ],
    disable: ["insertImage", "insertVideo"],
  });
  $(".summernote").each(function () {
    $(this).summernote({
      minHeight: 300,
      toolbar: [
        ["style", ["bold", "italic", "underline", "clear"]],
        ["font", ["strikethrough", "superscript", "subscript"]],
        ["para", ["ul", "ol", "paragraph"]],
        ["height", ["height"]],
        //['view', ['fullscreen']],
      ],
      disable: ["insertImage", "insertVideo"],
    });
  });
});
