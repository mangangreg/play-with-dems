$('body').on('mouseover','.g-candidate',function(evt){
    $(evt.currentTarget).toggleClass('focus')
});

var candidates = $('#scrollCandidates .g-candidate');
var candObj={};

for(const [ind,letter] of ['a','s','d','f','g','h','j','k','l',';'].entries()){
    candObj[letter] = candidates[ind]
};

document.onkeypress = function(evt) {
    var char = String.fromCharCode(evt.keyCode);
    if(Object.keys(candObj).includes(char)){
        $(candObj[char]).toggleClass('focus')
    }
};
