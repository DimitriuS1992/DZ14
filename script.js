   
    function gallery(){
    var leftArrow = document.getElementById('leftArrow');
    var rightArrow = document.getElementById('rightArrow');
    var initImgNumber = 1;
    var maxImgNumber = 3;
    
    leftArrow.addEventListener('click', moveLeft);
    rightArrow.addEventListener('click', moveRight);
    
    function moveLeft(){
       
        var image = document.getElementById('image');
        initImgNumber--;
        if(initImgNumber == 0){initImgNumber = maxImgNumber};
        image.setAttribute('src', 'img/' + initImgNumber + '.jpg');
    };
    
    function moveRight(){
        
        var image = document.getElementById('image');
        initImgNumber++;
        if(initImgNumber > maxImgNumber){initImgNumber = 1};
        image.setAttribute('src', 'img/' + initImgNumber + '.jpg');
    };
};