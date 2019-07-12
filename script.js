    var leftArrow = document.getElementById('leftArrow');
    var rightArrow = document.getElementById('rightArrow');
    function gallery(){
   
    initImgNumber = 1,
    maxImgNumber = 3;
    
    leftArrow.addEventListener('click', moveLeft);
    rightArrow.addEventListener('click', moveRight);
    
    function moveLeft(){
        alert('left');
        var image = document.getElementById('image');
       initImgNumber--;
        if(initImgNumber == 0){initImgNumber = maxImgNumber};
        image.setAttribute('src', 'img/' + initImgNumber + '.jpg');
    };
    
    function moveRight(){
        alert('right');
        var image = document.getElementById('image');
        initImgNumber++;
        if(initImgNumber > maxImgNumber){initImgNumber = 1};
        image.setAttribute('src', 'img/' + initImgNumber + '.jpg');
    };
};