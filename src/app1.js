import $ from "jquery";
import "./app1.css";

const $button1 = $('#add');
const $button2 = $('#min');
const $button3 = $('#mul');
const $button4 = $('#chu');
const $number = $('#number');

$button1.on('click', () => {
    let n = parseInt($number.text());
    n += 1;
    $number.text(n);
});
$button2.on('click', () => {
    let n = parseInt($number.text());
    n -= 1;
    $number.text(n);
});
$button3.on('click', () => {
    let n = parseInt($number.text());
    n *= 2;
    $number.text(n);
});
$button4.on('click', () => {
    let n = parseInt($number.text());
    n /= 2;
    $number.text(n);
});