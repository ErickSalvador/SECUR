<?php
    SESSION_START();
    if(!isset($_SESSION['nom_usr'])) {
        header('location: ../login/index.php');
    }

    $usrnm = $_SESSION['nom_usr'];
    $prgrss = $_SESSION['pro_usr'];
    $id_usr = $_SESSION['ide_usr'];

    include 'header.php'; ?>
        <main>
            <div class="bmn__hom">
                <div class="lsn__cnt" id="lsn_cnt"></div>
            </div>
            <button class="btn__mve btn__bgn" name="btn_bgn">
                Comenzar
            </button>
            <button class="btn__mve btn__dsb" name="btn_lft" id="btn_lft">A
                <i class="icn__mve fas fa-arrow-circle-left"></i>
            </button>
            <button class="btn__mve btn__dsb" name="btn_rgt" id="btn_rgt">D
                <i class="icn__mve fas fa-arrow-circle-right"></i>
            </button>
        </main>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://kit.fontawesome.com/2c36e9b7b1.js" crossorigin="anonymous"></script>
    <script src="../js/spt_head.js"></script>
    <script src="../js/spt_lessons.js"></script>
    <script src="../js/spt_home.js"></script>
<?php
    include '../footer.php'
?> 