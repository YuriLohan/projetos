const url = 'https://www.youtube.com/watch?v=WPywfWMPgt4'
const btn = document.querySelector('#btn')
function OpenInNewTab(url){
    const win = window.open(url, '_blank')
    win.focus()
}
btn.addEventListener('click', () => {
    OpenInNewTab(url)
})
function dois(){
    alert ("JESUSANIME");
}
function tres(){
    alert ("POU:(");
}