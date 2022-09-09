const dataSource = [
  {
    card_title: 'Multi-Post Stories <br> Gain+Glory',
    card_popup_title: 'Keeping track of hundreds of components ',
    card_image: 'assets/default_work_image.svg',
    card_alt: 'work image',
    card_technologies: [
      'Ruby on rail',
      'css',
      'JavaScript',
      'html',
    ],
    card_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's st andard dummy text ever since the 1500s, when an u nknown printer took a galley of type and scrambled it 1960s with the relea",
    card_live_link: '#',
    card_source_link: '#',
  },
  {
    card_title: 'Multi-Post Stories <br> Gain+Glory',
    card_popup_title: 'Keeping track of hundreds of components ',
    card_image: 'assets/default_work_image.svg',
    card_alt: 'work image',
    card_technologies: [
      'Ruby on rail',
      'css',
      'JavaScript',
      'html',
    ],
    card_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's st andard dummy text ever since the 1500s, when an u nknown printer took a galley of type and scrambled it 1960s with the relea",
    card_live_link: '#',
    card_source_link: '#',
  },
  {
    card_title: 'Multi-Post Stories <br> Gain+Glory',
    card_popup_title: 'Keeping track of hundreds of components ',
    card_image: 'assets/default_work_image.svg',
    card_alt: 'work image',
    card_technologies: [
      'Ruby on rail',
      'css',
      'JavaScript',
      'html',
    ],
    card_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's st andard dummy text ever since the 1500s, when an u nknown printer took a galley of type and scrambled it 1960s with the relea",
    card_live_link: '#',
    card_source_link: '#',
  },
  {
    card_title: 'Multi-Post Stories <br> Gain+Glory',
    card_popup_title: 'Keeping track of hundreds of components ',
    card_image: 'assets/default_work_image.svg',
    card_alt: 'work image',
    card_technologies: [
      'Ruby on rail',
      'css',
      'JavaScript',
      'html',
    ],
    card_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's st andard dummy text ever since the 1500s, when an u nknown printer took a galley of type and scrambled it 1960s with the relea",
    card_live_link: '#',
    card_source_link: '#',
  },
  {
    card_title: 'Multi-Post Stories <br> Gain+Glory',
    card_popup_title: 'Keeping track of hundreds of components ',
    card_image: 'assets/default_work_image.svg',
    card_alt: 'work image',
    card_technologies: [
      'Ruby on rail',
      'css',
      'JavaScript',
      'html',
    ],
    card_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's st andard dummy text ever since the 1500s, when an u nknown printer took a galley of type and scrambled it 1960s with the relea",
    card_live_link: '#',
    card_source_link: '#',
  },
  {
    card_title: 'Multi-Post Stories <br> Gain+Glory',
    card_popup_title: 'Keeping track of hundreds of components ',
    card_image: 'assets/default_work_image.svg',
    card_alt: 'work image',
    card_technologies: [
      'Ruby on rail',
      'css',
      'JavaScript',
      'html',
    ],
    card_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's st andard dummy text ever since the 1500s, when an u nknown printer took a galley of type and scrambled it 1960s with the relea",
    card_live_link: '#',
    card_source_link: '#',
  },
];

const menuItem = document.querySelector('.mobile_navbar_menu_content');
const closeMenu = document.querySelector('.mobile_close_button');
const openMenu = document.querySelector('.mobile_navbar_menu');
const menu = document.querySelector('.mobile_navbar_menu_content');
const modal = document.querySelector('.popup_work_details');
const popupclosebutton = document.querySelector('.modal_close_button');
const modalimageclosebutton = document.querySelector('.modal_image');
const workcontenthtml = document.querySelector('.work_section_content');

function show() {
  menuItem.classList.toggle('visible_nav_menu');
  menuItem.classList.remove('hidden');
}

function close() {
  menuItem.classList.remove('visible_nav_menu');
  menuItem.classList.toggle('hidden');
}

function closepopup() {
  modal.classList.remove('visible_modal');
  modal.classList.toggle('hidden_modal');
}

function showpopup(index) {
  let modalcontent = `${'<div class="modal_popup">'
            + '<div class="modal_container">'
              + '<div class="modal_close_button" onclick="closepopup()"><i class="fa-solid fa-xmark "></i></div>'
            + '<div class="modal_image"  onclick="closepopup()"> </div>'
            + '<div class="desktop_title">'
              + '<h2 class="modal_title">'}${dataSource[index].card_popup_title}</h2>`
            + '<div class="buttons for_desktop">'
              + `<a href="${dataSource[index].card_live_link}"><button class="left_button modal_button">See live <img src="assets/see_live_icon.svg" alt="see live icon"> </button></a>`
              + `<a href="${dataSource[index].card_source_link}"><button class="left_button modal_button">See Source <img src="assets/github_icon.svg" alt="github icon"> </button></a>`
            + '</div></div><ul class="modal_popup_technologies">';
  dataSource[index].card_technologies.forEach((element) => {
    modalcontent += `<li class="work_language_item">${element}</li>`;
  });
  modalcontent += `</ul><p class="popup_description">${dataSource[index].card_description}</p><div class="buttons for_mobile">`
                + `<a href="${dataSource[index].card_live_link}"><button class="left_button modal_button">See live <img src="assets/see_live_icon.svg" alt="see live icon"> </button></a>`
                + `<a href="${dataSource[index].card_source_link}"><button class="left_button modal_button">See Source <img src="assets/github_icon.svg" alt="github icon"> </button></a>`
              + '</div>'
              + '<div class="desktop_pages_navigator">';
  /* check for exist preview */
  if (index === 0) {
    modalcontent += '<button class="right_or_left_button btn" disabled> <i class="bi bi-arrow-left next_or_preview"> </i>Preview Project</button>';
  } else {
    modalcontent += `<button class="right_or_left_button btn" onclick="reload(${index - 1})"> <i class="bi bi-arrow-left next_or_preview"> </i>Preview Project</button>`;
  }
  /** check for  next */
  if (index === (dataSource.length - 1)) {
    modalcontent += '<button class="right_or_left_button btn btn-success left_side" disabled >Next Project <i class="bi bi-arrow-right next_or_preview"> </i> </div></button> </div>';
  } else {
    modalcontent += `<button class="right_or_left_button btn btn-success left_side" onclick="reload(${index + 1})">Next Project <i class="bi bi-arrow-right next_or_preview"> </i> </div></button> </div>`;
  }

  modalcontent += '</div></div>';
  modal.innerHTML = modalcontent;
  modal.classList.toggle('visible_modal');
  modal.classList.remove('hidden_modal');
}

function reload(index) {
  if (index >= 0) {
    closepopup();
    showpopup(index);
  }
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
menu.addEventListener('click', close);
popupclosebutton.addEventListener('click', closepopup);
modalimageclosebutton.addEventListener('click', closepopup);

function buildworkelement(index) {
  let reponse = `${'<div class="work_element">'
          + '<div class="work_image" style="background-image: url(&quot;'}${dataSource[index].card_image}&quot;)"></div>`
          + '<div class="work_details">'
            + `<h3 class="work_title">${dataSource[index].card_title
            }</h3>`
            + '<ul class="work_languages">';

  dataSource[index].card_technologies.forEach((element) => {
    reponse += `<li class="work_language_item">${element}</li>`;
  });
  reponse += `${'</ul>'
  + '<button type="button" class="work_more_detail_button" onclick="show_popup('}${index})"> See Project</button>`
    + '</div>'
  + '</div>';
  return reponse;
}

function buildworkcontent(index) {
  if (index !== 0) {
    let workcontent = '';
    dataSource.forEach((value, index) => {
      workcontent += buildworkelement(index);
    });
    workcontenthtml.innerHTML = workcontent;
  }
}

buildworkcontent(0);

reload(-93);
