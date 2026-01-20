<?php
header('Content-Type: application/json');
include 'database.php';

$data = json_decode(file_get_contents("php://input"), true);
$register = $data['register']; // sktm, skck, dll
$nomor_surat = $data['nomor_surat'];
$tanggal = $data['tanggal'];

try {
    switch($register){
        case 'sktm':
            $stmt = $db->prepare("INSERT INTO sktm (nomor_surat,tanggal,nama,pekerjaan,alamat,desa,keperluan,keterangan)
                                  VALUES (?,?,?,?,?,?,?,?)");
            $stmt->execute([
                $nomor_surat,
                $tanggal,
                $data['nama'],
                $data['pekerjaan'],
                $data['alamat'],
                $data['desa'],
                $data['keperluan'],
                $data['keterangan']
            ]);
            break;
        case 'skck':
            $stmt = $db->prepare("INSERT INTO skck (nomor_surat,tanggal,nama,ttl,alamat,pendidikan,pekerjaan,keperluan,keterangan)
                                  VALUES (?,?,?,?,?,?,?,?,?)");
            $stmt->execute([
                $nomor_surat,
                $tanggal,
                $data['nama'],
                $data['ttl'],
                $data['alamat'],
                $data['pendidikan'],
                $data['pekerjaan'],
                $data['keperluan'],
                $data['keterangan']
            ]);
            break;
        // Tambahkan tabel lain sesuai register
    }
    echo json_encode(["status"=>"success"]);
} catch(Exception $e){
    echo json_encode(["status"=>"error","msg"=>$e->getMessage()]);
}
?>
