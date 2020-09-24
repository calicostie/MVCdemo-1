import $ from 'jquery';
import './app4.css';

const $yuan = $('#app4 .yuan');

$yuan.on('mouseenter', () => {
    $yuan.addClass('active');
}).on('mouseleave', () => {
    $yuan.removeClass('active');
});