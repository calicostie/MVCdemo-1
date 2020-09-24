import $ from 'jquery'
import './app2.css';

const $tabContent = $('#app2 .tab-content')
const $tabBar = $('#app2 .tab-bar')
// 其他app里也可能有tab-bar元素，故要在前面加上App2
$tabBar.on('click', 'li', (e) => {
    //此处监听的是tab-bar的li，监听的是父元素，点击任何一个子元素都能被监听到，可以省n次监听
    console.log(e.currentTarget);
    // (e.target)是监听子元素，这个是监听父元素
    const $li = $(e.currentTarget);
    const index = $li.index();
    $tabBar.children()
        .eq(index).addClass('selected')
        .siblings().removeClass('selected')
    $tabContent.children()
        .eq(index).addClass('active')
        .siblings().removeClass('active')
    //children获取子节点，eq获取第index个子节点，addClass加上分类，siblings其他子节点，removeClass去掉分类
    //样式与行为分离，js只管行为，css只管样式
    // js永远不要操作css
})
$tabBar.children().eq(0).trigger('click')
//给第一个标签自动加点击事件