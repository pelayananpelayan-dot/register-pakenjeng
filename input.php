<?php
$jenis = $_GET['jenis'] ?? '';
if (!$jenis) die("Jenis tidak ditemukan");

$judul = strtoupper(str_replace("_", " ", $jenis));
?>

<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>Input <?= $judul ?></title>
<style>
    body { font-family: Arial; background:#f3f6ff; padding:20px; }
    form { background:white; padding:20px; border-radius:8px; width:500px; margin:auto; }
    input, select { width:100%; padding:8px; margin:8px 0; }
    button { background:#003366; color:white; padding:10px; border:none; width:100%; }
</style>
</head>
<body>

<h2 style="text-align:center"><?= $judul ?></h2>

<form action="simpan.php" method="POST">
    <input type="hidden" name="jenis" value="<?= $jenis ?>">

    Nomor Surat:
    <input type="text" name="no_surat" required>

    Tanggal:
    <input type="date" name="tanggal" required>

    Nama Lengkap:
    <input type="text" name="nama" required>

    Pekerjaan:
    <input type="text" name="pekerjaan">

    Alamat:
    <input type="text" name="alamat" required>

    Desa:
    <input type="text" name="desa">

    Keperluan:
    <input type="text" name="keperluan">

    <button type="submit">Simpan</button>
</form>

</body>
</html>
