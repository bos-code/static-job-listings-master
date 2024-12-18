const filterContainer = document.getElementById("filter");
const filters = filterContainer.querySelector(".filters");
const clearBtn = document.getElementById("clear");
const ul = document.querySelector(".accounts_box");

const card = document.querySelector(".card");

let jobArray = [];

const url = "data.json";

// const getData = async function () {
//   const res = await fetch(`${url}`);
//   const data = await res.json();

//   jobArray = data;
//   renderData();
// };

// function renderData() {
//   jobArray.forEach((res) => {
//     const {
//       company,
//       contract,
//       logo,
//       location,
//       level,
//       position,
//       role,
//       postedAt,
//       featured,
//       new: recent,
//       tools,
//       languages: lang,
//       id,
//     } = res;

//     const listMarkup = `
// <li class="account card" id="${id}">
  
//   <div class="profile">
//     <img src="${logo}" alt="image" class="profile-img">
//     <div class="profile-info">
//       <div class="row flex" id="rowTxts">
//         <p class="name">${company}</p>
//         <p class="tag blue">${recent ? "New!" : ""}</p>
//         <p class="tag black">${featured ? "Featured" : ""}</p>
//       </div>
//       <h3>${position}</h3>
//       <div class="row">
//         <small>${postedAt} <span>.</span></small>
//         <small>${contract} <span>.</span></small>
//         <small>${location}</small>
//       </div>
//     </div>
//   </div>
//   <div class="skillset flex">
//     <p class="para" data-role="${role}">${role}</p>
//     <p class="para" data-lev="${level}">${level}</p>
//     <p class="para" data-lang="${lang[0]}">${lang[0] ? lang[0] : ""}</p>
//     <p class="para" data-lang="${lang[1]}">${lang[1] ? lang[1] : ""}</p>
//     <p class="para" data-lang="${lang[2]}">${lang[2] ? lang[2] : ""}</p>
//     <p class="para" data-tool="${tools[0]}">${tools[0] ? tools[0] : ""}</p>
//     <p class="para" data-tool="${tools[1]}">${tools[1] ? tools[1] : ""}</p>
//   </div>

// </li>
// `
//     ul.insertAdjacentHTML("afterend", listMarkup);
//     CleanChildren()
//   });
// }

async function getData() {
  const res = await fetch('data.json');
  const response = await res.json();

  response.forEach(res => {
    const {
      company, contract, logo, location, level, position, role,
      postedAt, featured, new:recent, tools, languages:lang, id,
    } = res;

    const li = document.createElement('li');
    li.className = 'account card';
    li.id = id;
    li.innerHTML = `
      <div class="profile">
        <img src="${logo}" alt="image" class="profile-img">
        <div class="profile-info">
          <div class="row flex" id="rowTxts">
            <p class="name">${company}</p>
            <p class="tag blue">${recent ? 'New!' : ''}</p>
            <p class="tag black">${featured ? 'Featured' : ''}</p>
          </div>
          <h3>${position}</h3>
          <div class="row">
            <small>${postedAt} <span>.</span></small>
            <small>${contract} <span>.</span></small>
            <small>${location}</small>
          </div>
        </div>
      </div>
      <div class="skillset flex">
        <p class="para" data-role="${role}">${role}</p>
        <p class="para" data-lev="${level}">${level}</p>
        <p class="para" data-lang="${lang[0]}">${lang[0] ? lang[0] : ''}</p>
        <p class="para" data-lang="${lang[1]}">${lang[1] ? lang[1] : ''}</p>
        <p class="para" data-lang="${lang[2]}">${lang[2] ? lang[2] : ''}</p>
        <p class="para" data-tool="${tools[0]}">${tools[0] ? tools[0] : ''}</p>
        <p class="para" data-tool="${tools[1]}">${tools[1] ? tools[1] : ''}</p>
      </div>
    `;
    ul.appendChild(li);
    removeEmptyTags(li);
  });

  const pTags = document.querySelectorAll('.para');
  pTags.forEach(p => p.addEventListener('click', () => tagHandler(p)));
}

function init() {
  getData();
}

init();
function CleanChildren(elem)
{
    var children = elem.childNodes;
    var len = elem.childNodes.length;

    for (var i = 0; i < len; i++)
    {
        var child = children[i];

        if(child.hasChildNodes())
            CleanChildren(child);
        else
            elem.removeChildNode(child);

    }
}