<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');
include('config.php'); 

ini_set('display_errors', 1);
error_reporting(E_ALL);

$inputData = json_decode(file_get_contents('php://input'), true);

$room_id = isset($inputData['room_id']) ? $inputData['room_id'] : null;
$check_in = isset($inputData['check_in']) ? $inputData['check_in'] : null;
$check_out = isset($inputData['check_out']) ? $inputData['check_out'] : null;
$guests = isset($inputData['guests']) ? $inputData['guests'] : null;
$name = isset($inputData['name']) ? $inputData['name'] : null;
$email = isset($inputData['email']) ? $inputData['email'] : null;
$phone = isset($inputData['phone']) ? $inputData['phone'] : null;

if ($room_id && $check_in && $check_out && $guests && $name && $email && $phone) {
    $stmt = $pdo->prepare("SELECT availability_status FROM rooms WHERE id = :room_id");
    $stmt->execute(['room_id' => $room_id]);
    $room = $stmt->fetch();

    if ($room && $room['availability_status'] == 'available') {
        try {
            $pdo->beginTransaction();

            $stmt = $pdo->prepare("INSERT INTO bookings (room_id, check_in, check_out, guests, customer_name, customer_email, customer_phone, status) 
                VALUES (:room_id, :check_in, :check_out, :guests, :name, :email, :phone, 'confirmed')");
            $stmt->execute([
                'room_id' => $room_id,
                'check_in' => $check_in,
                'check_out' => $check_out,
                'guests' => $guests,
                'name' => $name,
                'email' => $email,
                'phone' => $phone
            ]);

            $stmt = $pdo->prepare("UPDATE rooms SET availability_status = 'booked' WHERE id = :room_id");
            $stmt->execute(['room_id' => $room_id]);

            $pdo->commit();

            echo json_encode(['success' => true, 'message' => 'Booking confirmed!']);
    } catch (Exception $e) {
            $pdo->rollBack();
            echo json_encode(['success' => false, 'message' => 'Error: ' . $e->getMessage()]);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'The selected room is not available.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Missing required parameters.']);
}
?>
