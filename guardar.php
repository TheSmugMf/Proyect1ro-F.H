<?php
header("Content-type: application/json");
$n = $_POST["nombre"];
$fe = $_POST["fecha"];
$c = $_POST["contenido"];
$f = $_POST["foto"];

$conexion = new mysqli("localhost", "root", "", "proyecto1");

$sql = "INSERT INTO articulos (nombre, fecha, contenido, foto, autor)
VALUES ('$n', '$fe', '$c', '$f', 1)";

$conexion->query($sql);

$e = $conexion->query($sql);
$res = [
    "respuesta" => "ok"
];
if ($e->num_rows == 0) {
    $res["respuesta"] = "error";
}
echo json_encode($res);


