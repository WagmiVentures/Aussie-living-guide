//render notes section of every page

export function renderPageNotes(pageName, dataFile) {
  let pageHTML = ``;
  const pageToRender = dataFile.filter((item) => item.pageName === pageName);

  pageToRender.forEach((page) => {
    page.pageContents.forEach((note) => {
      let paraHTML = "";
      note.contentParas.forEach((para) => {
        paraHTML += `<p>${para}</p>`;
      });

      pageHTML += `<h3>${note.contentHeading}</h3>` + paraHTML;
    });
  });

  document.querySelector(".notes").innerHTML = pageHTML;
}
