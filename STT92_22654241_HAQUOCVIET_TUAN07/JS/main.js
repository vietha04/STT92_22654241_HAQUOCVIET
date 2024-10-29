
function show(img){
    let showImage=$('img.imageShow');
    var filename=img.src.replace(/^.*[\\\/]/,'');
    showImage[0].src='../IMG/'+filename;
    let showBoard=$('#showBoard');
    showBoard.show();
}
function hide(){
    let showBoard=$('#showBoard');
    showBoard.hide();
}