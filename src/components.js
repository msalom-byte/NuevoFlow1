export function createNavbar(title) {
  return `
    <nav>
      <h1>${title}</h1>
    </nav>
  `;
}

export function createContent(text) {
  return `
    <div>
      <p>${text}</p>
    </div>
  `;
}
