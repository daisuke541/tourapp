<script src="//ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
<script src="js/jquery.bgswitcher.js"></script>
<script>
jQuery(function($) {
    $('.bg-slider').bgSwitcher({
        images: ['image.jpeg','rails.png'], // 切り替える背景画像を指定
    });
});
</script>

<script src="//ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
<script src="js/jquery.bgswitcher.js"></script>
<script>
jQuery(function($) {
    $('.bg-slider').bgSwitcher({
        images: ['image.jpeg','rails.png'], // 切替背景画像を指定
	interval: 3000, // 背景画像を切り替える間隔を指定 3000=3秒
        loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
        shuffle: true, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
        effect: "blind", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
        duration: 500, // エフェクトの時間を指定します。
        easing: "swing" // エフェクトのイージングをlinear,swingから指定
    });
});
</script>