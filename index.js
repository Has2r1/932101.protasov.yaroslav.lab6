function left_column() {
	document.getElementById("left_column_id").className = "left_column open_column";
	document.getElementById("right_column_id").className = "right_column hidden_column";
	document.getElementById("right_column_img_id").className = "hidden_column_img";
	document.getElementById("left_column_img_id").className = "open_column_img";
}
function right_column() {
	document.getElementById("right_column_id").className = "right_column open_column";
	document.getElementById("left_column_id").className = "left_column hidden_column";
	document.getElementById("left_column_img_id").className = "hidden_column_img";
	document.getElementById("right_column_img_id").className = "open_column_img";
}
function both_columns() {
	document.getElementById("left_column_id").className = "left_column both_open_column";
	document.getElementById("right_column_id").className = "right_column both_open_column";
	document.getElementById("left_column_img_id").className = "both_open_column_img";
	document.getElementById("right_column_img_id").className = "both_open_column_img";
}