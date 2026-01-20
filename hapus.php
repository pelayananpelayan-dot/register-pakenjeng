<?php
header('Content-Type: application/json');
include 'database.php';

$id = $_POST['id'] ?? 0;
$register = $_POST['register'] ?? '';

$stmt = $db->prepare("DELETE FROM $register WHERE id=?");
if($stmt->execute([$id])) echo json_encode(["status"=>"success"]);
else echo json_encode(["status"=>"error"]);
?>

function deleteRow(el, register, id){
    if(!confirm("Yakin hapus?")) return;
    fetch('hapus.php',{
        method:'POST',
        headers:{'Content-Type':'application/x-www-form-urlencoded'},
        body:`id=${id}&register=${register}`
    }).then(res=>res.json())
      .then(res=>{
          if(res.status=="success") el.closest('tr').remove();
          else alert("Gagal hapus");
      });
}
