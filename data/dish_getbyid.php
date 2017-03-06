<?php
/*
*为detail.html分页返回菜品列表
*数据格式：JSON格式，形如[{'did':18,'name':'菜名'，'price':'35'},{...},{...}]
*详细说明：根据菜品id返回一道菜的全部详情
*/
header('Content-Type:application/json; charset=UTF-8');
$output=[];
@$did = $_REQUEST['did'];
if($did===NULL){
    echo '[]';
    return;
}
include('config.php');//当前位置包含另一个php的文件位置
$conn = mysqli_connect($db_host,$db_user,$db_pwd,$db_name,$db_port);
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql = "SELECT did,name,img_lg,price,material,detail FROM kf_dish WHERE did=$did";
$result = mysqli_query($conn,$sql);
//根据主键查询，最多只能返回一行记录。无需循环读取记录
$row = mysqli_fetch_assoc($result);
$output[]=$row;

echo json_encode($output);
?>