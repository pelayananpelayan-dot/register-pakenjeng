<?php
// Tidak pakai database SQL, hanya JSON
function loadData($file) {
    $path = __DIR__ . "/../data/$file.json";
    if (!file_exists($path)) return [];
    return json_decode(file_get_contents($path), true);
}

function saveData($file, $data) {
    $path = __DIR__ . "/../data/$file.json";
    file_put_contents($path, json_encode($data, JSON_PRETTY_PRINT));
}
?>
