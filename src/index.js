import './css/style.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './js/component/app-bar.js';
import surah from './js/surah.js';

$('.load-more').on('click', () => {
    $('.konten:hidden').slice(0,15).show();

    if ($('.konten:hidden').length == 0) {
        $('.load-more').fadeOut();
    }
})

surah();
