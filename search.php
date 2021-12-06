<!DOCTYPE html>
<html lang="en">
<head>
  
  <title>Document</title>
</head>
<body>

  <?php

    $searchText = $searchLocation = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['search'])) {
      $searchText = test_input($_POST['search']);

      $searchfile = 'searched.txt';
      $fileop = fopen($searchfile, 'a');
      fwrite($fileop, $searchText.'\n');
      fclose($fileop);

      $searchLocation = "Location:https://nakashimawoodworkers.com/?s=+" . $searchText;
      header($searchLocation);
      exit();
    }

    function test_input($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
    }

  ?>
  
</body>
</html>