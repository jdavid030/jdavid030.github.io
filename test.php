<DOCTYPE>
<html>
    <head>
        <title>Hello World</title>
    </head>
    <body>
        <table width="400px" cellspacing="0px" cellpadding="0px" border="1px">
            <?php 

            $value = 0;
            for($col=0; $col<8; $col++){
                echo "<tr>";
                $value = $col;

                for($row=0; $row<8; $row++){
                    if($value%2 == 0){
                        echo "<td height=35px width=30px bgcolor=#FFFFFF></td>";
                        $value++;
                    } else {
                        echo "<td height=35px width=30px bgcolor=#000000></td>";
                        $value++;
                    }
                }

                echo "</tr>";
            }

            ?>
        </table>
    </body>