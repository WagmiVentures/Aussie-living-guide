//render notes section of every page

export function renderPageNotes(pageName, dataFile) {
  let pageHTML = ``;
  const pageToRender = dataFile.filter((item) => item.pageName === pageName);
  console.log(pageToRender);

  console.log(pageToRender[0].pageContents[1]);

  pageToRender.forEach((page) => {
    // console.log(page.pageContents);

    page.pageContents.forEach((note) => {
      //console.log(note.contentHeading + note.contentParas);
      pageHTML +=
        `<h3>${note.contentHeading}</h3>` + `<p>${note.contentParas}</p>`;
    });
  });

  document.querySelector(".notes").innerHTML = pageHTML;
}
