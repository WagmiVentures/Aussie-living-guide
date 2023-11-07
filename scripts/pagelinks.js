//render useful links section of every page

export function renderUsefulLinks(pageName, dataFile) {
  let linkHTML = ``;
  const pageToRender = dataFile.filter((item) => item.pageName === pageName);

  pageToRender.forEach((page) => {
    //console.log(page.contentLinks);

    page.contentLinks.forEach((link) => {
      linkHTML += `<li><a href="${link.contentURL}" target="_blank">${link.description}</a></li>`;
      //console.log(linkHTML);
    });
  });

  document.querySelector(".js-useful-links").innerHTML = linkHTML;
}
