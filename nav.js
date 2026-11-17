(function () {
  const items = [
    {label:"Home",href:"/"},
    {label:"Articles",href:"article.html"},
    {label:"Support",href:"support.html"},
    {label:"Login",href:"login.html",button:true}
  ];
  const mount=document.getElementById("site-navigation");
  if(!mount)return;
  const nav=document.createElement("nav");
  nav.className="site-nav";
  nav.setAttribute("aria-label","Main navigation");
  const brand=document.createElement("a");
  brand.className="site-nav-brand";
  brand.href="/";
  brand.textContent="HP Printer Guides";
  nav.appendChild(brand);
  const ul=document.createElement("ul");
  ul.className="site-nav-links";
  items.forEach(item=>{
    const li=document.createElement("li");
    const a=document.createElement("a");
    a.textContent=item.label;
    a.href=item.href;
    if(item.button)a.className="nav-login-button";
    li.appendChild(a);
    ul.appendChild(li);
  });
  nav.appendChild(ul);
  mount.appendChild(nav);
})();