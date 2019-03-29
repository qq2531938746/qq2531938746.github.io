function sleCard() {
    var mmXd = document.getElementById('xd');
    var mmFiexd = document.getElementsByClassName('fiexd')[0];
    var mmLi = mmFiexd.getElementsByTagName('li');
    var mmLump = document.getElementsByClassName('result');
    for (var i = 0; i < mmLi.length; i++) {
        mmLi[i].index = i;
        mmLi[i].onclick = function () {
            for (var j = 0; j < mmLump.length; j++) {
                mmLump[j].style.display = "none";
            }
            mmLump[this.index].style.display = "block";
        }
    }
}
sleCard();
function border1() {
    var mmUl = document.getElementsByClassName('list1')[0];
    var mmLi = mmUl.getElementsByTagName('li');
    // var mmI = mmLi.getElementsByClassName('iconfont');
    for (var i = 0; i < mmLi.length; i++) {
        mmLi[i].onclick = function () {
            for(var j = 0; j < mmLi.length; j++){
                mmLi[j].style.borderColor = "#ccc";
                // mmI[this.index].style.color = 'red';
            }
            this.style.borderColor = "#01BFAD";
        }
    }
}
border1();
function border2() {
    var mmUl = document.getElementsByClassName('list2')[0];
    var mmLi = mmUl.getElementsByTagName('li');
    var prevlast = mmLi[0];
    for (var i = 0; i < mmLi.length; i++) {
        mmLi[i].index = i;
        mmLi[i].onclick = function () {
            prevlast.style.borderColor="";
            this.style.borderColor = "#01BFAD";
            prevlast = this;
        }
    }
}
border2();
function border3() {
    var mmUl = document.getElementsByClassName('list3')[0];
    var mmLi = mmUl.getElementsByTagName('li');
    var prevlast = mmLi[0];
    for (var i = 0; i < mmLi.length; i++) {
        mmLi[i].index = i;
        mmLi[i].onclick = function () {
            prevlast.style.borderColor="";
            this.style.borderColor = "#01BFAD";
            prevlast = this;
        }
    }
}
border3();
function border4() {
    var mmUl = document.getElementsByClassName('list4')[0];
    var mmLi = mmUl.getElementsByTagName('li');
    var prevlast = mmLi[0];
    for (var i = 0; i < mmLi.length; i++) {
        mmLi[i].index = i;
        mmLi[i].onclick = function () {
            for(var j = 0; j < mmLi.length; j++){
                mmLi[j].style.backgroundColor = "#fff";
                mmLi[j].firstChild.style.color = "#666";
            }
            this.style.background = "#01BFAD";
            this.style.borderRadius = "15px";
            this.firstChild.style.color = "#fff";
            this.style.border = 'none';
        }
    }
}
border4();
function border5() {
    var mmUl = document.getElementsByClassName('list5')[0];
    var mmLi = mmUl.getElementsByTagName('li');
    var prevlast = mmLi[0];
    for (var i = 0; i < mmLi.length; i++) {
        mmLi[i].index = i;
        mmLi[i].onclick = function () {
            prevlast.style.borderColor="";
            this.style.borderColor = "#01BFAD";            
            prevlast = this;
        }
    }
}
border5();
function border6() {
    var mmUl = document.getElementsByClassName('list6')[0];
    var mmLi = mmUl.getElementsByTagName('li');
    for (var i = 0; i < mmLi.length; i++) {
        mmLi[i].index = i;
        mmLi[i].onclick = function () {
            for(var j = 0; j < mmLi.length; j++){                
                mmLi[j].firstChild.style.background = "#fff";
                mmLi[j].firstChild.style.color = "#666";
            }
            this.firstChild.style.background = "#01BFAD";
            this.style.borderRadius = "15px";
            this.firstChild.style.color = "#fff";
        }
    }
}
border6();
function border7() {
    var mmUl = document.getElementsByClassName('list7')[0];
    var mmLi = mmUl.getElementsByTagName('li');
    var prevlast = mmLi[0];
    for (var i = 0; i < mmLi.length; i++) {
        mmLi[i].index = i;
        mmLi[i].onclick = function () {
            prevlast.style.borderColor="";
            this.style.borderColor = "#01BFAD";            
            prevlast = this;
        }
    }
}
border7();
function border8() {
    var mmUl = document.getElementsByClassName('list8')[0];
    var mmLi = mmUl.getElementsByTagName('li');
    var prevlast = mmLi[0];
    for (var i = 0; i < mmLi.length; i++) {
        mmLi[i].index = i;
        mmLi[i].onclick = function () {
            for(var j = 0; j < mmLi.length; j++){
                mmLi[j].style.backgroundColor = "#fff";
                mmLi[j].firstChild.style.color = "#666";
            }
            this.style.background = "#01BFAD";
            this.style.borderRadius = "15px";
            this.firstChild.style.color = "#fff";
            this.style.border = 'none';
        }
    }
}
border8();