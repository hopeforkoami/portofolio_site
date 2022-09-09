<<<<<<< HEAD
let dataSource = [
  {
    card_title:"Multi-Post Stories <br> Gain+Glory",
    card_popup_title:"Keeping track of hundreds of components ",
    card_image:"assets/default_work_image.svg",
    card_alt:"work image",
    card_technologies:[
      "Ruby on rail",
      "css",
      "JavaScript",
      "html"
    ],
    card_description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's st andard dummy text ever since the 1500s, when an u nknown printer took a galley of type and scrambled it 1960s with the relea",
    card_live_link:"#",
    card_source_link:"#"
  },
  {
    card_title:"Multi-Post Stories <br> Gain+Glory",
    card_popup_title:"Keeping track of hundreds of components ",
    card_image:"assets/default_work_image.svg",
    card_alt:"work image",
    card_technologies:[
      "Ruby on rail",
      "css",
      "JavaScript",
      "html"
    ],
    card_description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's st andard dummy text ever since the 1500s, when an u nknown printer took a galley of type and scrambled it 1960s with the relea",
    card_live_link:"#",
    card_source_link:"#"
  },
  {
    card_title:"Multi-Post Stories <br> Gain+Glory",
    card_popup_title:"Keeping track of hundreds of components ",
    card_image:"assets/default_work_image.svg",
    card_alt:"work image",
    card_technologies:[
      "Ruby on rail",
      "css",
      "JavaScript",
      "html"
    ],
    card_description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's st andard dummy text ever since the 1500s, when an u nknown printer took a galley of type and scrambled it 1960s with the relea",
    card_live_link:"#",
    card_source_link:"#"
  },
  {
    card_title:"Multi-Post Stories <br> Gain+Glory",
    card_popup_title:"Keeping track of hundreds of components ",
    card_image:"assets/default_work_image.svg",
    card_alt:"work image",
    card_technologies:[
      "Ruby on rail",
      "css",
      "JavaScript",
      "html"
    ],
    card_description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's st andard dummy text ever since the 1500s, when an u nknown printer took a galley of type and scrambled it 1960s with the relea",
    card_live_link:"#",
    card_source_link:"#"
  },
  {
    card_title:"Multi-Post Stories <br> Gain+Glory",
    card_popup_title:"Keeping track of hundreds of components ",
    card_image:"assets/default_work_image.svg",
    card_alt:"work image",
    card_technologies:[
      "Ruby on rail",
      "css",
      "JavaScript",
      "html"
    ],
    card_description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's st andard dummy text ever since the 1500s, when an u nknown printer took a galley of type and scrambled it 1960s with the relea",
    card_live_link:"#",
    card_source_link:"#"
  },
  {
    card_title:"Multi-Post Stories <br> Gain+Glory",
    card_popup_title:"Keeping track of hundreds of components ",
    card_image:"assets/default_work_image.svg",
    card_alt:"work image",
    card_technologies:[
      "Ruby on rail",
      "css",
      "JavaScript",
      "html"
    ],
    card_description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's st andard dummy text ever since the 1500s, when an u nknown printer took a galley of type and scrambled it 1960s with the relea",
    card_live_link:"#",
    card_source_link:"#"
  }
];
=======
>>>>>>> dfe9b2fb0d36cdb3c4e37a1e110d49e2c945e98e
const menuItem = document.querySelector('.mobile_navbar_menu_content');
const closeMenu = document.querySelector('.mobile_close_button');
const openMenu = document.querySelector('.mobile_navbar_menu');
const menu = document.querySelector('.mobile_navbar_menu_content');
<<<<<<< HEAD
const modal= document.querySelector('.popup_work_details');
const popup_close_button= document.querySelector('.modal_close_button');
const modal_image_close_button= document.querySelector('.modal_image');
const work_content_html= document.querySelector('.work_section_content');
=======
>>>>>>> dfe9b2fb0d36cdb3c4e37a1e110d49e2c945e98e

function show() {
  menuItem.classList.toggle('visible_nav_menu');
  menuItem.classList.remove('hidden');
}

function close() {
  menuItem.classList.remove('visible_nav_menu');
  menuItem.classList.toggle('hidden');
}
openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
menu.addEventListener('click', close);
popup_close_button.addEventListener('click', close_popup);
modal_image_close_button.addEventListener('click', close_popup);

function build_work_content(){
  let work_content = "";
  dataSource.forEach((value, index)=>{
    work_content+=build_work_element(index);
  }); 
  work_content_html.innerHTML = work_content;

}

function build_work_element(index){
  let reponse = '<div class="work_element">'+
          '<div class="work_image" style="background-image: url(&quot;'+dataSource[index].card_image+'&quot;)"></div>'+
          '<div class="work_details">'+
            '<h3 class="work_title">'+dataSource[index].card_title+
            '</h3>'+
            '<ul class="work_languages">';
  
  dataSource[index].card_technologies.forEach(element => {
    reponse+= '<li class="work_language_item">'+element+'</li>';
  });
  reponse+='</ul>'+
  '<button type="button" class="work_more_detail_button" onclick="show_popup('+index+')"> See Project</button>'+
    '</div>'+
  '</div>';
    return reponse;
}

function show_popup(index){
  let modal_content =  '<div class="modal_popup">'+
            '<div class="modal_container">'+
              '<div class="modal_close_button" onclick="close_popup()"><i class="fa-solid fa-xmark "></i></div>'+
            '<div class="modal_image"  onclick="close_popup()"> </div>'+
            '<div class="desktop_title">'+
              '<h2 class="modal_title">'+dataSource[index].card_popup_title+'</h2>'+
            '<div class="buttons for_desktop">'+
              '<a href="'+dataSource[index].card_live_link+'"><button class="left_button modal_button">See live <img src="assets/see_live_icon.svg" alt="see live icon"> </button></a>'+
              '<a href="'+dataSource[index].card_source_link+'"><button class="left_button modal_button">See Source <img src="assets/github_icon.svg" alt="github icon"> </button></a>'+
            '</div></div><ul class="modal_popup_technologies">';
  dataSource[index].card_technologies.forEach(element => {
    modal_content+= '<li class="work_language_item">'+element+'</li>';
  });
  modal_content +='</ul><p class="popup_description">'+dataSource[index].card_description+'</p><div class="buttons for_mobile">'+
                '<a href="'+dataSource[index].card_live_link+'"><button class="left_button modal_button">See live <img src="assets/see_live_icon.svg" alt="see live icon"> </button></a>'+
                '<a href="'+dataSource[index].card_source_link+'"><button class="left_button modal_button">See Source <img src="assets/github_icon.svg" alt="github icon"> </button></a>'+
              '</div>'+
              '<div class="desktop_pages_navigator">';
  /*check for exist preview*/
  if(index==0){
    modal_content +='<button class="right_or_left_button btn" disabled> <i class="bi bi-arrow-left next_or_preview"> </i>Preview Project</button>';
  }
  else{
    modal_content +='<button class="right_or_left_button btn" onclick="reload('+(index-1)+')"> <i class="bi bi-arrow-left next_or_preview"> </i>Preview Project</button>'
  }
  /**check for  next */
  if(index==(dataSource.length-1)){
    modal_content +='<button class="right_or_left_button btn btn-success left_side" disabled >Next Project <i class="bi bi-arrow-right next_or_preview"> </i> </div></button> </div>';
  }
  else{
    modal_content +='<button class="right_or_left_button btn btn-success left_side" onclick="reload('+(index+1)+')">Next Project <i class="bi bi-arrow-right next_or_preview"> </i> </div></button> </div>';
  }
  
  modal_content +='</div></div>';
  modal.innerHTML = modal_content;
  modal.classList.toggle('visible_modal');
  modal.classList.remove('hidden_modal');
}

function close_popup() {
  modal.classList.remove('visible_modal');
  modal.classList.toggle('hidden_modal');

}

function reload(index){
  close_popup();
  show_popup(index);
}