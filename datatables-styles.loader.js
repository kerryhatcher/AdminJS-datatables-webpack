
module.exports = function (content) {
  this.cacheable(true);
  var config = this.exec(content, this.resourcePath);
  var start =
      "@import          \"~datatables/media/css/jquery.dataTables.css\";\n"
  var custvars = "@import \"./datatables.custom.less\";\n";
  source = start + custvars;
  return source;
}
