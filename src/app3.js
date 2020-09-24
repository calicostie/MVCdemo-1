import $ from 'jquery';
import './app3.css';

const $square = $('#app3 .square');
$square.on('click', () => {
    $square.toggleClass('active');
    // toggleClass如果没有class就加上class，有就去掉
});