<?php
/*
*为main.html分页返回菜品列表
*数据格式：JSON格式，形如[{'did':18,'name':'菜名'，'price':'35'},{...},{...}]
*详细说明：分页显示，每次最多返回5条记录；需要客户端提交哪条数据
*/
header('Content-Type:application/json; charset=UTF-8');
$output=[];
@$start = $_REQUEST['start'];//@符号用于压制当前行代码抛出的警告消息
if($start===NULL){$start = 0;}//若客户端没提交请求参数start，则默认赋值为0

include('config.php');//当前位置包含另一个php的文件位置
$conn = mysqli_connect($db_host,$db_user,$db_pwd,$db_name,$db_port);
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql = "";
$count = 5;//一次响应最多向客户端返回5条记录
$sql = "SELECT did,name,img_sm,price,material FROM kf_dish LIMIT $start,$count";
$result = mysqli_query($conn,$sql);
while(($row = mysqli_fetch_assoc($result))!==NULl){
    $output[]=$row;
}
echo  json_encode($output);
?>