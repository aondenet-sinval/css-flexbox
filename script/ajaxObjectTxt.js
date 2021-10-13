
function loadAlignContent() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("align-content").innerHTML = this.responseText;
  }
  xhttp.open("GET", "./txt/ajax_info_align_content.txt");
  xhttp.send();
}

function loadAlignContentItens() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("align-itens").innerHTML = this.responseText;
  }
  xhttp.open("GET", "./txt/ajax_info_align.txt");
  xhttp.send();
}

function loadDisplayFlex() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("displayflex").innerHTML = this.responseText;
  }
  xhttp.open("GET", "./txt/displayflex.txt");
  xhttp.send();
}

function loadFlexDirection() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("flex-direction").innerHTML = this.responseText;
  }
  xhttp.open("GET", "./txt/flex-direction.txt");
  xhttp.send();
}

function loadGrow() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("flex-grow").innerHTML = this.responseText;
  }
  xhttp.open("GET", "./txt/flex-grow.txt");
  xhttp.send();
}

function loadShrink() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("shrink-ok").innerHTML = this.responseText;
  }
  xhttp.open("GET", "./txt/shrink.txt");
  xhttp.send();
}

function loadOrder() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("order-ok").innerHTML = this.responseText;
  }
  xhttp.open("GET", "./txt/order.txt");
  xhttp.send();
}

function loadSelf() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("self-ok").innerHTML = this.responseText;
  }
  xhttp.open("GET", "./txt/self.txt");
  xhttp.send();
}