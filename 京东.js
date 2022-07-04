window.addEventListener('load',function(){
    scrTop()
})
function scrTop(){
    document.addEventListener('scroll',function(){
        var top = window.pageYOffset
        console.log(top);
    })
}
