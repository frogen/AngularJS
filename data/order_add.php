<?php
/*
*接收order.html提交的订单数据
*数据格式：JSON格式，形如[{'did':18,'name':'菜名'，'price':'35'},{...},{...}]
*详细说明：接受订单信息，保存订单
*/
header('Content-Type:application/json; charset=UTF-8');
$output=["status"=>0,"reason"=>''];
@$user_name = $_REQUEST['user_name'];
@$sex = $_REQUEST['sex'];
@$phone = $_REQUEST['phone'];
@$addr = $_REQUEST['addr'];
@$did = $_REQUEST['did'];
if($user_name===NULL){
    $output['reason'] = '接收人姓名不能为空';
}else if($sex===NULL){
    $output['reason'] = '性别不能为空';
}else if($phone===NULL){
    $output['reason'] = '电话号码不能为空';
}else if($addr===NULL){
     $output['reason'] = '收货地址不能为空';
}else if($did===NULL){
      $output['reason'] = '菜品编号不能为空';
}
if($output['reason']){
    $output['status']=400;
    echo json_encode($output);
    return;
}
$order_time = time()*1000;
include('config.php');//当前位置包含另一个php的文件位置
$conn = mysqli_connect($db_host,$db_user,$db_pwd,$db_name,$db_port);
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql = "INSERT INTO kf_order VALUES(NULL,'$phone','$user_name','$sex','$order_time','$addr','$did')";
$result = mysqli_query($conn,$sql);
if($result){
    $output['status'] = 200;
    $output['reason'] = mysqli_insert_id($conn);
}else{
     $output['status'] = 500;
     $output['reason'] = 'Error!订单提交失败！服务器端错误！请检查你的SQL语句：'.$sql;
}
echo  json_encode($output);
?>