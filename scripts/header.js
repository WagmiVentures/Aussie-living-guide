//define a function to generate the page header

export function renderPageHeader(pageTopic) {
  //pageTopic must be a string
  const headerHTML = `<h1>${pageTopic}<h1>`;

  document.querySelector(".header").innerHTML = headerHTML;
}
