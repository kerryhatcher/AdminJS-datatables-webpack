module.exports = function () {};
module.exports.pitch = function () {
  this.cacheable(true);
  return "require(" + JSON.stringify("datatables/media/js/jquery.dataTables.js") + ");\n";
}
