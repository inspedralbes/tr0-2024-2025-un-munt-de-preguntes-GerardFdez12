<?php
session_start();

// Càrrega del fitxer JSON
$data = json_decode(file_get_contents('data.json'), true);

// Inicialització de les variables de sessió
if (!isset($_SESSION['preguntes'])) {
    // Escollir 10 preguntes a l'atzar
    $keys = array_rand($data['preguntes'], 10);
    $_SESSION['preguntes'] = array_intersect_key($data['preguntes'], array_flip($keys));
    $_SESSION['puntuacio'] = 0;
    $_SESSION['index'] = 0;
}

// Comprovar si l'usuari ha enviat una resposta
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user_answer = $_POST['resposta'];
    $correct_answer = $_SESSION['preguntes'][$_SESSION['index']]['resposta_correcta'];
    
    if ($user_answer == $correct_answer) {
        $_SESSION['puntuacio']++;
        $feedback = "Correcte!";
    } else {
        $feedback = "Incorrecte! La resposta correcta és: $correct_answer.";
    }

    $_SESSION['index']++;
}

// Comprovem si hem arribat al final de les preguntes
if ($_SESSION['index'] >= count($_SESSION['preguntes'])) {
    echo '<h2>Puntuació final: ' . $_SESSION['puntuacio'] . '/' . count($_SESSION['preguntes']) . '</h2>';
    echo '<form method="post" action="restart.php">
            <button type="submit">Tornar a començar</button>
          </form>';
    session_destroy();
    exit;
}

// Mostrem la pregunta actual
$current_question = $_SESSION['preguntes'][$_SESSION['index']];
?>

<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <title>Quiz de Cotxes</title>
    <script>
        function mostrarFeedback() {
            const feedback = "<?php echo isset($feedback) ? $feedback : ''; ?>";
            if (feedback) {
                document.getElementById('feedback').innerText = feedback;
            }
        }
        window.onload = mostrarFeedback;
    </script>
</head>
<body>
    <h2><?php echo htmlspecialchars($current_question['pregunta']); ?></h2>
    <form method="post" action="">
        <input type="radio" name="resposta" value="<?php echo htmlspecialchars($current_question['resposta_correcta']); ?>" required>
        <label><?php echo htmlspecialchars($current_question['resposta_correcta']); ?></label><br>
        
        <?php foreach ($current_question['respostes_incorrectes'] as $resposta): ?>
            <input type="radio" name="resposta" value="<?php echo htmlspecialchars($resposta); ?>">
            <label><?php echo htmlspecialchars($resposta); ?></label><br>
        <?php endforeach; ?>

        <button type="submit">Enviar resposta</button>
    </form>

    <p id="feedback"></p>
</body>
</html>
