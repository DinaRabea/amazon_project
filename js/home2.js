////////////////////////////////////Fetch Data//////////////////////////
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then(apiCall);

let container = document.querySelector(".col");

function apiCall(Date) {
  var MyData = Date.products;
  let cartona = ``;
  for (let i = 0; i <( MyData.length=8); i++) {
    cartona += `
    
    
    
    <div class="col-lg-3 col-sm-6  my-3 d-flex grip">
    
    <div class="card  rounded-3 text-center h-100" style="width: 18rem;box-shadow:5px 5px 5px gray">
    <h5 class="card-title p-2 fw-bolder">${MyData[i].title}</h5>
  <img src="${ MyData[i].images[2]==null? '../images/project1.jpg':MyData[i].images[2]}" class="card-img-top p-4 rounded-3" height="250px" alt="Products">
  <div class="card-body">
    <p class="card-text">Samsung's new variant which goes beyond Galaxy to the Universe</p>
    <a href="#" class="fs-6 fw-light myanchor" style="text-decoration: none;">Shop Now</a>
  </div>
</div>
    </div>`;
  }
  container.innerHTML = cartona;
}

$(document).on('mousemove','.myanchor',function(){
    $(this).css('text-decoration','underline');
    $(this).css('color','tomato');
})

$(document).on('mouseleave','.myanchor',function(){
    $(this).css('text-decoration','none');
    $(this).css('color','blue');
})

$(document).on('mousemove','.myanchor1',function(){
    $(this).css('text-decoration','underline');
    $(this).css('color','tomato');
})

$(document).on('mouseleave','.myanchor1',function(){
    $(this).css('text-decoration','none');
    $(this).css('color','blue');
})



/////////////////////////////////////////////////////

